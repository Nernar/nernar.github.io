import React from 'react';
import { PageMetadata } from '@docusaurus/theme-common';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import NbtSchema from '../NbtSchema';
import NbtOptionsLayout from '../NbtSchema/NbtOptionsLayout';
import type { NbtContent } from '../../types';
import type { NbtSchemaMap } from '../NbtSchema/NbtDataContext';

export interface NbtDocPageProps {
	content: NbtContent;
	schemaMap: NbtSchemaMap;
}

export default function NbtDocPage({ content, schemaMap }: NbtDocPageProps): React.ReactElement {
	const { title, data, permalink } = content;
	const basePath = permalink.substring(0, permalink.lastIndexOf('/'));

	return (
		<>
			<PageMetadata description={`NBT Schema for ${title}`} title={`${title} | NBT`} />

			<div className="row">
				<div className="col apiItemCol" style={{ maxWidth: '75%' }}>
					<div className="apiItemContainer">
						<nav aria-label="breadcrumbs" className="margin-bottom--md">
							<ul className="breadcrumbs">
								<li className="breadcrumbs__item">
									<Link className="breadcrumbs__link" to={basePath}>NBT Index</Link>
								</li>
								<li className="breadcrumbs__item breadcrumbs__item--active">
									<span className="breadcrumbs__link">{title}</span>
								</li>
							</ul>
						</nav>

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

				<div className="col col--3">
					<NbtOptionsLayout />
				</div>
			</div>
		</>
	);
}
