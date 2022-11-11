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

import { DocNode, DocSection, IDocNodeParameters } from '@microsoft/tsdoc';

import { DocusaurusDocNodeKind } from '../DocusaurusDocNodes'
import { DocExpression } from './DocExpression';

export interface IDocAdmonitionParameters extends IDocNodeParameters {
	title?: string | DocExpression;
	icon?: string;
	rawTitle?: boolean;
}

export abstract class DocAdmonition extends DocNode {
	content: DocSection;
	title?: string;
	rawTitle: boolean;
	icon?: string;

	constructor(parameters: IDocAdmonitionParameters, sectionChildNodes: readonly DocNode[] | undefined) {
		super(parameters);
		this.title = parameters.title instanceof DocExpression
			? parameters.title.expression : parameters.title;
		this.icon = parameters.icon;
		this.rawTitle = parameters.rawTitle ?? false;
		if (this.rawTitle && this.icon !== undefined) {
			throw new Error('Only IDocAdmonitionParameters.rawTitle or IDocAdmonitionParameters.icon must appear directly');
		}
		this.content = new DocSection({ configuration: this.configuration }, sectionChildNodes);
	}

	protected onGetChildNodes(): readonly (DocNode | undefined)[] {
		return [
			this.content
		];
	}

	abstract get tag(): string;
}

export class DocNoteAdmonition extends DocAdmonition {
	get kind(): string {
		return DocusaurusDocNodeKind.NoteAdmonition;
	}

	get tag(): string {
		return 'note';
	}
}

export class DocTipAdmonition extends DocAdmonition {
	get kind(): string {
		return DocusaurusDocNodeKind.TipAdmonition;
	}

	get tag(): string {
		return 'tip';
	}
}

export class DocInfoAdmonition extends DocAdmonition {
	get kind(): string {
		return DocusaurusDocNodeKind.InfoAdmonition;
	}

	get tag(): string {
		return 'info';
	}
}

export class DocCautionAdmonition extends DocAdmonition {
	get kind(): string {
		return DocusaurusDocNodeKind.CautionAdmonition;
	}

	get tag(): string {
		return 'caution';
	}
}

export class DocDangerAdmonition extends DocAdmonition {
	get kind(): string {
		return DocusaurusDocNodeKind.DangerAdmonition;
	}

	get tag(): string {
		return 'danger';
	}
}
