/*

    Inner Core API: Core Engine API Reference
    Copyright (C) 2022  Nernar (https://github.com/nernar)

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

	Maintained and distributed by MaXFeeD (maxfeed.nernar@outlook.com)

*/

import {
	ApiClass,
	ApiItem,
	ApiModel,
	IApiNameMixinOptions,
	IResolveDeclarationReferenceResult,
	ReleaseTag
} from '@microsoft/api-extractor-model';
import { DocDeclarationReference } from '@microsoft/tsdoc';
import { DeclarationReference } from '@microsoft/tsdoc/lib-commonjs/beta/DeclarationReference';

/**
 * Inherited {@link ApiClass} without any modifiers, extensions,
 * parameters, etc. Only `name` property may transferred via it.
 */
export class AbsoluteApiItem extends ApiClass {
	constructor(options: IApiNameMixinOptions) {
		super({
			...options,

			// It shouldn't appear in documentation itself,
			// because it just reference; nothing to document.
			releaseTag: ReleaseTag.Internal,
			isExported: false,

			// Mostly required to findMembersWithInheritance.
			extendsTokenRange: undefined,
			implementsTokenRanges: [],
			typeParameters: [],
			excerptTokens: [],

			// We are really want to implement it?
			docComment: null
		});
	}
}

/**
 * Required packages will be resolved when emitting webpages if related
 * absolutes found, otherwise it works normal.
 * Mostly requires reimplementation of `writeLinkTagWithCodeDestination`.
 */
export class AbsoluteApiModel extends ApiModel {
	private _absoluteRegex: RegExp | null;

	constructor(absolutes: string[]) {
		super();

		if (absolutes.length > 0) {
			this._absoluteRegex = new RegExp(`^(${ absolutes.join('|') })(\.|$)`);
		}
	}

	get matcher() {
		return this._absoluteRegex;
	}

	resolveDeclarationReference(
		declarationReference: DocDeclarationReference | DeclarationReference,
		contextApiItem: ApiItem | undefined
	): IResolveDeclarationReferenceResult {
		let potentialAbsolutePackage = undefined;
		if (declarationReference instanceof DeclarationReference) {
			if (declarationReference.isEmpty || !(
				potentialAbsolutePackage = declarationReference.symbol?.componentPath?.toString()
			)) {
				potentialAbsolutePackage = undefined;
			}
		} else if (declarationReference instanceof DocDeclarationReference) {
			potentialAbsolutePackage = declarationReference.emitAsTsdoc();
		}

		if (potentialAbsolutePackage && this._absoluteRegex?.test(potentialAbsolutePackage)) {
			return {
				resolvedApiItem: new AbsoluteApiItem({
					name: potentialAbsolutePackage
				}),
				errorMessage: undefined
			};
		}

		return super.resolveDeclarationReference(declarationReference, contextApiItem);
	}
}
