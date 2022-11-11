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

import { TSDocConfiguration, DocNodeKind } from '@microsoft/tsdoc';
import { CustomDocNodes } from '@microsoft/api-documenter/lib/nodes/CustomDocNodeKind'

import * as DocAdmonition from './nodes/DocAdmonition';
import { DocExpression } from './nodes/DocExpression';
import { DocExpressionHeading } from './nodes/DocExpressionHeading';

export enum DocusaurusDocNodeKind {
	NoteAdmonition = 'NoteAdmonition',
	TipAdmonition = 'TipAdmonition',
	InfoAdmonition = 'InfoAdmonition',
	CautionAdmonition = 'CautionAdmonition',
	DangerAdmonition = 'DangerAdmonition',
	Expression = 'Expression',
	ExpressionHeading = 'ExpressionHeader'
}

export class DocusaurusDocNodes {
	private static _configuration: TSDocConfiguration;

	static apply(configuration: TSDocConfiguration) {
		configuration.docNodeManager.registerDocNodes('innercore-api', [
			{ docNodeKind: DocusaurusDocNodeKind.NoteAdmonition, constructor: DocAdmonition.DocNoteAdmonition },
			{ docNodeKind: DocusaurusDocNodeKind.TipAdmonition, constructor: DocAdmonition.DocTipAdmonition },
			{ docNodeKind: DocusaurusDocNodeKind.InfoAdmonition, constructor: DocAdmonition.DocInfoAdmonition },
			{ docNodeKind: DocusaurusDocNodeKind.CautionAdmonition, constructor: DocAdmonition.DocCautionAdmonition },
			{ docNodeKind: DocusaurusDocNodeKind.DangerAdmonition, constructor: DocAdmonition.DocDangerAdmonition },
			{ docNodeKind: DocusaurusDocNodeKind.Expression, constructor: DocExpression },
			{ docNodeKind: DocusaurusDocNodeKind.ExpressionHeading, constructor: DocExpressionHeading }
		]);
		configuration.docNodeManager.registerAllowableChildren(DocNodeKind.Section, [
			DocusaurusDocNodeKind.NoteAdmonition,
			DocusaurusDocNodeKind.TipAdmonition,
			DocusaurusDocNodeKind.InfoAdmonition,
			DocusaurusDocNodeKind.CautionAdmonition,
			DocusaurusDocNodeKind.DangerAdmonition,
			DocusaurusDocNodeKind.Expression,
			DocusaurusDocNodeKind.ExpressionHeading
		]);
		configuration.docNodeManager.registerAllowableChildren(DocNodeKind.Paragraph, [
			DocusaurusDocNodeKind.Expression
		]);
		configuration.docNodeManager.registerAllowableChildren("EmphasisSpan", [
			DocusaurusDocNodeKind.Expression
		]);
	}

	static get configuration() {
		if (DocusaurusDocNodes._configuration === undefined) {
			const configuration = CustomDocNodes.configuration;
			DocusaurusDocNodes.apply(configuration);
			// @ts-ignore
			delete CustomDocNodes._configuration;
			DocusaurusDocNodes._configuration = configuration;
		}
		return DocusaurusDocNodes._configuration;
	}
}
