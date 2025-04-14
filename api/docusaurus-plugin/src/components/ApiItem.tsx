import { useEffect, useMemo, useState } from 'react';
import { PageMetadata } from '@docusaurus/theme-common';
import type { Props as DocItemProps } from '@theme/DocItem';
import { useReflection, useRequiredReflection } from '../hooks/useReflection';
import { useReflectionMap } from '../hooks/useReflectionMap';
import type { TOCItem, TSDDeclarationReflection, TSDDeclarationReflectionMap } from '../types';
import { escapeMdx } from '../utils/helpers';
import { getKindIconHtml } from '../utils/icons';
import ApiItemLayout from './ApiItemLayout';
import { displayPartsToMarkdown } from './Comment';
import { Flags } from './Flags';
import { Reflection } from './Reflection';
import { TypeParametersGeneric } from './TypeParametersGeneric';
import { ApiOptionsContext, IApiOptions, shouldHideReflection } from './ApiOptionsContext';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

function extractTOC(
	item: TSDDeclarationReflection,
	map: TSDDeclarationReflectionMap,
	options: IApiOptions,
): TOCItem[] {
	const toc: TOCItem[] = [];
	const mapped = new Set<string>();

	item.groups?.forEach((group) => {
		group.children?.forEach((childId) => {
			const child = map[childId];

			if (shouldHideReflection(child, options) || mapped.has(child.name)) {
				return;
			}

			if (!child.permalink || child.permalink.includes('#')) {
				const iconHtml = getKindIconHtml(child.kind, child.name);
				const value = escapeMdx(child.name);

				toc.push({
					// @ts-expect-error Not typed upstream
					children: [],
					id: child.name,
					value: iconHtml ? `${iconHtml} ${value}` : value,
					level: 1,
				});

				mapped.add(child.name);
			}
		});
	});

	return toc;
}

export interface ApiItemProps extends Pick<DocItemProps, 'route'> {
	readme?: React.ComponentType;
}

export default function ApiItem({ readme: Readme, route }: ApiItemProps) {
	const [hideInherited, setHideInherited] = useState(() => {
		if (ExecutionEnvironment.canUseDOM) {
			const hideInherited = localStorage.getItem('api.hide-inherited');
			return hideInherited !== null ? Boolean(hideInherited) : false;
		}
		return false;
	});
	useEffect(() => localStorage.setItem('api.hide-inherited', `${hideInherited}`), [hideInherited]);
	const [hideInternal, setHideInternal] = useState(() => {
		if (ExecutionEnvironment.canUseDOM) {
			const hideInternal = localStorage.getItem('api.hide-internal');
			return hideInternal !== null ? Boolean(hideInternal) : true;
		}
		return true;
	});
	useEffect(() => localStorage.setItem('api.hide-internal', `${hideInternal}`), [hideInternal]);
	const [hideDeprecated, setHideDeprecated] = useState(() => {
		if (ExecutionEnvironment.canUseDOM) {
			const hideDeprecated = localStorage.getItem('api.hide-deprecated');
			return hideDeprecated !== null ? Boolean(hideDeprecated) : false;
		}
		return false;
	});
	useEffect(() => localStorage.setItem('api.hide-deprecated', `${hideDeprecated}`), [hideDeprecated]);

	const apiOptions = useMemo(() => ({
		hideInherited, setHideInherited,
		hideInternal, setHideInternal,
		hideDeprecated, setHideDeprecated,
	}), [hideInherited, hideInternal, hideDeprecated]);

	const item = useRequiredReflection((route as unknown as { id: number }).id);
	const reflections = useReflectionMap();
	const toc = useMemo(() => extractTOC(item, reflections, apiOptions),
		[item, reflections, hideInherited, hideInternal, hideDeprecated]
	);

	// Pagination
	const prevItem = useReflection(item.previousId);
	const nextItem = useReflection(item.nextId);
	const pagingMetadata = useMemo(
		() => ({
			next: nextItem
				? {
					permalink: nextItem.permalink,
					title: escapeMdx(nextItem.name),
				}
				: undefined,
			previous: prevItem
				? {
					permalink: prevItem.permalink,
					title: escapeMdx(prevItem.name),
				}
				: undefined,
		}),
		[nextItem, prevItem],
	);

	return (
		<ApiOptionsContext.Provider value={apiOptions}>
			<ApiItemLayout
				heading={
					<>
						<span className="tsd-header-flags">
							<Flags flags={item.flags} />
						</span>
						{escapeMdx(item.name)} <TypeParametersGeneric params={item.typeParameters} />
					</>
				}
				pageMetadata={
					<PageMetadata
						description={item.comment?.summary ? displayPartsToMarkdown(item.comment.summary) : ''}
						title={`${item.name} | API`}
					/>
				}
				pagingMetadata={pagingMetadata}
				route={route}
				toc={toc}
			>
				{Readme && (
					<section className="tsd-readme">
						<Readme />
					</section>
				)}

				<Reflection reflection={item}  />
			</ApiItemLayout>
		</ApiOptionsContext.Provider>
	);
}
