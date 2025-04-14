import { TSDDeclarationReflection, TSDReflection, TSDSignatureReflection } from "../types";
import { getKindIconColor } from "./icons";

export function escapeMdx(value: string): string {
	// New values are unicode!
	return value.replace('<', '＜').replace('>', '＞');
}

// Copy of components/Name.tsx and vise-versa, update both to take effect everywhere
export function getReflectionHtml(reflection: TSDDeclarationReflection | TSDSignatureReflection | TSDReflection, colorful: boolean = false): string {
	const color = colorful ? getKindIconColor(reflection.kind) : 'inherit';
	const isDeprecated = reflection.comment?.blockTags?.some((tag) => tag.tag === '@deprecated');
	const isInternal = reflection.comment?.modifierTags?.includes('@internal');

	if (isDeprecated || isInternal) {
		return `<span class="${isDeprecated ? 'tsd-is-deprecated' : ''} ${isInternal ? 'tsd-is-internal' : ''}" style="color: ${color}">${escapeMdx(reflection.name)}</span>`;
	}
	return `<span style="color: ${color}">${escapeMdx(reflection.name)}</span>`;
}

export function separateArrays<T>(array: T[], predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[] {
	const results: T[] = [];
	for (let index = 0, length = array.length; index < length; index++) {
		if (predicate.call(thisArg, array[index], index, array)) {
			results.push(array[index]);
			array.splice(index--, 1);
			length = array.length;
		}
	}
	return results;
}
