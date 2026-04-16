import type { NbtSchemaDefinition } from './theme/NbtSchema/types';

export interface PluginOptions {
	id?: string;
	/**
	 * Path to the directory containing NBT JSON files.
	 * @default 'nbt'
	 */
	path: string;
	/**
	 * Base route path for the NBT documentation.
	 * @default 'nbt'
	 */
	routeBasePath: string;
	/**
	 * Component used for the index page.
	 */
	indexComponent: string;
	/**
	 * Component used for the individual schema pages.
	 */
	docComponent: string;
}

export interface NbtContent {
	id: string;
	permalink: string;
	title: string;
	data: NbtSchemaDefinition;
}

export type SidebarItem = 
	| { type: 'link'; label: string; href: string }
	| { type: 'category'; label: string; items: SidebarItem[]; collapsed?: boolean; collapsible?: boolean };

export interface PluginContent {
	schemas: NbtContent[];
	schemaMap: Record<string, NbtSchemaDefinition>;
	sidebar: SidebarItem[];
}
