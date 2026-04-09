import React, { useEffect, useState, useMemo, useRef } from 'react';
import { useLocation } from '@docusaurus/router';
import type { TSDDeclarationReflection, TSDDeclarationReflectionMap } from '../types';
import { ApiDataContext } from './ApiDataContext';
import ApiItem from './ApiItem';

export interface ApiAppProps {
	route: {
		path: string;
		[key: string]: any;
	};
	packageMap?: Record<string, string>; // Docusaurus module injection
	[key: string]: any;
}

export default function ApiApp(props: ApiAppProps) {
	const location = useLocation();
	const [data, setData] = useState<{ root: TSDDeclarationReflection; map: TSDDeclarationReflectionMap; jsonPath: string } | null>(null);
	const [error, setError] = useState<Error | null>(null);

	const packageMap = props.packageMap || props.route.packageMap || {};

	// Find the correct jsonPath from the packageMap based on the current location.pathname
	const { jsonPath, packageBasePath } = useMemo(() => {
		const currentPath = location.pathname.endsWith('/') ? location.pathname.slice(0, -1) : location.pathname;
		// Strip locale from currentPath (e.g. /ru/api -> /api)
		const cleanCurrent = currentPath.replace(/^\/[a-z]{2}(-[A-Z]{2})?\//, '/');
		
		let bestMatch = '';
		let bestPath = '';
		let bestActualBase = '';

		for (const basePath in packageMap) {
			const normalizedBase = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
			const cleanBase = normalizedBase.replace(/^\/[a-z]{2}(-[A-Z]{2})?\//, '/');
			
			if (cleanCurrent.startsWith(cleanBase) && cleanBase.length > bestMatch.length) {
				bestMatch = cleanBase;
				bestPath = packageMap[basePath];
				bestActualBase = normalizedBase;
			}
		}
		
		return { jsonPath: bestPath, packageBasePath: bestActualBase };
	}, [location.pathname, packageMap]);

	useEffect(() => {
		if (!jsonPath) return () => {};

		// Avoid refetching if we already have the data for this jsonPath
		if (data?.jsonPath === jsonPath) return () => {};

		let isMounted = true;
		setData(null);
		setError(null);

		fetch(jsonPath)
			.then((res) => {
				if (!res.ok) throw new Error(`Failed to load API tree: ${res.statusText}`);
				return res.json();
			})
			.then((json: TSDDeclarationReflection) => {
				if (isMounted) {
					// We need to build the map correctly
					const buildMap = (root: TSDDeclarationReflection): TSDDeclarationReflectionMap => {
						const map: TSDDeclarationReflectionMap = {};
						const visited = new Set<any>();
						const stack: { current: any; parent?: any }[] = [{ current: root, parent: undefined }];

						while (stack.length > 0) {
							const { current, parent } = stack.pop()!;

							if (!current || typeof current !== 'object') {
								continue;
							}

							if (visited.has(current)) {
								continue;
							}

							visited.add(current);
							let nextParent = parent;

							if ('id' in current && typeof current.id === 'number') {
								if (current.type !== 'reference') {
									map[current.id] = current;

									if (parent && 'id' in parent) {
										current.parentId = parent.id;
									}
								}
								nextParent = current;
							}

							if (Array.isArray(current)) {
								for (let i = current.length - 1; i >= 0; i--) {
									stack.push({
										current: current[i],
										parent: nextParent,
									});
								}
							} else {
								const keys = Object.keys(current);
								for (let i = keys.length - 1; i >= 0; i--) {
									const key = keys[i];
									stack.push({
										current: current[key],
										parent: nextParent,
									});
								}
							}
						}
						return map;
					};
					setData({ root: json, map: buildMap(json), jsonPath });
				}
			})
			.catch((err) => {
				if (isMounted) setError(err);
			});

		return () => {
			isMounted = false;
		};
	}, [jsonPath, data?.jsonPath]);

	const activeItem = useMemo(() => {
		if (!data) return null;

		const currentPath = location.pathname.endsWith('/') ? location.pathname.slice(0, -1) : location.pathname;
		const cleanCurrent = currentPath.replace(/^\/[a-z]{2}(-[A-Z]{2})?\//, '/');
		
		const cleanBase = packageBasePath.replace(/^\/[a-z]{2}(-[A-Z]{2})?\//, '/');
		const relativeUrlPath = cleanCurrent.startsWith(cleanBase) ? cleanCurrent.substring(cleanBase.length) : '';
		
		const rootPermalink = data.root.permalink?.endsWith('/') ? data.root.permalink.slice(0, -1) : (data.root.permalink || '');
		const cleanRootPermalink = rootPermalink.replace(/^\/[a-z]{2}(-[A-Z]{2})?\//, '/');

		for (const id in data.map) {
			const item = data.map[id];
			if (item.permalink) {
				const itemPermalink = item.permalink.endsWith('/') ? item.permalink.slice(0, -1) : item.permalink;
				const cleanItemPermalink = itemPermalink.replace(/^\/[a-z]{2}(-[A-Z]{2})?\//, '/');
				
				const relativeItemPath = cleanItemPermalink.startsWith(cleanRootPermalink) ? cleanItemPermalink.substring(cleanRootPermalink.length) : '';
				
				if (relativeItemPath === relativeUrlPath) {
					return item as TSDDeclarationReflection;
				}
			}
		}

		console.warn(`[api-plugin] Route ${currentPath} not found in map (relative path: '${relativeUrlPath}', base: '${packageBasePath}'), falling back to root.`);
		return data.root;
	}, [data, location.pathname, packageBasePath]);

	// Robust anchor scrolling logic
	const scrollAttempts = useRef(0);
	useEffect(() => {
		if (activeItem && location.hash) {
			const id = location.hash.substring(1);
			const targetId = decodeURIComponent(id);
			scrollAttempts.current = 0;

			const tryScroll = () => {
				const element = document.getElementById(id) || document.getElementById(targetId);
				if (element) {
					element.scrollIntoView();
					return true;
				}
				return false;
			};

			if (!tryScroll()) {
				const interval = setInterval(() => {
					scrollAttempts.current++;
					if (tryScroll() || scrollAttempts.current > 20) {
						clearInterval(interval);
					}
				}, 100);
				return () => clearInterval(interval);
			}
		}
		return () => {};
	}, [activeItem, location.hash]);

	if (error) {
		return <div style={{ padding: '2rem' }}><h2>Error Loading API</h2><p>{error.message}</p></div>;
	}

	if (!data || !activeItem) {
		return <div style={{ padding: '2rem' }}>Loading API documentation...</div>;
	}

	return (
		<ApiDataContext.Consumer>
			{(parentContext) => (
				<ApiDataContext.Provider value={{ ...parentContext, reflections: data.map }}>
					<ApiItem {...props} route={{ ...props.route, id: activeItem.id } as any} />
				</ApiDataContext.Provider>
			)}
		</ApiDataContext.Consumer>
	);
}
