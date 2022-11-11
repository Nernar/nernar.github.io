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
import { DocExpression } from './DocExpression';

export interface IDocExpressionHeadingParameters extends IDocNodeParameters {
	expression: string | DocExpression;
	level?: number;
}

export class DocExpressionHeading extends DocNode {
	content: DocExpression;
	readonly level: number;

	constructor(parameters: IDocExpressionHeadingParameters) {
		super(parameters);
		this.content = parameters.expression instanceof DocExpression
			? parameters.expression : new DocExpression({
				configuration: parameters.configuration,
				expression: parameters.expression as string
			});
		this.content.inline = true;
		this.level = parameters.level ?? 1;
        if (this.level < 1 || this.level > 5) {
            throw new Error('IDocExpressionHeadingParameters.level must be a number between 1 and 5');
        }
	}

	get kind(): string {
		return DocusaurusDocNodeKind.ExpressionHeading;
	}
}
