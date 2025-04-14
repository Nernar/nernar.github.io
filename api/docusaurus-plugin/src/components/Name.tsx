import type { TSDDeclarationReflection, TSDReflection, TSDSignatureReflection } from '../types';
import { escapeMdx } from '../utils/helpers';
import { getKindIconColor } from '../utils/icons';

export interface NameProps {
	reflection: TSDDeclarationReflection | TSDSignatureReflection | TSDReflection;
	colorful?: boolean;
}

// Copy of utils/helpers.ts and vise-versa, update both to take effect everywhere
export function Name({ reflection, colorful }: NameProps) {
	const color = colorful ? getKindIconColor(reflection.kind) : 'inherit';
	const isDeprecated = reflection.comment?.blockTags?.some((tag) => tag.tag === '@deprecated');
	const isInternal = reflection.comment?.modifierTags?.includes('@internal');

	if (isDeprecated || isInternal) {
		return (
			<span className={`${isDeprecated ? 'tsd-is-deprecated' : ''} ${isInternal ? 'tsd-is-internal' : ''}`} style={{ color }}>
				{escapeMdx(reflection.name)}
			</span>
		);
	}
	return (
		<span style={{ color }}>{escapeMdx(reflection.name)}</span>
	);
}
