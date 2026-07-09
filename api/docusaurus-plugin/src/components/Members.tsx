// https://github.com/TypeStrong/typedoc-default-themes/blob/master/src/default/partials/members.hbs

import { useContext } from 'react';
import { useReflectionMap } from '../hooks/useReflectionMap';
import type { TSDDeclarationReflection } from '../types';
import {
	allCategoryChildrenHaveOwnDocument,
	allGroupChildrenHaveOwnDocument,
	hasOwnDocument,
} from '../utils/visibility';
import { AnchorLink } from './AnchorLink';
import { Member } from './Member';
import { MembersGroup } from './MembersGroup';
import { ApiOptionsContext, shouldHideReflection } from './ApiOptionsContext';

export interface MembersProps {
	reflection: TSDDeclarationReflection;
}

export function Members({ reflection }: MembersProps) {
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

	if (reflection.categories && reflection.categories.length > 0) {
		const visibleCategories = reflection.categories.map(category => ({
			...category,
			visibleChildren: getVisibleChildren(category.children),
		})).filter(category => category.visibleChildren.length > 0 && !allCategoryChildrenHaveOwnDocument(category, reflections));

		if (visibleCategories.length > 0) {
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
	}

	return (
		<>
			{reflection.groups?.map((group) => {
				if (allGroupChildrenHaveOwnDocument(group, reflections)) {
					return null;
				}
				// The MembersGroup component handles its own empty checking!
				return <MembersGroup key={group.title} group={group} />;
			})}
		</>
	);
}
