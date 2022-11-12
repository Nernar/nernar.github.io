/*

    Inner Core API: Core Engine API Reference
    Copyright (C) 2022  Nernar (https://github.com/nernar)

	Copyright 2022 Google Inc. All rights reserved. Licensed under the
	Apache License. See LICENSE in the project root for license information.

	Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the
	MIT license. See LICENSE in the project root for license information.

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

import { DocumenterConfig } from '@microsoft/api-documenter/lib/documenters/DocumenterConfig';
import { IMarkdownDocumenterOptions } from '@microsoft/api-documenter/lib/documenters/MarkdownDocumenter';
import { MarkdownDocumenterAccessor } from '@microsoft/api-documenter/lib/plugin/MarkdownDocumenterAccessor';
import { CustomMarkdownEmitter } from '@microsoft/api-documenter/lib/markdown/CustomMarkdownEmitter';
import { DocEmphasisSpan } from '@microsoft/api-documenter/lib/nodes/DocEmphasisSpan';
import { DocHeading } from '@microsoft/api-documenter/lib/nodes/DocHeading';
import { DocTable } from '@microsoft/api-documenter/lib/nodes/DocTable';
import { DocTableCell } from '@microsoft/api-documenter/lib/nodes/DocTableCell';
import { DocTableRow } from '@microsoft/api-documenter/lib/nodes/DocTableRow';
import { PluginLoader } from '@microsoft/api-documenter/lib/plugin/PluginLoader';
import { Utilities } from '@microsoft/api-documenter/lib/utils/Utilities';
import {
	ApiModel,
	ApiItem,
	ApiItemKind,
	ApiReleaseTagMixin,
	ReleaseTag,
	ApiDocumentedItem,
	ApiDeclaredItem,
	ApiClass,
	ApiEnum,
	ApiInterface,
	ApiParameterListMixin,
	ApiNamespace,
	ApiPackage,
	ApiTypeAlias,
	ExcerptToken,
	ExcerptTokenKind,
	ApiPropertyItem,
	ApiReturnTypeMixin,
	Excerpt,
	IResolveDeclarationReferenceResult,
	ApiOptionalMixin,
	ApiProtectedMixin,
	ApiReadonlyMixin,
	ApiStaticMixin,
	ApiInitializerMixin,
	ApiVariable
} from '@microsoft/api-extractor-model';
import {
	IMarkdownDocumenterFeatureOnBeforeWritePageArgs,
	MarkdownDocumenterFeatureContext
} from '@microsoft/api-documenter/lib/plugin/MarkdownDocumenterFeature';
import {
	DocBlock,
	DocCodeSpan,
	DocComment,
	DocFencedCode,
	DocLinkTag,
	DocNodeContainer,
	DocNodeKind,
	DocParagraph,
	DocPlainText,
	DocSection,
	StandardTags,
	StringBuilder,
	TSDocConfiguration
} from '@microsoft/tsdoc';
import {
	FileSystem,
	NewlineKind
} from '@rushstack/node-core-library';
import * as path from 'path';
import * as fs from 'fs';

import { DocusaurusDocNodes } from './DocusaurusDocNodes';
import { DocusaurusMarkdownEmitter } from './DocusaurusMarkdownEmitter';
import { DocCautionAdmonition, DocDangerAdmonition, DocInfoAdmonition } from './nodes/DocAdmonition';
import { DocExpression } from './nodes/DocExpression';
import { DocExpressionHeading } from './nodes/DocExpressionHeading';

function getSafeFilename(name: string) {
	try {
		// @ts-ignore
		return name.replace(Utilities._badFilenameCharsRegExp, '_');
	} catch (e) {
		return name.replace(/[^a-z0-9_\-\.]/gi, '_');
	}
}

export interface IDocusaurusMarkdownDocumenterOptions extends IMarkdownDocumenterOptions {
	routeBasePath: string;
}

/**
 * Renders API documentation in the Markdown file format.
 * For more info: https://en.wikipedia.org/wiki/Markdown
 */
export class DocusaurusMarkdownDocumenter {
	private readonly _apiModel: ApiModel;
	private readonly _documenterConfig: DocumenterConfig | undefined;
	private readonly _tsdocConfiguration: TSDocConfiguration;
	private readonly _markdownEmitter: CustomMarkdownEmitter;
	private readonly _outputFolder: string;
	private readonly _routeBasePath: string;
	private readonly _pluginLoader: PluginLoader;

	public constructor(options: IDocusaurusMarkdownDocumenterOptions) {
		this._apiModel = options.apiModel;
		this._documenterConfig = options.documenterConfig;
		this._outputFolder = options.outputFolder;
		this._routeBasePath = options.routeBasePath;
		this._tsdocConfiguration = DocusaurusDocNodes.configuration;
		this._markdownEmitter = new DocusaurusMarkdownEmitter(this._apiModel);

		this._pluginLoader = new PluginLoader();
	}

	public generateFiles(): void {
		if (this._documenterConfig) {
			this._pluginLoader.load(this._documenterConfig, () => {
				return new MarkdownDocumenterFeatureContext({
					apiModel: this._apiModel,
					outputFolder: this._outputFolder,
					documenter: new MarkdownDocumenterAccessor({
						getLinkForApiItem: (apiItem: ApiItem) => {
							console.log(apiItem);
							return this._getSlugForApiItem(apiItem);
						}
					})
				});
			});
		}

		FileSystem.ensureEmptyFolder(this._outputFolder);
		this._writeApiItemPage(this._apiModel.members[0]!);

		if (this._pluginLoader.markdownDocumenterFeature) {
			this._pluginLoader.markdownDocumenterFeature.onFinished({});
		}
	}

