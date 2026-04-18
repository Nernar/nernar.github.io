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

								<section className="nbt-panel-group nbt-index-group">
									<section className="nbt-panel nbt-index-panel">
										<div className="nbt-index-content">
											<section className="nbt-index-section">
												<h3 className="nbt-panel-header">Schemas</h3>
												<div className="nbt-panel-content">
													{items.length > 0 ? (
														<ul className="nbt-index-list">
															{items.map((item) => (
																<li key={item.id} className="nbt-truncate">
																	<Link to={item.permalink} className="nbt-kind-icon" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
																		<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
																			<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
																			<line x1="7" y1="7" x2="7.01" y2="7"></line>
																		</svg>
																		<span>{item.title}</span>
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
