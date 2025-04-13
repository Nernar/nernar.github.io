import { createContext } from 'react';
import { TSDDeclarationReflection } from '../types';

export interface IApiOptions {
	hideInherited: boolean,
	hideInternal: boolean,
	hideDeprecated: boolean,
}

export function shouldHideReflection(declaration: TSDDeclarationReflection, options: IApiOptions): boolean {
	return (options.hideInherited && !!declaration.inheritedFrom) ||
		(options.hideInternal && declaration.comment?.modifierTags?.includes('@internal')) ||
		(options.hideDeprecated && declaration.comment?.blockTags?.some((tag) => tag.tag === '@deprecated'));
}

export const ApiOptionsContext = createContext({
	hideInherited: false,
	hideInternal: false,
	hideDeprecated: false,
	setHideInherited: (_: boolean) => {},
	setHideInternal: (_: boolean) => {},
	setHideDeprecated: (_: boolean) => {}
});
