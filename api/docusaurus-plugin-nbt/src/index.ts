import path from 'path';
import fs from 'fs';
import type { Plugin, LoadContext } from '@docusaurus/types';
import { normalizeUrl, docuHash } from '@docusaurus/utils';
import type { PluginOptions, PluginContent, NbtContent, SidebarItem } from './types';
import type { NbtSchemaDefinition } from './theme/NbtSchema/types';

const DEFAULT_OPTIONS: PluginOptions = {
	path: 'nbt',
	routeBasePath: 'nbt',
	indexComponent: '@theme/NbtIndexPage',
	docComponent: '@theme/NbtDocPage',
};

export default function docusaurusPluginNbt(
	context: LoadContext,
	opts: Partial<PluginOptions>,
): Plugin<PluginContent> {
	const options = { ...DEFAULT_OPTIONS, ...opts };
	const { siteDir } = context;
	const contentPath = path.resolve(siteDir, options.path);

	return {
		name: 'docusaurus-plugin-nbt',

		getThemePath() {
			return path.resolve(__dirname, './theme');
		},

		getPathsToWatch() {
			return [
				path.resolve(__dirname, './theme/**/*.{js,jsx,ts,tsx}'),
				`${contentPath}/**/*.json`
			];
		},

		async loadContent(): Promise<PluginContent> {
			if (!fs.existsSync(contentPath)) {
				console.warn(`[NBT Plugin] Directory not found: ${contentPath}`);
				return { schemas: [], schemaMap: {}, sidebar: [] };
			}

			const files = fs.readdirSync(contentPath).filter(file => file.endsWith('.json'));
			const schemas: NbtContent[] = [];
			const schemaMap: Record<string, NbtSchemaDefinition> = {};

			for (const file of files) {
				const filePath = path.join(contentPath, file);
				try {
					const data = JSON.parse(fs.readFileSync(filePath, 'utf-8')) as NbtSchemaDefinition;
					const id = path.basename(file, '.json');
					schemaMap[id] = data;
				} catch (e) {
					console.error(`[NBT Plugin] Failed to parse JSON: ${filePath}`, e);
				}
			}

			const fullyResolvedSchemaMap: Record<string, NbtSchemaDefinition> = {};

			for (const [id, data] of Object.entries(schemaMap)) {
				const resolvedData = { ...data, children: { ...data.children } };
				let parentName = data.extends;
				while (parentName && schemaMap[parentName]) {
					const parent = schemaMap[parentName];
					if (parent.children) {
						for (const [propName, propNode] of Object.entries(parent.children)) {
							if (!resolvedData.children[propName]) {
								resolvedData.children[propName] = {
									...propNode,
									inheritedFrom: parentName
								};
							}
						}
					}
					parentName = parent.extends;
				}
				
				fullyResolvedSchemaMap[id] = resolvedData;

				schemas.push({
					id,
					permalink: normalizeUrl([context.baseUrl, options.routeBasePath, id]),
					title: data.name || id,
					data: resolvedData,
				});
			}

			schemas.sort((a, b) => a.title.localeCompare(b.title));

			const sidebar: SidebarItem[] = schemas.map(s => ({
				type: 'link',
				label: s.title,
				href: s.permalink,
			}));

			return { schemas, schemaMap: fullyResolvedSchemaMap, sidebar };
		},

		async contentLoaded({ content, actions }) {
			const { schemas, schemaMap, sidebar } = content;
			const { addRoute, createData, setGlobalData } = actions;

			if (schemas.length === 0) return;

			const schemaMapPath = await createData('nbt-schemas.json', JSON.stringify(schemaMap));
			const indexDataPath = await createData('nbt-index.json', JSON.stringify(schemas.map(s => ({ id: s.id, title: s.title, permalink: s.permalink }))));

			setGlobalData({ sidebar });

			const docsMap = schemas.reduce((acc, schema) => ({
				...acc,
				[schema.id]: {
					id: schema.id,
					title: schema.title,
					description: schema.title,
					sidebar: 'nbt',
				}
			}), {
				'index': {
					id: 'index',
					title: 'NBT Schemas',
					description: 'NBT Schemas',
					sidebar: 'nbt',
				}
			} as Record<string, any>);

			const versionMetadata = await createData(
				'version-current.json',
				JSON.stringify({
					badge: false,
					banner: 'none',
					className: 'nbt-schema',
					docs: docsMap,
					docsSidebars: { nbt: sidebar },
					isLast: true,
					label: 'Current',
					noIndex: false,
					pluginId: 'default',
					version: 'current',
				})
			);

			const routes: any[] = [];

			routes.push({
				path: normalizeUrl([context.baseUrl, options.routeBasePath]),
				exact: true,
				component: options.indexComponent,
				modules: {
					items: indexDataPath,
				},
				sidebar: 'nbt',
				id: 'index',
			});

			for (const schema of schemas) {
				const schemaDataPath = await createData(`${docuHash(schema.permalink)}.json`, JSON.stringify(schema));
				routes.push({
					path: schema.permalink,
					exact: true,
					component: options.docComponent,
					modules: {
						content: schemaDataPath,
						schemaMap: schemaMapPath,
					},
					sidebar: 'nbt',
					id: schema.id,
				});
			}

			addRoute({
				path: normalizeUrl([context.baseUrl, options.routeBasePath]),
				exact: false,
				component: '@theme/DocsRoot',
				routes: [
					{
						path: normalizeUrl([context.baseUrl, options.routeBasePath]),
						exact: false,
						component: '@theme/DocVersionRoot',
						routes: [
							{
								path: normalizeUrl([context.baseUrl, options.routeBasePath]),
								exact: false,
								component: path.resolve(__dirname, './theme/NbtPage/index.js'),
								routes,
								modules: {
									schemaMap: schemaMapPath,
								},
							}
						],
						modules: {
							version: versionMetadata,
						},
					}
				]
			});
		},
	};
}
