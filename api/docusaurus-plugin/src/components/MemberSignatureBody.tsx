// https://github.com/TypeStrong/typedoc-default-themes/blob/master/src/default/partials/member.signature.body.hbs

import { Fragment } from 'react'
import type { JSONOutput, Models } from 'typedoc';
import { useMinimalLayout } from '../hooks/useMinimalLayout';
import type { TSDSignatureReflection } from '../types';
import { Comment, hasComment } from './Comment';
import { CommentBadges, isCommentWithModifiers } from './CommentBadges';
import { DefaultValue } from './DefaultValue';
import { Flags } from './Flags';
import { hasSources, MemberSources } from './MemberSources';
import { Parameter } from './Parameter';
import { extractDeclarationFromType, Type } from './Type';
import { TypeParameters } from './TypeParameters';

export function hasSigBody(
	sig: TSDSignatureReflection | undefined,
	minimal: boolean,
	hideSources: boolean = false,
) {
	if (!sig) {
		return false;
	}

	return (
		(!hideSources && hasSources(sig)) ||
		hasComment(sig.comment) ||
		(sig.typeParameter && sig.typeParameter.length > 0) ||
		(!minimal && sig.parameters && sig.parameters.length > 0) ||
		(!minimal && sig.type)
	);
}

export interface MemberSignatureBodyProps {
	hideSources?: boolean;
	sig: TSDSignatureReflection;
}

function intoReturnComment(comment?: JSONOutput.Comment): JSONOutput.Comment | undefined {
	if (comment?.blockTags) {
		const tags = comment.blockTags.map((tag) => tag.tag);

		if (tags.includes('@returns')) {
			const index = tags.indexOf('@returns');

			return {
				summary: comment.blockTags[index].content,
			};
		}
	}

	return undefined;
}

const HIDE_TAGS = ['@returns', '@param'];

// eslint-disable-next-line complexity
export function MemberSignatureBody({ hideSources, sig }: MemberSignatureBodyProps) {
	const minimal = useMinimalLayout();
	const showTypes = sig.typeParameter && sig.typeParameter.length > 0;
	const showParams = !minimal && sig.parameters && sig.parameters.length > 0;
	const showReturn = !minimal && sig.type;

	return (
		<>
			{!hideSources && <MemberSources reflection={sig} />}

			{isCommentWithModifiers(sig.comment) && <CommentBadges comment={sig.comment} />}

			<Comment comment={sig.comment} hideTags={HIDE_TAGS} />

			{hasComment(sig.comment, HIDE_TAGS) && (showTypes || showParams || showReturn) && (
				<hr className="tsd-divider" />
			)}

			{showTypes && (
				<>
					<h4 className="tsd-type-parameters-title">Type parameters</h4>
					<TypeParameters params={sig.typeParameter} />
				</>
			)}

			{showParams && (
				<>
					<h4 className="tsd-parameters-title">Parameters</h4>

					<ul className="tsd-parameters">
						{sig.parameters?.map((param) => (
							<Fragment key={param.id}>
								<li>
									<h5>
										<Flags flags={param.flags} />
										{param.flags?.isRest && <span className="tsd-signature-symbol">...</span>}
										{`${param.name}: `}
										<Type type={param.type} />
										<DefaultValue
											comment={param.comment}
											type={param.type}
											value={param.defaultValue}
										/>
									</h5>

									<Comment comment={param.comment} />
								</li>

								{param.type?.type === 'reflection' && (
									<ul key={param.type.declaration.id}>
										{param.type.declaration?.children?.map((reflectionChild) => (
											<li key={reflectionChild.id}>
												<h5>
													<Flags flags={reflectionChild.flags} />
													{reflectionChild.flags?.isRest && <span className="tsd-signature-symbol">...</span>}
													{`${reflectionChild.name}: `}
													<Type type={reflectionChild.type} />
													<DefaultValue
														comment={reflectionChild.comment as unknown as JSONOutput.Comment}
														type={reflectionChild.type}
														value={reflectionChild.defaultValue}
													/>
												</h5>

												<Comment comment={reflectionChild.comment as unknown as JSONOutput.Comment} />
											</li>
										))}
									</ul>
								)}

								{param.type?.type === 'union' && (
									(param.type as unknown as Models.UnionType).types.filter(
										(unionType) => unionType.type === 'reflection').map(
										(unionReflectionType: Models.ReflectionType) => (
											<ul key={unionReflectionType.declaration.id}>
												{unionReflectionType.declaration?.children?.map((unionChild) => (
													<li key={unionChild.id}>
														<h5>
															<Flags flags={unionChild.flags} />
															{unionChild.flags?.isRest && <span className="tsd-signature-symbol">...</span>}
															{`${unionChild.name}: `}
															<Type type={unionChild.type} />
															<DefaultValue
																comment={unionChild.comment as unknown as JSONOutput.Comment}
																type={unionChild.type}
																value={unionChild.defaultValue}
															/>
														</h5>

														<Comment comment={unionChild.comment as unknown as JSONOutput.Comment} />
													</li>
												))}
											</ul>
										))
								)}
							</Fragment>
						))}
					</ul>
				</>
			)}

			{showReturn && (
				<>
					<h4 className="tsd-returns-title">
						Returns <Type type={sig.type} />
					</h4>

					<Comment comment={intoReturnComment(sig.comment)} />

					<Parameter param={extractDeclarationFromType(sig.type)} />
				</>
			)}
		</>
	);
}
