/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @ts-check

import path from 'path';
import url from 'url';
import visit from 'unist-util-visit';
import escapeHtml from 'escape-html';

import { stringifyContent } from '@docusaurus/mdx-loader/lib/remark/utils';
import {
	toMessageRelativeFilePath,
	posixPath,
	escapePath
} from '@docusaurus/utils/lib/pathUtils';
import { getFileLoaderUtils } from '@docusaurus/utils/lib/webpackUtils';

const {
	loaders: { inlineMarkdownLinkFileLoader }
} = getFileLoaderUtils();

/**
 * Transforms the link node to a JSX `<a>` element with a `require()` call.
 */
const toAssetRequireNode = (
	[node, index, parent],
	assetPath,
	filePath
) => {
	// require("assets/file.pdf") means requiring from a package called assets
	const relativeAssetPath = `./${posixPath(
		path.relative(path.dirname(filePath), assetPath)
	)}`;

	const parsedUrl = url.parse(node.url);
	const hash = parsedUrl.hash ?? '';
	const search = parsedUrl.search ?? '';

	const href = `require('${
		// A hack to stop Webpack from using its built-in loader to parse JSON
		path.extname(relativeAssetPath) === '.json'
			? `${relativeAssetPath.replace('.json', '.raw')}!=`
			: ''
	}${inlineMarkdownLinkFileLoader}${
		escapePath(relativeAssetPath) + search
	}').default${hash ? ` + '${hash}'` : ''}`;
	const children = stringifyContent(node);
	const title = node.title ? ` title="${escapeHtml(node.title)}"` : '';

	const jsxNode = {
		type: 'jsx',
		value: `<a target="_blank" href={${href}}${title}>${children}</a>`
	};

	parent.children.splice(index, 1, jsxNode);
};

const pathExists = (path) => {
	try {
		return require(path) !== undefined;
	} catch (e) {
		return false;
	}
};

const ensureAssetFileExist = (assetPath, sourceFilePath) => {
	const assetExists = pathExists(assetPath);
	if (!assetExists) {
		throw new Error(
			`Asset ${toMessageRelativeFilePath(
				assetPath,
			)} used in ${toMessageRelativeFilePath(sourceFilePath)} not found.`,
		);
	}
};

const getAssetAbsolutePath = (
	assetPath,
	{ siteDir, filePath, staticDirs }
) => {
	if (assetPath.startsWith('@site/')) {
		const assetFilePath = path.join(siteDir, assetPath.replace('@site/', ''));
		// The @site alias is the only way to believe that the user wants an asset.
		// Everything else can just be a link URL
		ensureAssetFileExist(assetFilePath, filePath);
		return assetFilePath;
	} else if (path.isAbsolute(assetPath)) {
		const assetFilePath = staticDirs.map((dir) => path.join(dir, assetPath)).find(pathExists);
		if (assetFilePath) {
			return assetFilePath;
		}
	} else {
		const assetFilePath = path.join(path.dirname(filePath), assetPath);
		if (pathExists(assetFilePath)) {
			return assetFilePath;
		}
	}
	return null;
};

const processLinkNode = (target, context) => {
	const [node] = target;
	if (!node.url) {
		// Try to improve error feedback
		// see https://github.com/facebook/docusaurus/issues/3309#issuecomment-690371675
		const title =
			node.title ?? node.children[0]?.value ?? '?';
		const line = node.position?.start.line ?? '?';
		throw new Error(
			`Markdown link URL is mandatory in "${toMessageRelativeFilePath(
				context.filePath
			)}" file (title: ${title}, line: ${line}).`
		);
	}

	const parsedUrl = url.parse(node.url);
	if (parsedUrl.protocol || !parsedUrl.pathname) {
		// Don't process pathname:// here, it's used by the <Link> component
		return;
	}
	const hasSiteAlias = parsedUrl.pathname.startsWith('@site/');
	const hasAssetLikeExtension =
		path.extname(parsedUrl.pathname) &&
		!parsedUrl.pathname.match(/\.(?:mdx?|html)(?:#|$)/);
	if (!hasSiteAlias && !hasAssetLikeExtension) {
		return;
	}

	const assetPath = getAssetAbsolutePath(
		decodeURIComponent(parsedUrl.pathname),
		context
	);
	if (assetPath) {
		toAssetRequireNode(target, assetPath, context.filePath);
	}
};

export default function plugin(options) {
	return (root, vfile) => {
		visit(root, 'link', (node, index, parent) => {
			processLinkNode([node, index, parent], {
				...options,
				filePath: vfile.path
			});
		});
	};
}
