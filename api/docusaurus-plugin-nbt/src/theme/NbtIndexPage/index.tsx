import React from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import NbtIndexPanel from '../NbtIndexPanel';

export interface NbtIndexItem {
	id: string;
	title: string;
	permalink: string;
}

export interface NbtIndexPageProps {
	items: NbtIndexItem[];
}

export default function NbtIndexPage({ items }: NbtIndexPageProps): React.ReactElement {
	const panelItems = items.map(item => ({
		id: item.id,
		title: item.title,
		href: item.permalink
	}));

	return (
		<>
			<Head>
				<title>NBT Schemas | NBT</title>
				<meta name="description" content="NBT (Named Binary Tag) schemas documentation" />
			</Head>

			<div className="row">
				<div className="col apiItemCol">
					<div className="apiItemContainer">
						<article>
							<div className="markdown">
								<header>
									<Heading as="h1">NBT Schemas</Heading>
									<p>
										This is a centralized registry of Bedrock NBT schemas. You can browse individual schema pages using the list below, or <Link to="/nbt/schemas">view all schemas at once on a single page</Link>.
									</p>
								</header>

								<NbtIndexPanel items={panelItems} />
							</div>
						</article>
					</div>
				</div>
			</div>
		</>
	);
}
