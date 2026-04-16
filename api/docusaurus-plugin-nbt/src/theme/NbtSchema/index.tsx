import React from 'react';
import type { NbtSchemaDefinition } from './types';
import { NbtNodeRenderer } from './NbtNode';
import { NbtDataContext, type NbtSchemaMap } from './NbtDataContext';
import './styles.css';

export interface NbtSchemaProps {
	data: NbtSchemaDefinition;
	title?: string;
	schemaMap?: NbtSchemaMap;
}

export default function NbtSchema({ data, title, schemaMap }: NbtSchemaProps): React.ReactElement {
	const content = (
		<div className="nbt-tree">
			{title && (
				<h3 style={{ marginTop: 0, marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--ifm-color-emphasis-200)' }}>
					{title}
				</h3>
			)}
			
			<NbtNodeRenderer name={data.name || 'Root'} node={data} isRoot={true} />
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
