import { useContext } from 'react';
import { ApiDataContext } from '../components/ApiDataContext';
import type { TSDDeclarationReflectionMap } from '../types';

export function useReflectionMap(): TSDDeclarationReflectionMap {
	const context = useContext(ApiDataContext);
	return context?.reflections ?? {};
}
