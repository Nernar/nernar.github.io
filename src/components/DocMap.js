// @ts-check
import React from "react";
import DocCardList from "@theme/DocCardList";
// @ts-ignore
import { useDocsSidebar } from "@docusaurus/theme-common/internal";

export default function DocMap({ exploreCategories, includeCategories }) {
	const sidebarItems = [];
	useDocsSidebar()?.items?.forEach(element => {
		if (exploreCategories && element.type == "category") {
			if (includeCategories) {
				sidebarItems.push(element);
			}
			element.items?.forEach(element => {
				sidebarItems.push(element);
			});
		} else {
			sidebarItems.push(element);
		}
	});
	return (
		<article className="margin-top--lg">
			<DocCardList items={ sidebarItems } />
		</article>
	);
}
