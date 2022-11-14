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
	IMarkdownEmitterContext,
	IMarkdownEmitterOptions
} from '@microsoft/api-documenter/lib/markdown/MarkdownEmitter';
import { CustomMarkdownEmitter } from '@microsoft/api-documenter/lib/markdown/CustomMarkdownEmitter';
import { DocNode } from '@microsoft/tsdoc';

import { DocusaurusDocNodeKind } from './DocusaurusDocNodes';
import { DocAdmonition } from './nodes/DocAdmonition';
import { DocExpression } from './nodes/DocExpression';
import { DocExpressionHeading } from './nodes/DocExpressionHeading';

export class DocusaurusMarkdownEmitter extends CustomMarkdownEmitter {
	protected writeNode(
		docNode: DocNode,
		context: IMarkdownEmitterContext<IMarkdownEmitterOptions>,
		docNodeSiblings: boolean
	): void {
		const { writer } = context;
		switch (docNode.kind) {
			case DocusaurusDocNodeKind.NoteAdmonition:
			case DocusaurusDocNodeKind.TipAdmonition:
			case DocusaurusDocNodeKind.InfoAdmonition:
			case DocusaurusDocNodeKind.CautionAdmonition:
			case DocusaurusDocNodeKind.DangerAdmonition:
				const admonition = docNode as DocAdmonition;
				writer.ensureSkippedLine();
				writer.write(':::');
				writer.write(admonition.tag);
				if (admonition.title || admonition.icon) {
					writer.write(' ');
				}
				if (admonition.icon) {
					writer.write(`icon=${ JSON.stringify(this.getEscapedText(admonition.icon)) }`);
					if (admonition.title) {
						writer.write(' ');
						writer.write(`title=${ JSON.stringify(this.getEscapedText(admonition.title)) }`);
					}
				} else if (admonition.title) {
					writer.write(admonition.rawTitle ? admonition.title : this.getEscapedText(admonition.title));
				}
				writer.ensureSkippedLine();
				this.writeNode(admonition.content, context, false);
				writer.ensureSkippedLine();
				writer.writeLine(':::');
				writer.writeLine();
				break;

			case DocusaurusDocNodeKind.ExpressionHeading:
				const header = docNode as DocExpressionHeading;
				writer.ensureSkippedLine();
				writer.write(`<h${ header.level + 1 }>`);
				this.writeNode(header.content, context, false);
				writer.write(`</h${ header.level + 1 }>`)
				writer.ensureSkippedLine();
				break;

			case DocusaurusDocNodeKind.Expression:
				const expression = docNode as DocExpression;
				expression.inline || writer.ensureSkippedLine();
				const { boldRequested, italicRequested } = context;
				if (boldRequested) {
					writer.write('<b>');
				}
				if (italicRequested) {
					writer.write('<i>');
				}
				writer.write(expression.expression);
				if (italicRequested) {
					writer.write('</i>');
				}
				if (boldRequested) {
					writer.write('</b>');
				}
				expression.inline || writer.ensureSkippedLine();
				break;

			default:
				super.writeNode(docNode, context, docNodeSiblings);
		}
	}
}