	private _writeApiItemPage(apiItem: ApiItem): void {
		const configuration: TSDocConfiguration = this._tsdocConfiguration;
		const output: DocSection = new DocSection({
			configuration: this._tsdocConfiguration,
		});

		const scopedName: string = apiItem.getScopedNameWithinPackage();

		switch (apiItem.kind) {
			case ApiItemKind.Class:
				output.appendNode(
					new DocExpressionHeading({
						configuration,
						expression: this._constructTranslation(
							'api.heading.class', '{scopedName} class', { scopedName }
						)
					})
				);
				break;
			case ApiItemKind.Enum:
				output.appendNode(
					new DocExpressionHeading({
						configuration,
						expression: this._constructTranslation(
							'api.heading.enumeration', '{scopedName} enum', { scopedName }
						)
					})
				);
				break;
			case ApiItemKind.Interface:
				output.appendNode(
					new DocExpressionHeading({
						configuration,
						expression: this._constructTranslation(
							'api.heading.interface', '{scopedName} interface', { scopedName }
						)
					})
				);
				break;
			case ApiItemKind.Constructor:
			case ApiItemKind.ConstructSignature:
				output.appendNode(
					new DocHeading({ configuration, title: scopedName })
				);
				break;
			case ApiItemKind.Method:
			case ApiItemKind.MethodSignature:
				output.appendNode(
					new DocExpressionHeading({
						configuration,
						expression: this._constructTranslation(
							'api.heading.method', '{scopedName} method', { scopedName }
						)
					})
				);
				break;
			case ApiItemKind.Function:
				output.appendNode(
					new DocExpressionHeading({
						configuration,
						expression: this._constructTranslation(
							'api.heading.function', '{scopedName} function', { scopedName }
						)
					})
				);
				break;
			case ApiItemKind.Model:
			case ApiItemKind.Package:
				output.appendNode(
					new DocExpressionHeading({
						configuration,
						expression: this._constructTranslation(
							'api.heading.entryPoint', 'API Reference'
						)
					})
				);
				break;
			case ApiItemKind.Namespace:
				output.appendNode(
					new DocExpressionHeading({
						configuration,
						expression: this._constructTranslation(
							'api.heading.namespace', '{scopedName} namespace', { scopedName }
						)
					})
				);
				break;
			case ApiItemKind.Property:
			case ApiItemKind.PropertySignature:
				output.appendNode(
					new DocExpressionHeading({
						configuration,
						expression: this._constructTranslation(
							'api.heading.property', '{scopedName} property', { scopedName }
						)
					})
				);
				break;
			case ApiItemKind.TypeAlias:
				output.appendNode(
					new DocExpressionHeading({
						configuration,
						expression: this._constructTranslation(
							'api.heading.typeAlias', '{scopedName} type', { scopedName }
						)
					})
				);
				break;
			case ApiItemKind.Variable:
				output.appendNode(
					new DocExpressionHeading({
						configuration,
						expression: this._constructTranslation(
							'api.heading.variable', '{scopedName} variable', { scopedName }
						)
					})
				);
				break;
			default:
				throw new Error('Unsupported API item kind: ' + apiItem.kind);
		}

		if (ApiReleaseTagMixin.isBaseClassOf(apiItem)) {
			if (apiItem.releaseTag !== ReleaseTag.Public) {
				this._writeBetaWarning(output);
			}
		}

		const decoratorBlocks: DocBlock[] = [];

		if (apiItem instanceof ApiDocumentedItem) {
			const tsdocComment: DocComment | undefined = apiItem.tsdocComment;

			if (tsdocComment) {
				decoratorBlocks.push(
					...tsdocComment.customBlocks.filter(block => {
						return (
							block.blockTag.tagNameWithUpperCase ===
							StandardTags.decorator.tagNameWithUpperCase
						);
					})
				);

				if (tsdocComment.deprecatedBlock) {
					output.appendNode(
						new DocDangerAdmonition({
							configuration,
							title: this._constructTranslation('api.deprecatedNotice.title', 'Deprecated')
						}, [
							new DocParagraph({ configuration }, [
								this._constructTranslation('api.deprecatedNotice.message', 'No longer supported and shouldn\'t be used!')
							]),
							...tsdocComment.deprecatedBlock.content.nodes
						])
					);
				}

				this._appendSection(output, tsdocComment.summarySection);
			}
		}

		if (apiItem instanceof ApiDeclaredItem) {
			if (apiItem.excerpt.text.length > 0) {
				output.appendNode(
					new DocParagraph({ configuration }, [
						new DocEmphasisSpan({ configuration, bold: true }, [
							this._constructTranslation('api.section.signature', 'Signature')
						])
					])
				);

				let code: string;
				switch (apiItem.parent?.kind) {
					case ApiItemKind.Class:
					case ApiItemKind.Interface:
						const declared = apiItem.parent as ApiDeclaredItem;
						code = `${ declared.getExcerptWithModifiers().trim()
						} {\n\t${ declared.members.length > 1 ? '...\n\t' : ''
						}${ apiItem.getExcerptWithModifiers() }\n}`;
						break;
					default:
						code = apiItem.getExcerptWithModifiers();
				}
				output.appendNode(
					new DocFencedCode({
						configuration,
						code: code,
						language: 'typescript'
					})
				);
			}

			this._writeHeritageTypes(output, apiItem);
		}

		if (decoratorBlocks.length > 0) {
			output.appendNode(
				new DocParagraph({ configuration }, [
					new DocEmphasisSpan({ configuration, bold: true }, [
						this._constructTranslation('api.section.decorators', 'Decorators')
					])
				])
			);
			for (const decoratorBlock of decoratorBlocks) {
				output.appendNodes(decoratorBlock.content.nodes);
			}
		}

		let appendRemarks = true;
		switch (apiItem.kind) {
			case ApiItemKind.Class:
			case ApiItemKind.Interface:
			case ApiItemKind.Namespace:
			case ApiItemKind.Package:
				this._writeRemarksSection(output, apiItem);
				appendRemarks = false;
				break;
		}

		switch (apiItem.kind) {
			case ApiItemKind.Class:
				this._writeClassTables(output, apiItem as ApiClass);
				break;
			case ApiItemKind.Enum:
				this._writeEnumTables(output, apiItem as ApiEnum);
				break;
			case ApiItemKind.Interface:
				this._writeInterfaceTables(output, apiItem as ApiInterface);
				break;
			case ApiItemKind.Constructor:
			case ApiItemKind.ConstructSignature:
			case ApiItemKind.Method:
			case ApiItemKind.MethodSignature:
			case ApiItemKind.Function:
				this._writeParameterTables(output, apiItem as ApiParameterListMixin);
				this._writeThrowsSection(output, apiItem);
				break;
			case ApiItemKind.Namespace:
				this._writePackageOrNamespaceTables(output, apiItem as ApiNamespace);
				break;
			case ApiItemKind.Model:
				this._writeModelTable(output, apiItem as ApiModel);
				break;
			case ApiItemKind.Package:
				this._writePackageOrNamespaceTables(output, apiItem as ApiPackage);
				break;
			case ApiItemKind.Property:
			case ApiItemKind.PropertySignature:
			case ApiItemKind.TypeAlias:
			case ApiItemKind.Variable:
				break;
			default:
				throw new Error('Unsupported API item kind: ' + apiItem.kind);
		}

		if (appendRemarks) {
			this._writeRemarksSection(output, apiItem);
		}

		const relpath = this._getSchemeForApiItem(apiItem);
		const filename: string = path.join(
			this._outputFolder, relpath + '.mdx'
		);
		const stringBuilder: StringBuilder = new StringBuilder();

		this._markdownEmitter.emit(stringBuilder, output, {
			contextApiItem: apiItem,
			onGetFilenameForApiItem: (apiItemForFilename: ApiItem) => {
				return this._getSlugForApiItem(apiItemForFilename);
			}
		});

		let pageContent: string = stringBuilder.toString();
		fs.mkdirSync(path.dirname(filename), { recursive: true });

		if (this._pluginLoader.markdownDocumenterFeature) {
			// Allow the plugin to customize the pageContent
			const eventArgs: IMarkdownDocumenterFeatureOnBeforeWritePageArgs = {
				apiItem: apiItem,
				outputFilename: filename,
				pageContent: pageContent
			};
			this._pluginLoader.markdownDocumenterFeature.onBeforeWritePage(eventArgs);
			pageContent = eventArgs.pageContent;
		}

		pageContent = pageContent.replace('##', '#');
		pageContent = pageContent.replace(/<!-- -->/g, '');
		pageContent = pageContent.replace(/\\\*\\\*/g, '**');
		pageContent = pageContent.replace(/<b>|<\/b>/g, '**');
		if (!fs.existsSync(filename)) {
			pageContent = `---
title: ${ scopedName || 'API' }
sidebar_label: ${ this._getSidebarLabelForApiItem(apiItem) }
hide_table_of_contents: true
pagination_next: null
pagination_prev: null
hide_title: true
---

import Translate from "@docusaurus/Translate";
` + pageContent;
			if (relpath == 'index') {
				pageContent = pageContent.replace('---', `---
displayed_sidebar: defaultSidebar
slug: /`)
			} else if (relpath.indexOf('/') != -1) {
				// Preserves Docusaurus "docId" routes duplication.
				const slug = relpath.toLowerCase().split('/');
				if (slug[slug.length - 1] == slug[slug.length - 2]) {
					pageContent = pageContent.replace('---', `---
slug: ${ path.basename(relpath) }`);
				}
			}
		} else {
			pageContent = '---' + pageContent.substring(pageContent.indexOf('\n', pageContent.indexOf('\n') + 1));
		}

		FileSystem.appendToFile(filename, pageContent, {
			convertLineEndings: this._documenterConfig
				? this._documenterConfig.newlineKind
				: NewlineKind.CrLf
		});
	}

