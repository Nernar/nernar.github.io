// https://github.com/TypeStrong/typedoc-default-themes/blob/master/src/default/partials/comment.hbs
import { Fragment } from 'react';
import type { JSONOutput } from 'typedoc';
import { Markdown } from './Markdown';
import Admonition from '@theme/Admonition';
import { separateArrays } from '../utils/helpers';

export interface CommentProps {
	comment?: JSONOutput.Comment;
	root?: boolean;
	hideTags?: string[];
}

export function hasComment(comment?: JSONOutput.Comment, hideTags?: string[]): boolean {
	if (!comment) {
		return false;
	}

	return Boolean(
		(comment.summary?.length > 0 && comment.summary.some((x) => x.kind !== 'text' || x.text !== '')) ||
			(comment.blockTags?.length > 0 && comment.blockTags.some(
				(tag) => tag.tag !== '@reference' && tag.tag !== '@default' && tag.tag !== '@since' && !hideTags?.includes(tag.tag)
			)),
	);
}

export function displayPartsToMarkdown(parts: JSONOutput.CommentDisplayPart[]): string {
	return parts
		.map((part) => {
			if (part.kind === 'inline-tag') {
				return `{${part.tag} ${part.text}}`;
			}

			return part.text;
		})
		.join('');
}

export function Comment({ comment, root, hideTags = [] }: CommentProps) {
	if (!comment || !hasComment(comment, hideTags)) {
		return null;
	}

	const blockTags =
		comment.blockTags?.filter((tag) => {
			if (hideTags.includes(tag.tag)) {
				return false;
			}

			return tag.tag !== '@reference' && tag.tag !== '@default' && tag.tag !== '@since';
		}) ?? [];

	const deprecatedTag = separateArrays(blockTags, (tag) => tag.tag === '@deprecated').shift();
	const exampleTags = separateArrays(blockTags, (tag) => tag.tag === '@example');
	const remarksTag = separateArrays(blockTags, (tag) => tag.tag === '@remarks').shift();
	const throwsTags = separateArrays(blockTags, (tag) => tag.tag === '@throws');

	return (
		<div className={`tsd-comment tsd-typography${root ? ' tsd-comment-root' : ''}`}>
			{comment.summary?.length > 0 && (
				<div className="lead">
					<Markdown content={displayPartsToMarkdown(comment.summary)} />
				</div>
			)}

			{deprecatedTag && (
				<Admonition type="warning" title="That feature is obsolete">
					<Markdown content={displayPartsToMarkdown(deprecatedTag.content)} />
				</Admonition>
			)}

			{throwsTags?.length > 0 && throwsTags.map((tag) => (
				<Admonition type="danger" title="Invocation may throw an error">
					<Markdown content={displayPartsToMarkdown(tag.content)} />
				</Admonition>
			))}

			{exampleTags?.length > 0 && exampleTags.map((tag) => (
				<Admonition type="tip" title={tag.name || 'Learn how to use'}>
					<Markdown content={displayPartsToMarkdown(tag.content)} />
				</Admonition>
			))}

			{remarksTag && (
				<Admonition type="note" title="More about capabilities">
					<Markdown content={displayPartsToMarkdown(remarksTag.content)} />
				</Admonition>
			)}

			{blockTags.length > 0 && (
				<dl className="tsd-comment-tags">
					{blockTags.map((tag) => (
						<Fragment key={tag.tag}>
							<dt>
								<strong>{tag.tag}</strong>
							</dt>
							<dd>
								<Markdown content={displayPartsToMarkdown(tag.content)} />
							</dd>
						</Fragment>
					))}
				</dl>
			)}
		</div>
	);
}
