/* eslint-disable react-perf/jsx-no-new-object-as-prop */

import type { JSONOutput } from 'typedoc';
import { displayPartsToMarkdown } from './Comment';
import { Type } from './Type';
import { marked } from 'marked';
import { decode } from 'html-entities';

export interface DefaultValueProps {
	comment?: JSONOutput.Comment;
	type?: { type: string };
	value?: JSONOutput.SomeType | string;
}

function extractDefaultTag(comment?: JSONOutput.Comment): string | null {
	const tag = comment?.blockTags?.find((tag) => tag.tag === '@default');

	if (!tag) {
		return null;
	}

	return displayPartsToMarkdown(tag.content);
}

export function DefaultValue({ comment, value, type }: DefaultValueProps) {
	if (!comment && !value) {
		return null;
	}

	let defaultTag = extractDefaultTag(comment);

	if (typeof defaultTag === 'string') {
		marked.use({ renderer: { code: (text) => text } });
		defaultTag = decode(marked(defaultTag));
	}

	if (!defaultTag && !value) {
		return null;
	}

	return (
		<span className="tsd-signature-symbol tsd-signature-default-value">
			{' = '}

			{value && <>{typeof value === 'string' ? value : <Type type={value} />}</>}

			{!value && defaultTag && (
				<Type
					type={{ type: 'literal', ...(type?.type === 'intrinsic' ? {} : type), value: defaultTag }}
				/>
			)}
		</span>
	);
}
