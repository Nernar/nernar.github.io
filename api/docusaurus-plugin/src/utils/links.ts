export function removeScopes(text: string, scopes: string[]): string {
	if (scopes.length === 0) {
		return text;
	}

	return scopes.reduce(
		(value, scope) => value.replace(new RegExp(`^(${scope}-|@${scope}/)`), ''),
		text,
	);
}

export function resolveAnchorLink(base: string, anchor?: string): string {
    let fullPath = base || '';
    if (anchor) {
        fullPath = fullPath ? `${fullPath}#${anchor}` : `#${anchor}`;
    }

    const parts = fullPath.split('#');
    if (parts.length <= 2) {
        return fullPath;
    }

    const urlPath = parts[0];
    const combinedAnchors = parts.slice(1).join('.');

    return `${urlPath}#${combinedAnchors}`;
}