	private _writeHeritageTypes(
		output: DocSection,
		apiItem: ApiDeclaredItem
	): void {
		const configuration: TSDocConfiguration = this._tsdocConfiguration;

		if (apiItem instanceof ApiClass) {
			if (apiItem.extendsType) {
				const extendsParagraph: DocParagraph = new DocParagraph(
					{ configuration },
					[
						new DocEmphasisSpan({ configuration, bold: true }, [
							this._constructTranslation('api.descriptor.extends', 'Extends: ')
						])
					]
				);
				this._appendExcerptWithHyperlinks(
					extendsParagraph,
					apiItem.extendsType.excerpt
				);
				output.appendNode(extendsParagraph);
			}
			if (apiItem.implementsTypes.length > 0) {
				const extendsParagraph: DocParagraph = new DocParagraph(
					{ configuration },
					[
						new DocEmphasisSpan({ configuration, bold: true }, [
							this._constructTranslation('api.descriptor.implements', 'Implements: ')
						])
					]
				);
				let needsComma = false;
				for (const implementsType of apiItem.implementsTypes) {
					if (needsComma) {
						extendsParagraph.appendNode(
							new DocPlainText({ configuration, text: ', ' })
						);
					}
					this._appendExcerptWithHyperlinks(
						extendsParagraph,
						implementsType.excerpt
					);
					needsComma = true;
				}
				output.appendNode(extendsParagraph);
			}
		}

		if (apiItem instanceof ApiInterface) {
			if (apiItem.extendsTypes.length > 0) {
				const extendsParagraph: DocParagraph = new DocParagraph(
					{ configuration },
					[
						new DocEmphasisSpan({ configuration, bold: true }, [
							this._constructTranslation('api.descriptor.extends', 'Extends: ')
						])
					]
				);
				let needsComma = false;
				for (const extendsType of apiItem.extendsTypes) {
					if (needsComma) {
						extendsParagraph.appendNode(
							new DocPlainText({ configuration, text: ', ' })
						);
					}
					this._appendExcerptWithHyperlinks(
						extendsParagraph,
						extendsType.excerpt
					);
					needsComma = true;
				}
				output.appendNode(extendsParagraph);
			}
		}

		if (apiItem instanceof ApiTypeAlias || apiItem instanceof ApiVariable) {
			const refs: ExcerptToken[] = apiItem.excerptTokens.filter(token => {
				return (
					token.kind === ExcerptTokenKind.Reference &&
					token.canonicalReference &&
					this._apiModel.resolveDeclarationReference(
						token.canonicalReference,
						undefined
					).resolvedApiItem
				);
			});
			if (refs.length > 0) {
				const referencesParagraph: DocParagraph = new DocParagraph(
					{ configuration },
					[
						new DocEmphasisSpan({ configuration, bold: true }, [
							this._constructTranslation('api.descriptor.references', 'References: ')
						])
					]
				);
				let needsComma = false;
				const visited: Set<string> = new Set();
				for (const ref of refs) {
					if (visited.has(ref.text)) {
						continue;
					}
					visited.add(ref.text);

					if (needsComma) {
						referencesParagraph.appendNode(
							new DocPlainText({ configuration, text: ', ' })
						);
					}

					this._appendExcerptTokenWithHyperlinks(referencesParagraph, ref);
					needsComma = true;
				}
				output.appendNode(referencesParagraph);
			}
		}
	}

