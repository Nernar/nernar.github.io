import { createContext, useContext } from 'react';
import type { NbtSchemaDefinition } from '../types';

export type NbtSchemaMap = Record<string, NbtSchemaDefinition>;

export const NbtDataContext = createContext<NbtSchemaMap>({});

export function useNbtData(): NbtSchemaMap {
	return useContext(NbtDataContext);
}
