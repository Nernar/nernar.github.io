import { createContext } from 'react';
import type { ApiOptions, TSDDeclarationReflectionMap } from '../types';

export interface ApiDataContextState {
	options?: ApiOptions;
	reflections?: TSDDeclarationReflectionMap;
}

export const ApiDataContext = createContext<ApiDataContextState>({});
