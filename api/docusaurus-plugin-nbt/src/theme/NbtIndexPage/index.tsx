import React from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

export interface NbtIndexItem {
	id: string;
	title: string;
	permalink: string;
}

export interface NbtIndexPageProps {
	items: NbtIndexItem[];
}

export default function NbtIndexPage({ items }: NbtIndexPageProps): React.ReactElement {
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
								</header>

								<section className="nbt-doc-panel-group">
									<section className="nbt-doc-panel nbt-doc-index-panel">
										<div className="nbt-doc-index-content">
											<section className="nbt-doc-index-section">
												<h3 className="nbt-doc-panel-header">Schemas</h3>
												<div className="nbt-doc-panel-content">
													{items.length > 0 ? (
														<ul className="nbt-doc-index-list">
															{items.map((item) => (
																<li key={item.id} className="nbt-doc-truncate">
																	<Link to={item.permalink} className="nbt-doc-kind-icon">
																		{item.title}
																	</Link>
																</li>
															))}
														</ul>
													) : (
														<p>No NBT schemas found.</p>
													)}
												</div>
											</section>
										</div>
									</section>
								</section>
							</div>
						</article>
					</div>
				</div>
			</div>
		</>
	);
}
