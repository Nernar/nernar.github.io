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

import { DocNode, IDocNodeParameters } from '@microsoft/tsdoc';

import { DocusaurusDocNodeKind } from '../DocusaurusDocNodes'

export interface IDocExpressionParameters extends IDocNodeParameters {
	expression: string;
	inline?: boolean;
}

export class DocExpression extends DocNode {
	expression: string;
	inline: boolean;

	constructor(parameters: IDocExpressionParameters) {
		super(parameters);
		this.expression = parameters.expression;
		this.inline = parameters.inline ?? true;
	}

	get kind(): string {
		return DocusaurusDocNodeKind.Expression;
	}
}
