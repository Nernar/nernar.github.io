import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import { marked } from 'marked';
import type { NbtNode, NbtCompoundNode, NbtListNode } from './types';
import { useNbtData } from './NbtDataContext';
import { useNbtOptions } from './NbtOptionsContext';
import './styles.css';

const TYPE_ICONS: Record<string, string> = {
	end_tag: 'E',
	byte: 'B',
	short: 'S',
	int: 'I',
	int64: 'L',
	float: 'F',
	double: 'D',
	byte_array: 'B[]',
	string: 'T',
	list: '[]',
	compound: '{}',
	int_array: 'I[]'
};

const TYPE_COLORS: Record<string, string> = {
	end_tag: '#777',
	byte: '#b24a4a',
	short: '#b28e4a',
	int: '#4ab24a',
	int64: '#4ab28e',
	float: '#4a8eb2',
	double: '#4a4ab2',
	byte_array: '#8e4ab2',
	string: '#b24a8e',
	list: '#555',
	compound: '#333',
	int_array: '#8e4ab2'
};

export interface NbtNodeRendererProps {
	name: string;
	node: NbtNode;
	depth?: number;
	isLast?: boolean;
	isRoot?: boolean;
	pathPrefix?: string;
}

export function NbtNodeRenderer({ name, node, depth = 0, isLast = false, isRoot = false, pathPrefix = "" }: NbtNodeRendererProps): React.ReactElement | null {
	const schemaMap = useNbtData();
	const { showInherited } = useNbtOptions();
	const [isExpanded, setIsExpanded] = useState(depth < 2);

	const currentPath = pathPrefix ? `${pathPrefix}.${name}` : name;

	if (!showInherited && node.inheritedFrom) {
		return null;
	}

	let resolvedChildren: Record<string, NbtNode> | undefined = (node as any).children;
	let extendsType = (node as NbtCompoundNode).extends;
	let itemExtends = (node as NbtListNode).itemExtends;

	if (node.type === 'compound' && !resolvedChildren) {
		const typeName = (node as any).name || extendsType;
		if (typeName && schemaMap[typeName]) {
			resolvedChildren = schemaMap[typeName].children;
		}
	}

	if (node.type === 'list' && !resolvedChildren && itemExtends) {
		if (schemaMap[itemExtends]) {
			resolvedChildren = schemaMap[itemExtends].children;
		}
	}

	const isExpandable = node.type === 'compound' || (node.type === 'list' && (!!resolvedChildren || !!itemExtends));
	const hasChildren = resolvedChildren && Object.keys(resolvedChildren).length > 0;

	const handleAnchorClick = (e: React.MouseEvent) => {
		if (isExpandable) {
			setIsExpanded(!isExpanded);
		}
	};

	const renderIcon = () => (
		<span 
			className="nbt-doc-icon" 
			style={{ backgroundColor: TYPE_COLORS[node.type] || '#555' }}
		>
			{TYPE_ICONS[node.type] || '?'}
		</span>
	);

	const renderTypeLink = (typeName: string) => {
		if (schemaMap[typeName]) {
			return (
				<Link to={`/nbt/${typeName}`} className="nbt-doc-type-link">
					{typeName}
				</Link>
			);
		}
		return <span className="nbt-doc-type-link nbt-doc-type-unlinked">{typeName}</span>;
	};

	const renderType = () => {
		if (node.type === 'list') {
			return (
				<span className="nbt-doc-type">
					list{'<'}{itemExtends ? renderTypeLink(itemExtends) : node.itemType}{'>'}
				</span>
			);
		}
		if (node.type === 'compound' && extendsType) {
			return (
				<span className="nbt-doc-type">
					compound{' extends '}{renderTypeLink(extendsType)}
				</span>
			);
		}
		return <span className="nbt-doc-type">{node.type}</span>;
	};

	return (
		<div className={isRoot ? "nbt-doc-node-root" : "nbt-doc-child"}>
			<div className="nbt-doc-header" id={currentPath}>
				<a href={`#${currentPath}`} className="nbt-doc-anchor-layer" aria-hidden="true" title="Direct link to this element" onClick={handleAnchorClick}></a>
				
				{isExpandable ? (
					<span className="nbt-doc-toggle">{isExpanded ? '−' : '+'}</span>
				) : (
					<span className="nbt-doc-toggle-empty" />
				)}
				
				{renderIcon()}
				
				<span className="nbt-doc-name">
					{name}
				</span>
				
				<span className="nbt-doc-separator">:</span>
				
				{renderType()}

				{node.inheritedFrom && showInherited && (
					<Link to={`/nbt/${node.inheritedFrom}`} className="nbt-doc-inherited-badge" title={`Inherited from ${node.inheritedFrom}`}>
						↑ {node.inheritedFrom}
					</Link>
				)}

				{node.default !== undefined && (
					<span className="nbt-doc-default">
						= {JSON.stringify(node.default)}
					</span>
				)}
			</div>

			{node.description && (
				<div className="nbt-doc-description-container">
					 <div 
						 className="nbt-doc-description markdown" 
						 dangerouslySetInnerHTML={{ __html: marked.parse(node.description) as string }} 
					 />
				</div>
			)}

			{isExpanded && isExpandable && (
				<div className="nbt-doc-children">
					{hasChildren ? (
						Object.entries(resolvedChildren!).map(([childName, childNode], index, array) => (
							<NbtNodeRenderer 
								key={childName} 
								name={childName} 
								node={childNode as NbtNode} 
								depth={depth + 1} 
								isLast={index === array.length - 1}
								pathPrefix={currentPath}
							/>
						))
					) : (
						 <div className="nbt-doc-empty-container">
							 <div className="nbt-doc-empty">Empty</div>
						 </div>
					)}
				</div>
			)}
		</div>
	);
}
