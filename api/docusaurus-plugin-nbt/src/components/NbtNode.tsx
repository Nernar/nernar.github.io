import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { marked } from 'marked';
import type { NbtNode, NbtCompoundNode, NbtListNode } from '../types';
import { useNbtData } from '../hooks/useNbtData';
import { useNbtOptions } from '../hooks/useNbtOptions';
import './styles.css';
import useBrokenLinks from '@docusaurus/useBrokenLinks';

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
	collapseRoot?: boolean;
	useAnchors?: boolean;
}

export default function NbtNodeRenderer({ name, node, depth = 0, isRoot = false, pathPrefix = "", collapseRoot = false, useAnchors = false }: NbtNodeRendererProps): React.ReactElement | null {
	const schemaMap = useNbtData();
	const { showInherited } = useNbtOptions();
	const [isExpanded, setIsExpanded] = useState(collapseRoot ? false : depth < 2);
	const [isHashTarget, setIsHashTarget] = useState(false);

	const currentPath = pathPrefix ? `${pathPrefix}.${name}` : name;
	useBrokenLinks().collectAnchor(currentPath);

	useEffect(() => {
		const checkHash = () => {
			if (typeof window !== 'undefined' && window.location.hash === `#${currentPath}`) {
				setIsExpanded(true);
				setIsHashTarget(true);
			} else {
				// Optional: we can reset isHashTarget if another hash is clicked,
				// but usually we just leave it expanded.
				setIsHashTarget(false);
			}
		};

		// Check on initial load
		checkHash();

		// Listen for hash changes when navigating via anchor links on the same page
		if (typeof window !== 'undefined') {
			window.addEventListener('hashchange', checkHash);
			return () => {
				window.removeEventListener('hashchange', checkHash);
			};
		}
		return undefined;
	}, [currentPath]);

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

	const handleAnchorClick = () => {
		if (isExpandable) {
			setIsExpanded(!isExpanded);
		}
	};

	const renderIcon = () => (
		<span 
			className="nbt-icon" 
			style={{ backgroundColor: TYPE_COLORS[node.type] || '#555' }}
		>
			{TYPE_ICONS[node.type] || '?'}
		</span>
	);

	const renderTypeLink = (typeName: string) => {
		if (schemaMap[typeName]) {
			const linkTo = useAnchors ? `#${typeName}` : `/nbt/${typeName}`;
			return (
				<Link to={linkTo} className="nbt-type-link" onClick={(e) => e.stopPropagation()}>
					{typeName}
				</Link>
			);
		}
		return <span className="nbt-type-link nbt-type-unlinked" onClick={(e) => e.stopPropagation()}>{typeName}</span>;
	};

	const renderType = () => {
		if (node.type === 'list') {
			return (
				<span className="nbt-type">
					list{'<'}{itemExtends ? renderTypeLink(itemExtends) : node.itemType}{'>'}
				</span>
			);
		}
		if (node.type === 'compound' && extendsType) {
			return (
				<span className="nbt-type">
					compound{' extends '}{renderTypeLink(extendsType)}
				</span>
			);
		}
		return <span className="nbt-type">{node.type}</span>;
	};

	return (
		<div className={isRoot ? "nbt-node-root" : "nbt-child"}>
			<div className={`nbt-header ${isExpandable ? 'nbt-expandable' : ''} ${isExpandable && isExpanded ? 'nbt-expanded' : ''}`} id={isRoot && useAnchors ? undefined : currentPath} onClick={handleAnchorClick}>
				{isExpandable ? (
					<span className="nbt-toggle">{isExpanded ? '−' : '+'}</span>
				) : (
					<span className="nbt-toggle-empty" />
				)}
				
				{renderIcon()}
				
				<span className="nbt-name">
					<a href={`#${currentPath}`} className="nbt-name-anchor" onClick={(e) => e.stopPropagation()}>{name}</a>
				</span>
				
				<span className="nbt-separator">:</span>
				
				{renderType()}

				{node.inheritedFrom && showInherited && (
					<Link to={useAnchors ? `#${node.inheritedFrom}` : `/nbt/${node.inheritedFrom}`} className="nbt-inherited-badge" title={`Inherited from ${node.inheritedFrom}`} onClick={(e) => e.stopPropagation()}>
						↑ {node.inheritedFrom}
					</Link>
				)}

				{node.default !== undefined && (
					<span className="nbt-default">
						= {JSON.stringify(node.default)}
					</span>
				)}
			</div>

			{node.description && (
				<div className={`nbt-description-container ${isExpandable ? 'nbt-expandable' : ''} ${isExpandable && isExpanded ? 'nbt-expanded' : ''}`}>
					 <div 
						 className="nbt-description markdown" 
						 dangerouslySetInnerHTML={{ __html: marked.parse(node.description) as string }} 
					 />
				</div>
			)}

			{isExpanded && isExpandable && (
				<div className="nbt-children">
					{hasChildren ? (
						Object.entries(resolvedChildren!).map(([childName, childNode], index, array) => (
							<NbtNodeRenderer 
								key={childName} 
								name={childName} 
								node={childNode as NbtNode} 
								depth={depth + 1} 
								isLast={index === array.length - 1}
								pathPrefix={currentPath}
								collapseRoot={isHashTarget ? false : collapseRoot}
								useAnchors={useAnchors}
							/>
						))
					) : (
						 <div className="nbt-child">
							 <div className="nbt-empty">Empty</div>
						 </div>
					)}
				</div>
			)}
		</div>
	);
}