	private _writeRemarksSection(output: DocSection, apiItem: ApiItem): void {
		if (apiItem instanceof ApiDocumentedItem) {
			const tsdocComment: DocComment | undefined = apiItem.tsdocComment;

			if (tsdocComment) {
				// Write the @remarks block
				if (tsdocComment.remarksBlock) {
					output.appendNode(new DocInfoAdmonition({
						configuration: this._tsdocConfiguration,
						title: this._constructTranslation('api.section.remarks', 'Remarks')
					}, [
						tsdocComment.remarksBlock.content
					]));
				}

				// Write the @example blocks
				const exampleBlocks: DocBlock[] = tsdocComment.customBlocks.filter(
					x => {
						return (
							x.blockTag.tagNameWithUpperCase ===
							StandardTags.example.tagNameWithUpperCase
						);
					}
				);

				for (const exampleBlock of exampleBlocks) {
					output.appendNode(
						new DocExpressionHeading({
							configuration: this._tsdocConfiguration,
							expression: exampleBlocks.length > 1
								? this._constructTranslation('api.section.example', 'Example')
								: this._constructTranslation('api.section.examples', 'Examples'),
							level: 2
						})
					);

					this._appendSection(output, exampleBlock.content);
				}
			}
		}
	}

	private _writeThrowsSection(output: DocSection, apiItem: ApiItem): void {
		if (apiItem instanceof ApiDocumentedItem) {
			const tsdocComment: DocComment | undefined = apiItem.tsdocComment;

			if (tsdocComment) {
				// Write the @throws blocks
				const throwsBlocks: DocBlock[] = tsdocComment.customBlocks.filter(x => {
					return (
						x.blockTag.tagNameWithUpperCase ===
						StandardTags.throws.tagNameWithUpperCase
					);
				});

				if (throwsBlocks.length > 0) {
					output.appendNode(
						new DocExpressionHeading({
							configuration: this._tsdocConfiguration,
							expression: this._constructTranslation('api.section.exceptions', 'Exceptions'),
							level: 2
						})
					);

					for (const throwsBlock of throwsBlocks) {
						this._appendSection(output, throwsBlock.content);
					}
				}
			}
		}
	}

	/**
	 * GENERATE PAGE: MODEL
	 */
	private _writeModelTable(output: DocSection, apiModel: ApiModel): void {
		const configuration: TSDocConfiguration = this._tsdocConfiguration;

		const packagesTable: DocTable = new DocTable({
			configuration,
			headerCells: [
				this._createLocalizedTableCell('api.block.package', 'Package'),
				this._createLocalizedTableCell('api.block.description', 'Description')
			]
		});

		for (const apiMember of apiModel.members) {
			const row: DocTableRow = new DocTableRow({ configuration }, [
				this._createTitleCell(apiMember),
				this._createDescriptionCell(apiMember)
			]);

			switch (apiMember.kind) {
				case ApiItemKind.Package:
					packagesTable.addRow(row);
					this._writeApiItemPage(apiMember);
					break;
			}
		}

		if (packagesTable.rows.length > 0) {
			output.appendNode(
				new DocExpressionHeading({
					configuration,
					expression: this._constructTranslation('api.section.packages', 'Packages'),
					level: 2
				})
			);
			output.appendNode(packagesTable);
		}
	}

	/**
	 * GENERATE PAGE: PACKAGE or NAMESPACE
	 */
	private _writePackageOrNamespaceTables(
		output: DocSection,
		apiContainer: ApiPackage | ApiNamespace
	): void {
		const configuration: TSDocConfiguration = this._tsdocConfiguration;

		const namespacesTable: DocTable = new DocTable({
			configuration,
			headerCells: [
				this._createLocalizedTableCell('api.block.namespace', 'Namespace'),
				this._createLocalizedTableCell('api.block.description', 'Description')
			]
		});

		const classesTable: DocTable = new DocTable({
			configuration,
			headerCells: [
				this._createLocalizedTableCell('api.block.class', 'Class'),
				this._createLocalizedTableCell('api.block.description', 'Description')
			]
		});

		const enumerationsTable: DocTable = new DocTable({
			configuration,
			headerCells: [
				this._createLocalizedTableCell('api.block.enumeration', 'Enumeration'),
				this._createLocalizedTableCell('api.block.description', 'Description')
			]
		});

		const functionsTable: DocTable = new DocTable({
			configuration,
			headerCells: [
				this._createLocalizedTableCell('api.block.function', 'Function'),
				this._createLocalizedTableCell('api.block.description', 'Description')
			]
		});

		const variablesTable: DocTable = new DocTable({
			configuration,
			headerCells: [
				this._createLocalizedTableCell('api.block.variable', 'Variable'),
				this._createLocalizedTableCell('api.block.description', 'Description')
			]
		});

		const interfacesTable: DocTable = new DocTable({
			configuration,
			headerCells: [
				this._createLocalizedTableCell('api.block.interface', 'Interface'),
				this._createLocalizedTableCell('api.block.description', 'Description')
			]
		});

		const typeAliasesTable: DocTable = new DocTable({
			configuration,
			headerCells: [
				this._createLocalizedTableCell('api.block.typeAlias', 'Type Alias'),
				this._createLocalizedTableCell('api.block.description', 'Description')
			]
		});

		const apiMembers: readonly ApiItem[] =
			apiContainer.kind === ApiItemKind.Package
				? (apiContainer as ApiPackage).entryPoints[0]!.members
				: (apiContainer as ApiNamespace).members;

		for (const apiMember of apiMembers) {
			const row: DocTableRow = new DocTableRow({ configuration }, [
				this._createTitleCell(apiMember),
				this._createDescriptionCell(apiMember)
			]);

			switch (apiMember.kind) {
				case ApiItemKind.Class:
					classesTable.addRow(row);
					this._writeApiItemPage(apiMember);
					break;

				case ApiItemKind.Enum:
					enumerationsTable.addRow(row);
					this._writeApiItemPage(apiMember);
					break;

				case ApiItemKind.Interface:
					interfacesTable.addRow(row);
					this._writeApiItemPage(apiMember);
					break;

				case ApiItemKind.Namespace:
					namespacesTable.addRow(row);
					this._writeApiItemPage(apiMember);
					break;

				case ApiItemKind.Function:
					functionsTable.addRow(row);
					this._writeApiItemPage(apiMember);
					break;

				case ApiItemKind.TypeAlias:
					typeAliasesTable.addRow(row);
					this._writeApiItemPage(apiMember);
					break;

				case ApiItemKind.Variable:
					variablesTable.addRow(row);
					this._writeApiItemPage(apiMember);
					break;
			}
		}

		if (namespacesTable.rows.length > 0) {
			output.appendNode(
				new DocExpressionHeading({
					configuration,
					expression: this._constructTranslation('api.section.namespaces', 'Namespaces'),
					level: 2
				})
			);
			output.appendNode(namespacesTable);
		}

		if (classesTable.rows.length > 0) {
			output.appendNode(
				new DocExpressionHeading({
					configuration,
					expression: this._constructTranslation('api.section.classes', 'Classes'),
					level: 2
				})
			);
			output.appendNode(classesTable);
		}

		if (enumerationsTable.rows.length > 0) {
			output.appendNode(
				new DocExpressionHeading({
					configuration,
					expression: this._constructTranslation('api.section.enumerations', 'Enumerations'),
					level: 2
				})
			);
			output.appendNode(enumerationsTable);
		}

		if (variablesTable.rows.length > 0) {
			output.appendNode(
				new DocExpressionHeading({
					configuration,
					expression: this._constructTranslation('api.section.variables', 'Variables'),
					level: 2
				})
			);
			output.appendNode(variablesTable);
		}

		if (functionsTable.rows.length > 0) {
			output.appendNode(
				new DocExpressionHeading({
					configuration,
					expression: this._constructTranslation('api.section.functions', 'Functions'),
					level: 2
				})
			);
			output.appendNode(functionsTable);
		}

		if (interfacesTable.rows.length > 0) {
			output.appendNode(
				new DocExpressionHeading({
					configuration,
					expression: this._constructTranslation('api.section.interfaces', 'Interfaces'),
					level: 2
				})
			);
			output.appendNode(interfacesTable);
		}

		if (typeAliasesTable.rows.length > 0) {
			output.appendNode(
				new DocExpressionHeading({
					configuration,
					expression: this._constructTranslation('api.section.typeAliases', 'Type Aliases'),
					level: 2
				})
			);
			output.appendNode(typeAliasesTable);
		}
	}

