import Link from '@docusaurus/Link';
import useBrokenLinks from '@docusaurus/useBrokenLinks';

export interface AnchorLinkProps {
	parent?: string;
	id: string;
}

export function AnchorLink({ parent, id }: AnchorLinkProps) {
	const anchor = parent ? parent + '.' + id : id;
	useBrokenLinks().collectAnchor(anchor);

	return (
		<Link className="tsd-anchor" href={`#${anchor}`}>
			<span className="tsd-anchor-id" id={anchor} />
			<i className="codicon codicon-symbol-numeric" />
		</Link>
	);
}
