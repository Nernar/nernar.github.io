import React from 'react';
import type { NbtSchemaDefinition } from '../../types';
import NbtNodeRenderer from '../NbtNode';
import { NbtDataContext, type NbtSchemaMap } from '../../hooks/useNbtData';
import '../../styles.css';

export interface NbtSchemaProps {
	data: NbtSchemaDefinition;
	name?: string;
	schemaMap?: NbtSchemaMap;
	collapseRoot?: boolean;
	useAnchors?: boolean;
}

export default function NbtSchema({ data, name, schemaMap, collapseRoot = false, useAnchors = false }: NbtSchemaProps): React.ReactElement {
	const content = (
		<div className="nbt-tree">
			<NbtNodeRenderer name={name || data.name || 'Root'} node={data} isRoot={true} collapseRoot={collapseRoot} useAnchors={useAnchors} />
		</div>
	);

	// If schemaMap is provided explicitly (e.g. from DocPage), wrap in Provider
	if (schemaMap) {
		return (
			<NbtDataContext.Provider value={schemaMap}>
				{content}
			</NbtDataContext.Provider>
		);
	}

	// Otherwise rely on parent provider (e.g. NbtPage)
	return content;
}