	/**
	 * GENERATE PAGE: CLASS
	 */
	private _writeClassTables(output: DocSection, apiClass: ApiClass): void {
		const configuration: TSDocConfiguration = this._tsdocConfiguration;

		const eventsTable: DocTable = new DocTable({
			configuration,
			headerCells: [
				this._createLocalizedTableCell('api.block.property', 'Property'),
				this._createLocalizedTableCell('api.block.modifiers', 'Modifiers'),
				this._createLocalizedTableCell('api.block.type', 'Type'),
				this._createLocalizedTableCell('api.block.description', 'Description')
			]
		});

		const constructorsTable: DocTable = new DocTable({
			configuration,
			headerCells: [
				this._createLocalizedTableCell('api.block.constructor', 'Constructor'),
				this._createLocalizedTableCell('api.block.modifiers', 'Modifiers'),
				this._createLocalizedTableCell('api.block.description', 'Description')
			]
		});

		const propertiesTable: DocTable = new DocTable({
			configuration,
			headerCells: [
				this._createLocalizedTableCell('api.block.property', 'Property'),
				this._createLocalizedTableCell('api.block.modifiers', 'Modifiers'),
				this._createLocalizedTableCell('api.block.type', 'Type'),
				this._createLocalizedTableCell('api.block.description', 'Description')
			]
		});

		const methodsTable: DocTable = new DocTable({
			configuration,
			headerCells: [
				this._createLocalizedTableCell('api.block.method', 'Method'),
				this._createLocalizedTableCell('api.block.modifiers', 'Modifiers'),
				this._createLocalizedTableCell('api.block.description', 'Description')
			]
		});

		for (const apiMember of apiClass.members) {
			switch (apiMember.kind) {
				case ApiItemKind.Constructor: {
					constructorsTable.addRow(
						new DocTableRow({ configuration }, [
							this._createTitleCell(apiMember),
							this._createModifiersCell(apiMember),
							this._createDescriptionCell(apiMember)
						])
					);

					this._writeApiItemPage(apiMember);
					break;
				}
				case ApiItemKind.Method: {
					methodsTable.addRow(
						new DocTableRow({ configuration }, [
							this._createTitleCell(apiMember),
							this._createModifiersCell(apiMember),
							this._createDescriptionCell(apiMember)
						])
					);

					this._writeApiItemPage(apiMember);
					break;
				}
				case ApiItemKind.Property: {
					if ((apiMember as ApiPropertyItem).isEventProperty) {
						eventsTable.addRow(
							new DocTableRow({ configuration }, [
								this._createTitleCell(apiMember),
								this._createModifiersCell(apiMember),
								this._createPropertyTypeCell(apiMember),
								this._createDescriptionCell(apiMember)
							])
						);
					} else {
						propertiesTable.addRow(
							new DocTableRow({ configuration }, [
								this._createTitleCell(apiMember),
								this._createModifiersCell(apiMember),
								this._createPropertyTypeCell(apiMember),
								this._createDescriptionCell(apiMember)
							])
						);
					}

					this._writeApiItemPage(apiMember);
					break;
				}
			}
		}

		if (eventsTable.rows.length > 0) {
			output.appendNode(
				new DocExpressionHeading({
					configuration,
					expression: this._constructTranslation('api.section.events', 'Events'),
					level: 2
				})
			);
			output.appendNode(eventsTable);
		}

		if (constructorsTable.rows.length > 0) {
			output.appendNode(
				new DocExpressionHeading({
					configuration,
					expression: this._constructTranslation('api.section.constructors', 'Constructors'),
					level: 2
				})
			);
			output.appendNode(constructorsTable);
		}

		if (propertiesTable.rows.length > 0) {
			output.appendNode(
				new DocExpressionHeading({
					configuration,
					expression: this._constructTranslation('api.section.properties', 'Properties'),
					level: 2
				})
			);
			output.appendNode(propertiesTable);
		}

		if (methodsTable.rows.length > 0) {
			output.appendNode(
				new DocExpressionHeading({
					configuration,
					expression: this._constructTranslation('api.section.methods', 'Methods'),
					level: 2
				})
			);
			output.appendNode(methodsTable);
		}
	}

