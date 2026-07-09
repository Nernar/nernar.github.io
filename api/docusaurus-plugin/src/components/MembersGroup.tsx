// https://github.com/TypeStrong/typedoc-default-themes/blob/master/src/default/partials/members.group.hbs

import { useContext } from 'react';
import type { JSONOutput } from 'typedoc';
import { useReflectionMap } from '../hooks/useReflectionMap';
import { hasOwnDocument } from '../utils/visibility';
import { AnchorLink } from './AnchorLink';
import { Member } from './Member';
import { ApiOptionsContext, shouldHideReflection } from './ApiOptionsContext';

export interface MembersGroupProps {
	group: JSONOutput.ReflectionGroup;
}

export function MembersGroup({ group }: MembersGroupProps) {
	const reflections = useReflectionMap();
	const apiOptions = useContext(ApiOptionsContext);

	const getVisibleChildren = (children?: number[]) => {
		if (!children) return [];
		return children.filter(id => {
			if (hasOwnDocument(id, reflections)) return false;
			const childRef = reflections[id];
			if (childRef && shouldHideReflection(childRef, apiOptions)) return false;
			return true;
		});
	};

	if (group.categories && group.categories.length > 0) {
		const visibleCategories = group.categories.map(category => ({
			...category,
			visibleChildren: getVisibleChildren(category.children),
		})).filter(category => category.visibleChildren.length > 0);

		if (visibleCategories.length === 0) {
			return null;
		}

		return (
			<>
				{visibleCategories.map((category) => (
					<section key={category.title} className="tsd-panel-group tsd-member-group">
						<h2>
							{category.title === '__CATEGORY__' ? 'Other' : category.title}{' '}
							<AnchorLink id={category.title} />
						</h2>

						{category.visibleChildren.map((child) => (
							<Member key={child} id={child} />
						))}
					</section>
				))}
			</>
		);
	}

	const visibleChildren = getVisibleChildren(group.children);
	if (visibleChildren.length === 0) {
		return null;
	}

	return (
		<section className="tsd-panel-group tsd-member-group">
			<h2>
				{group.title} <AnchorLink id={group.title} />
			</h2>

			{visibleChildren.map((child) => (
				<Member key={child} id={child} />
			))}
		</section>
	);
}
