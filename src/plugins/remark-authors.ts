import type { Transformer } from 'unified';
import type { Root, Text } from 'mdast';

async function processAuthors(text: Text) {
	let children = [];
	let lastIndex = 0;
	let match;

	const authorRegex = /\((@[\w\-]+(?:,\s*@[\w\-]+)*)\)/g;
	while ((match = authorRegex.exec(text.value)) !== null) {
		if (match.index > lastIndex) {
			children.push({
				type: text.type,
				value: text.value.slice(lastIndex, match.index)
			});
		}

		const authors = match[1].split(',')
			.map(author => author.trim().replace('@', ''))
			.filter(author => author.length > 0);

		if (authors.length > 0) {
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
		}

		lastIndex = match.index + match[0].length;
	}

	if (lastIndex > 0) {
		if (lastIndex < text.value.length) {
			children.push({
				type: text.type,
				value: text.value.slice(lastIndex)
			});
		}

		if (children.length > 0) {
			const node: Root = text as unknown as Root;
			node.type = 'root';
			node.children = children;
		}
	}
}
export default function plugin(): Transformer<Root> {
	return async (tree) => {
		const promises = [];
		const { visit } = await import('unist-util-visit');
		visit(tree, 'text', (node, index, parent) => {
			if (!parent || index === undefined) {
				return;
			}
			promises.push(processAuthors(node));
		});
		await Promise.all(promises);
	};
}