	/**
	 * GENERATE PAGE: ENUM
	 */
	private _writeEnumTables(output: DocSection, apiEnum: ApiEnum): void {
		const configuration: TSDocConfiguration = this._tsdocConfiguration;

		const enumMembersTable: DocTable = new DocTable({
			configuration,
			headerCells: [
				this._createLocalizedTableCell('api.block.member', 'Member'),
				this._createLocalizedTableCell('api.block.value', 'Value'),
				this._createLocalizedTableCell('api.block.description', 'Description')
			]
		});

		for (const apiEnumMember of apiEnum.members) {
			enumMembersTable.addRow(
				new DocTableRow({ configuration }, [
					new DocTableCell({ configuration }, [
						new DocParagraph({ configuration }, [
							new DocPlainText({
								configuration,
								text: Utilities.getConciseSignature(apiEnumMember)
							})
						])
					]),
					this._createInitializerCell(apiEnumMember),
					this._createDescriptionCell(apiEnumMember)
				])
			);
		}

		if (enumMembersTable.rows.length > 0) {
			output.appendNode(
				new DocExpressionHeading({
					configuration,
					expression: this._constructTranslation('api.section.enumerationMembers', 'Enumeration Members'),
					level: 2
				})
			);
			output.appendNode(enumMembersTable);
		}
	}

	/**
	 * GENERATE PAGE: INTERFACE
	 */
	private _writeInterfaceTables(
		output: DocSection,
		apiClass: ApiInterface
	): void {
		const configuration: TSDocConfiguration = this._tsdocConfiguration;

		const eventsTable: DocTable = new DocTable({
			configuration,
			headerCells: [
				this._createLocalizedTableCell('api.block.property', 'Property'),
				this._createLocalizedTableCell('api.block.modifiers', 'Modifiers'),
				this._createLocalizedTableCell('api.block.type', 'Type'),
				this._createLocalizedTableCell('api.block.description', 'Description')
			]
		});

		const propertiesTable: DocTable = new DocTable({
			configuration,
			headerCells: [
				this._createLocalizedTableCell('api.block.property', 'Property'),
				this._createLocalizedTableCell('api.block.modifiers', 'Modifiers'),
				this._createLocalizedTableCell('api.block.type', 'Type'),
				this._createLocalizedTableCell('api.block.description', 'Description')
			]
		});

		const methodsTable: DocTable = new DocTable({
			configuration,
			headerCells: [
				this._createLocalizedTableCell('api.block.method', 'Method'),
				this._createLocalizedTableCell('api.block.description', 'Description')
			]
		});

		for (const apiMember of apiClass.members) {
			switch (apiMember.kind) {
				case ApiItemKind.ConstructSignature:
				case ApiItemKind.MethodSignature: {
					methodsTable.addRow(
						new DocTableRow({ configuration }, [
							this._createTitleCell(apiMember),
							this._createDescriptionCell(apiMember)
						])
					);

					this._writeApiItemPage(apiMember);
					break;
				}
				case ApiItemKind.PropertySignature: {
					if ((apiMember as ApiPropertyItem).isEventProperty) {
						eventsTable.addRow(
							new DocTableRow({ configuration }, [
								this._createTitleCell(apiMember),
								this._createModifiersCell(apiMember),
								this._createPropertyTypeCell(apiMember),
								this._createDescriptionCell(apiMember)
							])
						);
					} else {
						propertiesTable.addRow(
							new DocTableRow({ configuration }, [
								this._createTitleCell(apiMember),
								this._createModifiersCell(apiMember),
								this._createPropertyTypeCell(apiMember),
								this._createDescriptionCell(apiMember)
							])
						);
					}

					this._writeApiItemPage(apiMember);
					break;
				}
			}
		}

		if (eventsTable.rows.length > 0) {
			output.appendNode(
				new DocExpressionHeading({
					configuration,
					expression: this._constructTranslation('api.section.events', 'Events'),
					level: 2
				})
			);
			output.appendNode(eventsTable);
		}

		if (propertiesTable.rows.length > 0) {
			output.appendNode(
				new DocExpressionHeading({
					configuration,
					expression: this._constructTranslation('api.section.properties', 'Properties'),
					level: 2
				})
			);
			output.appendNode(propertiesTable);
		}

		if (methodsTable.rows.length > 0) {
			output.appendNode(
				new DocExpressionHeading({
					configuration,
					expression: this._constructTranslation('api.section.methods', 'Methods'),
					level: 2
				})
			);
			output.appendNode(methodsTable);
		}
	}

	/**
	 * GENERATE PAGE: FUNCTION-LIKE
	 */
	private _writeParameterTables(
		output: DocSection,
		apiParameterListMixin: ApiParameterListMixin
	): void {
		const configuration: TSDocConfiguration = this._tsdocConfiguration;

		const parametersTable: DocTable = new DocTable({
			configuration,
			headerCells: [
				this._createLocalizedTableCell('api.block.parameter', 'Parameter'),
				this._createLocalizedTableCell('api.block.type', 'Type'),
				this._createLocalizedTableCell('api.block.description', 'Description')
			]
		});
		for (const apiParameter of apiParameterListMixin.parameters) {
			const parameterDescription: DocSection = new DocSection({ configuration });

			if (apiParameter.isOptional) {
				parameterDescription.appendNodesInParagraph([
					new DocEmphasisSpan({ configuration, italic: true }, [
						this._constructTranslation('api.block.optional', '(Optional)')
					]),
					new DocPlainText({ configuration, text: ' ' })
				]);
			}

			if (apiParameter.tsdocParamBlock) {
				this._appendAndMergeSection(
					parameterDescription,
					apiParameter.tsdocParamBlock.content
				);
			}

			const paragraphExcerpt = new DocParagraph({ configuration });
			this._appendExcerptByType(apiParameter.parameterTypeExcerpt, paragraphExcerpt);

			parametersTable.addRow(
				new DocTableRow({ configuration }, [
					new DocTableCell({ configuration }, [
						new DocParagraph({ configuration }, [
							new DocPlainText({ configuration, text: apiParameter.name })
						])
					]),
					new DocTableCell({ configuration }, [
						paragraphExcerpt
					]),
					new DocTableCell({ configuration }, parameterDescription.nodes)
				])
			);
		}

		if (parametersTable.rows.length > 0) {
			output.appendNode(
				new DocExpressionHeading({
					configuration: this._tsdocConfiguration,
					expression: this._constructTranslation('api.section.parameters', 'Parameters'),
					level: 2
				})
			);
			output.appendNode(parametersTable);
		}

		if (ApiReturnTypeMixin.isBaseClassOf(apiParameterListMixin)) {
			const returnTypeParagraph = new DocParagraph({ configuration }, [
				new DocEmphasisSpan({ configuration, bold: true }, [
					this._constructTranslation('api.descriptor.returns', 'Returns: ')
				])
			]);
			this._appendExcerptByType(apiParameterListMixin.returnTypeExcerpt, returnTypeParagraph);
			output.appendNode(returnTypeParagraph);

			if (apiParameterListMixin instanceof ApiDocumentedItem) {
				if (
					apiParameterListMixin.tsdocComment &&
					apiParameterListMixin.tsdocComment.returnsBlock
				) {
					this._appendSection(
						output,
						apiParameterListMixin.tsdocComment.returnsBlock.content
					);
				}
			}
		}
	}

