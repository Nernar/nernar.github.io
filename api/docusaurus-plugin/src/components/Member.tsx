// https://github.com/TypeStrong/typedoc-default-themes/blob/master/src/default/partials/members.hbs

import { Fragment, useContext } from 'react';
import type { JSONOutput } from 'typedoc';
import { useRequiredReflection } from '../hooks/useReflection';
import { useReflectionMap } from '../hooks/useReflectionMap';
import { hasOwnDocument } from '../utils/visibility';
import { AnchorLink } from './AnchorLink';
import { ApiOptionsContext, shouldHideReflection } from './ApiOptionsContext';
import { CommentBadges, isCommentWithModifiers } from './CommentBadges';
import { Flags } from './Flags';
import { MemberDeclaration } from './MemberDeclaration';
import { MemberGetterSetter } from './MemberGetterSetter';
import { MemberReference } from './MemberReference';
import { MemberSignatures } from './MemberSignatures';
import { SourceLink } from './SourceLink';
import { Name } from './Name';

export interface MemberProps {
	id: number;
}

export function Member({ id }: MemberProps) {
	const reflection = useRequiredReflection(id);
	const apiOptions = useContext(ApiOptionsContext);

	if (shouldHideReflection(reflection, apiOptions)) {
		return null;
	}

	let content: React.ReactNode = null;
	if (reflection.signatures) {
		content = <MemberSignatures inPanel sigs={reflection.signatures} />;
	} else if (reflection.getSignature || reflection.setSignature) {
		content = (
			<MemberGetterSetter
				inPanel
				getter={reflection.getSignature}
				setter={reflection.setSignature}
			/>
		);
	} else if ('target' in reflection && (reflection as JSONOutput.ReferenceReflection).target) {
		content = <MemberReference reflection={reflection as JSONOutput.ReferenceReflection} />;
	} else {
		content = <MemberDeclaration id={id} />;
	}

	const reflections = useReflectionMap();
	return (
		<section className="tsd-panel tsd-member">
			<h3 className="tsd-panel-header">
				<AnchorLink id={reflection.name} />
				<SourceLink sources={reflection.sources} />
				<Flags flags={reflection.flags} />
				<Name reflection={reflection} />
				{isCommentWithModifiers(reflection.comment) && <CommentBadges comment={reflection.comment} />}
			</h3>

			{content}

			{reflection.groups?.map((group) => (
				<Fragment key={group.title}>
					{group.children?.map((child) =>
						hasOwnDocument(child, reflections) ? null : <Member key={child} id={child} />,
					)}
				</Fragment>
			))}
		</section>
	);
}
