export type NbtDataType =
	| 'end_tag'
	| 'byte'
	| 'short'
	| 'int'
	| 'int64'
	| 'float'
	| 'double'
	| 'byte_array'
	| 'string'
	| 'list'
	| 'compound'
	| 'int_array';

export interface BaseNbtNode {
	type: NbtDataType;
	description?: string;
	default?: any;
	inheritedFrom?: string; // Name of the parent schema if inherited
}

export interface NbtPrimitiveNode extends BaseNbtNode {
	type: Exclude<NbtDataType, 'list' | 'compound'>;
}

export interface NbtCompoundNode extends BaseNbtNode {
	type: 'compound';
	name?: string;
	extends?: string;
	children?: Record<string, NbtNode>;
}

export interface NbtListNode extends BaseNbtNode {
	type: 'list';
	itemType: NbtDataType;
	itemExtends?: string; // If itemType is 'compound' and it refers to another template
	children?: Record<string, NbtNode>; // Inline compound definition for list items
}

export type NbtNode = NbtPrimitiveNode | NbtCompoundNode | NbtListNode;

export interface NbtSchemaDefinition extends NbtCompoundNode {}

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
	/**
	 * Component used for the all schemas page.
	 */
	schemasComponent: string;
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
