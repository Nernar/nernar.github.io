import type { PropVersionMetadata } from '@docusaurus/plugin-content-docs';
import type { TSDDeclarationReflectionMap } from '../types';

function splitLinkText(text: string): { caption: string; target: string } {
	let splitIndex = text.indexOf('|');

	if (splitIndex === -1) {
		splitIndex = text.search(/\s/);
	}

	if (splitIndex !== -1) {
		return {
			caption: text
				.slice(splitIndex + 1)
				.replace(/\n+/, ' ')
				.trim(),
			target: text.slice(0, Math.max(0, splitIndex)).trim(),
		};
	}

	return {
		caption: text,
		target: text,
	};
}

function findReflectionWithMatchingTarget(
	reflections: TSDDeclarationReflectionMap,
	parts: string[],
) {
	const candidates = Object.values(reflections).filter((ref) => ref.name === parts[0]);

	if (candidates.length === 0) {
		return { reflection: undefined, hash: undefined };
	}

	let bestMatch = { reflection: candidates[0], matchedParts: 1, validReflectionParts: 1 };

	for (const candidate of candidates) {
		let currentReflection = candidate;
		let validReflection = candidate;
		let matchedParts = 1;
		let validReflectionParts = 1;

		for (let i = 1; i < parts.length; i++) {
			const part = parts[i];
			const children = currentReflection.children as unknown as import('../types').TSDDeclarationReflection[];
			if (!children) break;

			let foundChild = false;
			for (const child of children) {
				if (child.name === part) {
					const mapRef = reflections[child.id];
					const actualChild = mapRef || child;
					
					currentReflection = actualChild;
					matchedParts++;
					foundChild = true;
					
					if (actualChild.permalink) {
						validReflection = actualChild;
						validReflectionParts = matchedParts;
					}
					break;
				}
			}
			if (!foundChild) break;
		}

		if (matchedParts > bestMatch.matchedParts) {
			bestMatch = { reflection: validReflection, matchedParts, validReflectionParts };
		}
		
		if (matchedParts === parts.length) {
			break;
		}
	}

	let finalReflection = bestMatch.reflection;
	// The hash should be everything after the last valid reflection we found
	let hashParts = parts.slice(bestMatch.validReflectionParts);
	
	return {
		reflection: finalReflection,
		hash: hashParts.length > 0 ? hashParts.join('.') : undefined,
	};
}

function replaceApiLinks(
	reflections: TSDDeclarationReflectionMap,
): (match: string, tagName: string, content: string) => string {
	return (match: string, tagName: string, content: string) => {
		const { caption, target } = splitLinkText(content);
		const parts = target.split('.');
		const { reflection, hash } = findReflectionWithMatchingTarget(reflections, parts);
		const label = tagName === 'linkcode' ? `\`${caption}\`` : caption;

		if (!reflection?.permalink) {
			return label;
		}

		let permalink = reflection.permalink;
		if (hash) {
			if (permalink.includes('#')) {
				permalink = `${permalink}.${hash}`;
			} else {
				permalink = `${permalink}#${hash}`;
			}
		}
		return `[${label}](${permalink.replace(/(?<=#.*)#/g, '.')})`;
	};
}

function replaceDocLinks(
	currentVersion: PropVersionMetadata,
	baseUrl: string,
): (match: string, content: string) => string {
	return (match: string, content: string) => {
		const { caption, target } = splitLinkText(content);
		const version = currentVersion.version === 'current' ? 'next' : currentVersion.version;

		const url = currentVersion.isLast
			? `${baseUrl === '/' ? '' : baseUrl}/${target}`
			: `${baseUrl === '/' ? '' : baseUrl}/${version}/${target}`;

		return `[${caption}](${url})`;
	};
}

// TypeDoc JSON output does not replace links, so we need to do this manually.
// @see https://github.com/TypeStrong/typedoc/blob/master/src/lib/output/plugins/MarkedLinksPlugin.ts
export function replaceLinkTokens(
	markdown: string,
	reflections: TSDDeclarationReflectionMap,
	currentVersion: PropVersionMetadata,
	docsBaseUrl: string,
) {
	return markdown
		.replace(/{@(link|linkcode|linkplain|apilink)\s+([^}]+?)}/gi, replaceApiLinks(reflections))
		.replace(/{@doclink\s+([^}]+?)}/gi, replaceDocLinks(currentVersion, docsBaseUrl));
}
