// @ts-check
import { visit } from 'unist-util-visit';

async function processAuthors(node) {
	let children = [];
	let lastIndex = 0;
	let match;

	const authorRegex = /\((@[\w\-]+(?:,\s*@[\w\-]+)*)\)/g;
	while ((match = authorRegex.exec(node.value)) !== null) {
		if (match.index > lastIndex) {
			children.push({
				type: node.type,
				value: node.value.slice(lastIndex, match.index)
			});
		}

		const authors = match[1].split(',').map(s => s.trim().replace('@', ''));

		children.push({
			type: 'mdxJsxFlowElement',
			name: 'GithubAuthors',
			attributes: [
				{
					type: 'mdxJsxAttribute',
					name: 'authors',
					value: JSON.stringify(authors)
				}
			]
		});

		lastIndex = match.index + match[0].length;
	}

	if (lastIndex > 0) {
		if (lastIndex < node.value.length) {
			children.push({
				type: node.type,
				value: node.value.slice(lastIndex)
			});
		}

		if (children.length > 0) {
			node.type = 'root';
			node.children = children;
		}
	}
}

export default function remarkAuthors() {
	return async (tree) => {
		const promises = [];
		visit(tree, 'text', (node, index, parent) => {
			if (!parent || index === undefined) {
				return;
			}
			promises.push(processAuthors(node));
		});
		await Promise.all(promises);
	};
}
