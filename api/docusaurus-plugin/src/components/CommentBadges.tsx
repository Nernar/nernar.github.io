import { JSONOutput } from 'typedoc';

function getModifierClassName(tag: string) {
	switch (tag) {
		case '@beta':
		case '@experimental':
		case "@internal":
			return 'warning';
		case '@alpha':
		case '@deprecated':
			return 'danger';
		case '@since':
			return 'secondary';
		default:
			return 'info';
	}
}

export type CommentWithModifiers = Pick<JSONOutput.Comment, 'blockTags' | 'summary'> &
	Required<Pick<JSONOutput.Comment, 'modifierTags'>>;

export function isCommentWithModifiers(
	comment?: JSONOutput.Comment,
): comment is CommentWithModifiers {
	return comment?.modifierTags?.length > 0 || !!comment?.blockTags?.find((tag) => tag.tag === '@since');
}

interface CommentBadgesProps {
	comment: CommentWithModifiers;
}

export function CommentBadges({ comment }: CommentBadgesProps) {
	const { blockTags, modifierTags } = comment;
	const sinceTag = blockTags?.find((tag) => tag.tag === '@since');

	return (
		<div className="badge-group">
			{sinceTag && (
				<span key={sinceTag.tag} className={`badge badge--${getModifierClassName(sinceTag.tag)}`}>
					{sinceTag.tag.slice(1)}: {sinceTag.content[0]?.text ?? '?'}
				</span>
			)}
			{modifierTags && modifierTags.map((tag) => (
				<span key={tag} className={`badge badge--${getModifierClassName(tag)}`}>
					{tag.slice(1)}
				</span>
			))}
		</div>
	);
}