	private _constructTranslation(id: string, message: string, values: { [key: string]: string } = {}) {
		const containsValues = Object.keys(values).length > 0;
		return new DocExpression({
			configuration: this._tsdocConfiguration,
			expression: `<Translate id=${ JSON.stringify(id) }${
				containsValues ? ` values={${ JSON.stringify(values) }}` : ''
			}>${
				containsValues ? `{${ JSON.stringify(message) }}` : message
			}</Translate>`
		});
	}

	private _createLocalizedTableCell(id: string, message: string, values: { [key: string]: string } = {}) {
		const cell = new DocTableCell({ configuration: this._tsdocConfiguration });
		cell.content.appendNodeInParagraph(this._constructTranslation(id, message, values));
		return cell;
	}

	private _appendExcerptByType(excerpt: Excerpt, paragraph: DocParagraph) {
		if (!excerpt.text.trim()) {
			paragraph.appendNode(
				this._constructTranslation('api.block.excerptNotFound', '(not declared)')
			);
		} else {
			this._appendExcerptWithHyperlinks(paragraph, excerpt);
		}
	}

	private _appendExcerptWithHyperlinks(
		docNodeContainer: DocNodeContainer,
		excerpt: Excerpt
	): void {
		for (const token of excerpt.spannedTokens) {
			this._appendExcerptTokenWithHyperlinks(docNodeContainer, token);
		}
	}

	private _appendExcerptTokenWithHyperlinks(
		docNodeContainer: DocNodeContainer,
		token: ExcerptToken
	): void {
		const configuration: TSDocConfiguration = this._tsdocConfiguration;

		// Markdown doesn't provide a standardized syntax for hyperlinks inside code
		// spans, so we will render the type expression as DocPlainText.  Instead of
		// creating multiple DocParagraphs, we can simply discard any newlines and
		// let the renderer do normal word-wrapping.
		const unwrappedTokenText: string = token.text.replace(/[\r\n]+/g, ' ');

		// If it's hyperlinkable, then append a DocLinkTag
		if (token.kind === ExcerptTokenKind.Reference && token.canonicalReference) {
			const apiItemResult: IResolveDeclarationReferenceResult =
				this._apiModel.resolveDeclarationReference(
					token.canonicalReference,
					undefined
				);

			if (apiItemResult.resolvedApiItem) {
				docNodeContainer.appendNode(
					new DocLinkTag({
						configuration,
						tagName: '@link',
						linkText: unwrappedTokenText,
						urlDestination: this._getSlugForApiItem(
							apiItemResult.resolvedApiItem
						)
					})
				);
				return;
			}
		}

		// Otherwise append non-hyperlinked text
		docNodeContainer.appendNode(
			new DocPlainText({ configuration, text: unwrappedTokenText })
		);
	}

	private _createTitleCell(apiItem: ApiItem): DocTableCell {
		const configuration: TSDocConfiguration = this._tsdocConfiguration;

		let linkText: string = Utilities.getConciseSignature(apiItem);
		if (ApiOptionalMixin.isBaseClassOf(apiItem) && apiItem.isOptional) {
			linkText += '?';
		}

		return new DocTableCell({ configuration }, [
			new DocParagraph({ configuration }, [
				new DocLinkTag({
					configuration,
					tagName: '@link',
					linkText: linkText,
					urlDestination: this._getSlugForApiItem(apiItem)
				})
			]),
		]);
	}

	/**
	 * This generates a DocTableCell for an ApiItem including the summary section
	 * and unstable "!!!" annotation.
	 *
	 * @remarks
	 * We mostly assume that the input is an ApiDocumentedItem, but it's easier to
	 * perform this as a runtime check than to have each caller perform a type
	 * cast.
	 */
	private _createDescriptionCell(apiItem: ApiItem): DocTableCell {
		const configuration: TSDocConfiguration = this._tsdocConfiguration;

		const section: DocSection = new DocSection({ configuration });

		if (ApiReleaseTagMixin.isBaseClassOf(apiItem)) {
			if (apiItem.releaseTag !== ReleaseTag.Public) {
				section.appendNodesInParagraph([
					new DocEmphasisSpan({ configuration, bold: true, italic: true }, [
						new DocPlainText({ configuration, text: '!!!' })
					]),
					new DocPlainText({ configuration, text: ' ' })
				]);
			}
		}

		if (ApiOptionalMixin.isBaseClassOf(apiItem) && apiItem.isOptional) {
			section.appendNodesInParagraph([
				new DocEmphasisSpan({ configuration, italic: true }, [
					this._constructTranslation('api.block.optional', '(Optional)')
				]),
				new DocPlainText({ configuration, text: ' ' })
			]);
		}

		if (apiItem instanceof ApiDocumentedItem) {
			if (apiItem.tsdocComment !== undefined) {
				this._appendAndMergeSection(
					section,
					apiItem.tsdocComment.summarySection
				);
			}
		}

		return new DocTableCell({ configuration }, section.nodes);
	}

