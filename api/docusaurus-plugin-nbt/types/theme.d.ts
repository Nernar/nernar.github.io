declare module '@theme/NbtSchema' {
	import React from 'react';
	import type { NbtSchemaDefinition } from '../src/theme/NbtSchema/types';

	export interface NbtSchemaProps {
		data: NbtSchemaDefinition;
		title?: string;
	}

	export default function NbtSchema(props: NbtSchemaProps): React.ReactElement;
}
