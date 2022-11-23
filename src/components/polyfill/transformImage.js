/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @ts-check

import path from 'path';
import url from 'url';
import logger from '@docusaurus/logger';
import visit from 'unist-util-visit';
import escapeHtml from 'escape-html';
import sizeOf from 'image-size';

import {
	toMessageRelativeFilePath,
	posixPath,
	escapePath
} from '@docusaurus/utils/lib/pathUtils';
import { getFileLoaderUtils } from '@docusaurus/utils/lib/webpackUtils';

const {
	loaders: { inlineMarkdownImageFileLoader }
} = getFileLoaderUtils();

const toImageRequireNode = (
	[node, index, parent],
	imagePath,
	filePath
) => {
	let relativeImagePath = posixPath(
		path.relative(path.dirname(filePath), imagePath)
	);
	relativeImagePath = `./${relativeImagePath}`;

	const parsedUrl = url.parse(node.url);
	const hash = parsedUrl.hash ?? '';
	const search = parsedUrl.search ?? '';

	const alt = node.alt ? `alt={"${escapeHtml(node.alt)}"} ` : '';
	const src = `require("${inlineMarkdownImageFileLoader}${
		escapePath(relativeImagePath) + search
	}").default${hash ? ` + '${hash}'` : ''}`;
	const title = node.title ? ` title="${escapeHtml(node.title)}"` : '';
	let width = '';
	let height = '';
	try {
		const size = sizeOf(imagePath);
		if (size?.width) {
			width = ` width="${size.width}"`;
		}
		if (size?.height) {
			height = ` height="${size.height}"`;
		}
	} catch (err) {
		// Workaround for https://github.com/yarnpkg/berry/pull/3889#issuecomment-1034469784
		// TODO remove this check once fixed in Yarn PnP
		if (!process.versions.pnp) {
			logger.warn`The image at path=${imagePath} can't be read correctly. Please ensure it's a valid image.
${err.message}`;
		}
	}

	const jsxNode = {
		type: 'jsx',
		value: `<img ${alt}src={${src}}${title}${width}${height} />`,
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

const ensureImageFileExist = (imagePath, sourceFilePath) => {
	const imageExists = pathExists(imagePath);
	if (!imageExists) {
		throw new Error(
			`Image ${toMessageRelativeFilePath(
				imagePath
			)} used in ${toMessageRelativeFilePath(sourceFilePath)} not found.`
		);
	}
};

const getImageAbsolutePath = (
	imagePath,
	{ siteDir, filePath, staticDirs }
) => {
	if (imagePath.startsWith('@site/')) {
		const imageFilePath = path.join(siteDir, imagePath.replace('@site/', ''));
		ensureImageFileExist(imageFilePath, filePath);
		return imageFilePath;
	} else if (path.isAbsolute(imagePath)) {
		// Absolute paths are expected to exist in the static folder.
		const possiblePaths = staticDirs.map((dir) => path.join(dir, imagePath));
		const imageFilePath = possiblePaths.find(pathExists);
		if (!imageFilePath) {
			throw new Error(
				`Image ${possiblePaths
					.map((p) => toMessageRelativeFilePath(p))
					.join(' or ')} used in ${toMessageRelativeFilePath(
					filePath,
				)} not found.`,
			);
		}
		return imageFilePath;
	}
	// Relative paths are resolved against the source file's folder.
	const imageFilePath = path.join(
		path.dirname(filePath),
		decodeURIComponent(imagePath)
	);
	ensureImageFileExist(imageFilePath, filePath);
	return imageFilePath;
};

const processImageNode = (target, context) => {
	const [node] = target;
	if (!node.url) {
		throw new Error(
			`Markdown image URL is mandatory in "${toMessageRelativeFilePath(
				context.filePath,
			)}" file`,
		);
	}

	const parsedUrl = url.parse(node.url);
	if (parsedUrl.protocol || !parsedUrl.pathname) {
		// pathname:// is an escape hatch, in case user does not want her images to
		// be converted to require calls going through webpack loader
		if (parsedUrl.protocol === 'pathname:') {
			node.url = node.url.replace('pathname://', '');
		}
		return;
	}

	// We try to convert image urls without protocol to images with require calls
	// going through webpack ensures that image assets exist at build time
	const imagePath = getImageAbsolutePath(parsedUrl.pathname, context);
	toImageRequireNode(target, imagePath, context.filePath);
};

export default function plugin(options) {
	return (root, vfile) => {
		visit(root, 'image', (node, index, parent) => {
			processImageNode([node, index, parent], {
				...options,
				filePath: vfile.path
			});
		});
	};
}
