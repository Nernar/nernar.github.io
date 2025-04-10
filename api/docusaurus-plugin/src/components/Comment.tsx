// https://github.com/TypeStrong/typedoc-default-themes/blob/master/src/default/partials/comment.hbs
import { Fragment } from 'react';
import type { JSONOutput } from 'typedoc';
import { Markdown } from './Markdown';
import Admonition from '@theme/Admonition';

export interface CommentProps {
	comment?: JSONOutput.Comment;
	root?: boolean;
	hideTags?: string[];
}

export function hasComment(comment?: JSONOutput.Comment): boolean {
	if (!comment) {
		return false;
	}

	return Boolean(
		comment.summary?.some((x) => x.kind !== 'text' || x.text !== '') ||
			(comment.blockTags && comment.blockTags?.length > 0),
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
	if (!comment || !hasComment(comment)) {
		return null;
	}

	// Hide custom tags.
	hideTags.push('@deprecated');
	hideTags.push('@example');
	hideTags.push('@reference');
	hideTags.push('@remarks');
	hideTags.push('@since');

	const blockTags =
		comment.blockTags?.filter((tag) => {
			if (hideTags.includes(tag.tag)) {
				return false;
			}

			return tag.tag !== '@default';
		}) ?? [];

	const deprecatedTag = comment.blockTags?.find((tag) => tag.tag === '@deprecated');
	const exampleTags = comment.blockTags?.filter((tag) => tag.tag === '@example');
	const remarksTag = comment.blockTags?.find((tag) => tag.tag === '@remarks');

	return (
		<div className={`tsd-comment tsd-typography${root ? ' tsd-comment-root' : ''}`}>
			{comment.summary?.length > 0 && (
				<div className="lead">
					<Markdown content={displayPartsToMarkdown(comment.summary)} />
				</div>
			)}

			{deprecatedTag && (
				<Admonition type="danger" title="That feature is obsolete">
					<Markdown content={displayPartsToMarkdown(deprecatedTag.content)} />
				</Admonition>
			)}

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
