import React from 'react';
import Link from '@docusaurus/Link';
import { PageMetadata, useWindowSize } from '@docusaurus/theme-common';
import Heading from '@theme/Heading';
import NbtSchema from '../NbtSchema';
import NbtOptionsLayout from '../NbtOptionsLayout';
import NbtIndexPanel from '../NbtIndexPanel';
import type { NbtContent } from '../../types';
import type { NbtSchemaMap } from '../../hooks/useNbtData';

export interface NbtSchemasPageProps {
	schemas: NbtContent[];
	schemaMap: NbtSchemaMap;
}

export default function NbtSchemasPage({ schemas, schemaMap }: NbtSchemasPageProps): React.ReactElement {
	const windowSize = useWindowSize();
	const renderDesktop = windowSize === 'desktop' || windowSize === 'ssr';

	const panelItems = schemas.map(schema => ({
		id: schema.id,
		title: schema.title,
		href: `#${schema.title || schema.data.name}`
	}));

	return (
		<>
			<PageMetadata description="List of all available Bedrock NBT schemas" title="NBT Schemas List | NBT" />

			<div className="row">
				<div className="col apiItemCol">
					<div className="apiItemContainer">
						{!renderDesktop && <NbtOptionsLayout />}

						<article>
							<div className="markdown">
								<header>
									<Heading as="h1">NBT Schemas List</Heading>
									<p>
										This page contains all available NBT schemas in a single view. 
										Trees are collapsed by default. You can expand them manually, or by navigating here via a direct anchor link.
									</p>
								</header>

								<NbtIndexPanel items={panelItems} />

								{schemas.map((schema) => (
									<div key={schema.id} style={{ marginBottom: 0 }}>
										<a id={schema.title || schema.data.name} className="nbt-schema-anchor" />
										<NbtSchema 
											name={schema.title}
											data={schema.data} 
											schemaMap={schemaMap} 
											collapseRoot={true} 
											useAnchors={true}
										/>
									</div>
								))}
							</div>
						</article>
					</div>
				</div>

				{renderDesktop && (
					<div className="col col--3">
						<NbtOptionsLayout />
					</div>
				)}
			</div>
		</>
	);
}