	private _createModifiersCell(apiItem: ApiItem): DocTableCell {
		const configuration: TSDocConfiguration = this._tsdocConfiguration;

		const section: DocSection = new DocSection({ configuration });

		if (ApiProtectedMixin.isBaseClassOf(apiItem)) {
			if (apiItem.isProtected) {
				section.appendNode(
					new DocParagraph({ configuration }, [
						new DocCodeSpan({ configuration, code: 'protected' })
					])
				);
			}
		}

		if (ApiReadonlyMixin.isBaseClassOf(apiItem)) {
			if (apiItem.isReadonly) {
				section.appendNode(
					new DocParagraph({ configuration }, [
						new DocCodeSpan({ configuration, code: 'readonly' })
					])
				);
			}
		}

		if (ApiStaticMixin.isBaseClassOf(apiItem)) {
			if (apiItem.isStatic) {
				section.appendNode(
					new DocParagraph({ configuration }, [
						new DocCodeSpan({ configuration, code: 'static' })
					])
				);
			}
		}

		return new DocTableCell({ configuration }, section.nodes);
	}

	private _createPropertyTypeCell(apiItem: ApiItem): DocTableCell {
		const configuration: TSDocConfiguration = this._tsdocConfiguration;

		const section: DocSection = new DocSection({ configuration });

		if (apiItem instanceof ApiPropertyItem) {
			const paragraph = new DocParagraph({ configuration });
			this._appendExcerptByType(apiItem.propertyTypeExcerpt, paragraph);
			section.appendNode(paragraph);
		}

		return new DocTableCell({ configuration }, section.nodes);
	}

	private _createInitializerCell(apiItem: ApiItem): DocTableCell {
		const configuration: TSDocConfiguration = this._tsdocConfiguration;

		const section: DocSection = new DocSection({ configuration });

		if (ApiInitializerMixin.isBaseClassOf(apiItem)) {
			if (apiItem.initializerExcerpt) {
				section.appendNodeInParagraph(
					new DocCodeSpan({
						configuration,
						code: apiItem.initializerExcerpt.text
					})
				);
			}
		}

		return new DocTableCell({ configuration }, section.nodes);
	}

	private _writeBetaWarning(output: DocSection): void {
		output.appendNode(
			new DocCautionAdmonition({
				configuration: this._tsdocConfiguration,
				title: this._constructTranslation('api.nearlyFeature.title', 'Nearly Feature')
			}, [
				new DocParagraph({ configuration: this._tsdocConfiguration }, [
					this._constructTranslation(
						'api.nearlyFeature.message',
						'This API is provided as a preview for developers and may change based on feedback that we receive.'
					)
				])
			])
		);
	}

	private _appendSection(output: DocSection, docSection: DocSection): void {
		for (const node of docSection.nodes) {
			output.appendNode(node);
		}
	}

	private _appendAndMergeSection(
		output: DocSection,
		docSection: DocSection
	): void {
		let firstNode = true;
		for (const node of docSection.nodes) {
			if (firstNode) {
				if (node.kind === DocNodeKind.Paragraph) {
					output.appendNodesInParagraph(node.getChildNodes());
					firstNode = false;
					continue;
				}
			}
			firstNode = false;

			output.appendNode(node);
		}
	}

	private _getSidebarLabelForApiItem(apiItem: ApiItem): string {
		if (apiItem.kind === ApiItemKind.Package) {
			return 'API';
		}

		let baseName = '';
		for (const hierarchyItem of apiItem.getHierarchy()) {
			switch (hierarchyItem.kind) {
				case ApiItemKind.Model:
				case ApiItemKind.EntryPoint:
				case ApiItemKind.EnumMember:
				case ApiItemKind.Package:
					break;
				default:
					baseName = hierarchyItem.displayName;
			}
		}
		return baseName;
	}

	private _getSchemeForApiItem(apiItem: ApiItem): string {
		if (apiItem.kind === ApiItemKind.Package) {
			return 'index';
		}

		let selfKind = ApiItemKind.None;
		let baseName = '';
		for (const hierarchyItem of apiItem.getHierarchy()) {
			let qualifiedName: string = getSafeFilename(
				hierarchyItem.displayName
			);

			switch (hierarchyItem.kind) {
				case ApiItemKind.Model:
				case ApiItemKind.EntryPoint:
				case ApiItemKind.EnumMember:
				case ApiItemKind.Package:
					break;
				default:
					baseName += qualifiedName + '/';
					selfKind = hierarchyItem.kind;
			}
		}
		baseName = baseName.slice(0, baseName.length - 1);

		switch (selfKind) {
			case ApiItemKind.Class:
			case ApiItemKind.Enum:
			case ApiItemKind.Interface:
			case ApiItemKind.Namespace:
				baseName += '/index';
		}
		return this._preserveFilenameDuplication(baseName);
	}

	/**
	 * Preserves insensitive systems build failing, recursive
	 * prefixes existing files with "_" in lowercase.
	 * 
	 * @remarks
	 * If file with that scheme already exists, checks if
	 * it referred in same casing, otherwise marks self.
	 * E.g. existing "path/to/File" with query "path/to/file"
	 * replaces it to "path/to/_file" and also another casings.
	 */
	private _preserveFilenameDuplication(scheme: string) {
		let slash = scheme.lastIndexOf('/');
		let basename = scheme.substring(slash + 1);
		let directory = slash > 0
			? path.join(this._outputFolder, scheme.substring(0, slash))
			: this._outputFolder;

		if (fs.existsSync(directory)) {
			let regex = new RegExp(`^${ basename }(.mdx?)?$`, 'i');
			let insensitiveCasing = fs.readdirSync(directory)
				.filter(value => regex.test(value));

			insensitiveCasing.length < 2 && (
				insensitiveCasing.length == 0 || new RegExp(`^${ basename }(.mdx?)?$`).test(insensitiveCasing[0])
			) || (basename = `_${ basename.toLowerCase() }`);
		}

		return slash > 0 ? `${
			this._preserveFilenameDuplication(scheme.substring(0, slash))
		}/${ basename }` : basename;
	}

	private _getSlugForApiItem(apiItem: ApiItem): string {
		return this._routeBasePath + this._getSchemeForApiItem(apiItem).replace(/(\/index|^index)$/i, '');
	}
}
