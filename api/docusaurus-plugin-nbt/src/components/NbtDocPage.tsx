import React from 'react';
import { PageMetadata, useWindowSize } from '@docusaurus/theme-common';
import Heading from '@theme/Heading';
import NbtSchema from './NbtSchema';
import NbtOptionsLayout from './NbtOptionsLayout';
import type { NbtContent } from '../types';
import type { NbtSchemaMap } from '../hooks/useNbtData';

export interface NbtDocPageProps {
	content: NbtContent;
	schemaMap: NbtSchemaMap;
}

export default function NbtDocPage({ content, schemaMap }: NbtDocPageProps): React.ReactElement {
	const { title, data } = content;
	const windowSize = useWindowSize();
	const renderDesktop = windowSize === 'desktop' || windowSize === 'ssr';

	return (
		<>
			<PageMetadata description={`NBT Schema for ${title}`} title={`${title} | NBT`} />

			<div className="row">
				<div className="col apiItemCol">
					<div className="apiItemContainer">
						{!renderDesktop && <NbtOptionsLayout />}
						
						<article>
							<div className="markdown">
								<header>
									<Heading as="h1">{title}</Heading>
								</header>

								<NbtSchema data={data} schemaMap={schemaMap} />
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
