import { Fragment, useContext } from 'react';
import Link from '@docusaurus/Link';
import { useRequiredReflection } from '../hooks/useReflection';
import { useReflectionMap } from '../hooks/useReflectionMap';
import type { TSDDeclarationReflection } from '../types';
import { AnchorLink } from './AnchorLink';
import { ApiOptionsContext, shouldHideReflection } from './ApiOptionsContext';
import { Icon } from './Icon';
import { Name } from './Name';

export interface IndexChildProps {
	id: number;
}

function IndexChild({ id }: IndexChildProps) {
	const reflection = useRequiredReflection(id);

	return (
		<li>
			<Link className="tsd-kind-icon" to={reflection.permalink ?? `#${reflection.name}`}>
				<Icon reflection={reflection} />
				<Name reflection={reflection} colorful={true} />
			</Link>
		</li>
	);
}

export interface IndexProps {
	reflection: TSDDeclarationReflection;
}

export function Index({ reflection }: IndexProps) {
	const apiOptions = useContext(ApiOptionsContext);
	const reflections = useReflectionMap();

	const getVisibleChildren = (children?: number[]) => {
		if (!children) return [];
		return children.filter(id => {
			const childRef = reflections[id];
			return childRef && !shouldHideReflection(childRef, apiOptions);
		});
	};

	if (reflection.categories && reflection.categories.length > 0) {
		const visibleCategories = reflection.categories.map(category => ({
			...category,
			visibleChildren: getVisibleChildren(category.children),
		})).filter(category => category.visibleChildren.length > 0);

		if (visibleCategories.length > 0) {
			return (
				<section className="tsd-panel-group tsd-index-group">
					<h2>
						Index <AnchorLink id="Index" />
					</h2>

					<section className="tsd-panel tsd-index-panel">
						<div className="tsd-index-content">
							{visibleCategories.map((category) => (
								<section key={category.title} className="tsd-index-section">
									<h3 className="tsd-panel-header">
										{category.title === '__CATEGORY__' ? 'Other' : category.title}
									</h3>

									<div className="tsd-panel-content">
										<ul className="tsd-index-list">
											{category.visibleChildren.map((child) => <IndexChild key={child} id={child} />)}
										</ul>
									</div>
								</section>
							))}
						</div>
					</section>
				</section>
			);
		}
	}

	if (reflection.groups && reflection.groups.length > 0) {
		const visibleGroups = reflection.groups.map(group => {
			const visibleCategories = group.categories?.map(category => ({
				...category,
				visibleChildren: getVisibleChildren(category.children),
			})).filter(category => category.visibleChildren.length > 0) || [];

			const visibleChildren = getVisibleChildren(group.children);

			return {
				...group,
				visibleCategories,
				visibleChildren,
			};
		}).filter(group => group.visibleCategories.length > 0 || group.visibleChildren.length > 0);

		if (visibleGroups.length > 0) {
			return (
				<section className="tsd-panel-group tsd-index-group">
					<h2>
						Index <AnchorLink id="Index" />
					</h2>

					<section className="tsd-panel tsd-index-panel">
						<div className="tsd-index-content">
							{visibleGroups.map((group) => (
								<section key={group.title} className="tsd-index-section">
									{group.visibleCategories && group.visibleCategories.length > 0 ? (
										group.visibleCategories.map((category) => (
											<Fragment key={category.title}>
												<h3 className="tsd-panel-header">
													{category.title === '__CATEGORY__' ? group.title : category.title}
												</h3>

												<div className="tsd-panel-content">
													<ul className="tsd-index-list">
														{category.visibleChildren.map((child) => <IndexChild key={child} id={child} />)}
													</ul>
												</div>
											</Fragment>
										))
									) : (
										<>
											<h3 className="tsd-panel-header">{group.title}</h3>

											<div className="tsd-panel-content">
												<ul className="tsd-index-list">
													{group.visibleChildren.map((child) => <IndexChild key={child} id={child} />)}
												</ul>
											</div>
										</>
									)}
								</section>
							))}
						</div>
					</section>
				</section>
			);
		}
	}

	return null;
}
