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
