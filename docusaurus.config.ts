/*

    Inner Core Docs: Inner Core, Core Engine and Horizon documentation
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
import { themes as prismThemes } from 'prism-react-renderer';
import { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as Docs from '@docusaurus/plugin-content-docs';
// import type * as Typedoc from './api/docusaurus-plugin';

import { readdirSync } from 'fs';
import path from 'path';

const baseUrl = process.env.BASE_URL ?? '/';
const configUrl = 'https://nernar.github.io';

export default {
	title: 'Inner Core Docs',
	tagline: 'Inner Core, Core Engine and Horizon documentation',
	url: configUrl,
	baseUrl,
	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'favicon/favicon.ico',

	markdown: {
		mermaid: true
	},
	themes: ['@docusaurus/theme-mermaid'],
	staticDirectories: ['static'],

	organizationName: 'nernar',
	projectName: 'nernar.github.io',
	deploymentBranch: 'deploy',
	trailingSlash: false,

	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'ru']
	},

	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.ts'),
					breadcrumbs: false,
					editLocalizedFiles: true,
					editUrl: 'https://github.com/nernar/nernar.github.io/tree/master/',
					showLastUpdateTime: true
				},
				blog: false,
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				}
			} satisfies Preset.Options
		]
	],

	plugins: [
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'libraries',
				path: 'libraries',
				routeBasePath: 'libraries',
				sidebarPath: require.resolve('./libraries.ts'),
				breadcrumbs: false,
				editLocalizedFiles: true,
				editUrl: 'https://github.com/nernar/nernar.github.io/tree/master/',
				showLastUpdateTime: true
			} satisfies Docs.Options
		],
		[
			'@nernar/docusaurus-plugin-typedoc',
			{
				projectRoot: 'api',
				packageJsonName: 'typedoc.json',
				sortPackages: (left, right) =>
					left.packageName == 'Core Engine' ? -1 : right.packageName == 'Core Engine' ? 1 : 0,
				packages: [
					{
						path: 'core-engine',
						entry: 'core-engine/**/*',
						slug: '.'
					},
					...readdirSync(path.resolve('./api/libraries')).map(path => {
						return {
							path: 'libraries/' + path,
							entry: 'libraries/' + path,
							slug: path.replace('.d.ts', '')
						};
					})
				],
				typedocOptions: {
					entryPoints: [
						'core-engine/**/*.d.ts',
						'libraries/**/*.d.ts'
					],
					readme: 'none',
					intentionallyNotExported: [
						'native.Array'
					],
					excludeExternals: false,
					excludeInternal: false,
					excludePrivate: false,
					excludeProtected: false,
					visibilityFilters: {
						'inherited': true,
						'protected': true,
						'@internal': false,
						'@deprecated': true
					}
					// plugin: [
						// 'typedoc-plugin-merge-modules'
						// TODO: Settings like in @mxssfd/typedoc-theme.
						// TODO: Internals like in @gobstones/typedoc-theme-gobstones.
						// TODO: Page groups like in typedoc-github-theme.
					// ]
				}
			} // satisfies Typedoc.Options
		]
	],

	themeConfig: {
		metadata: [
			{
				name: 'keywords',
				content: 'nernar, minecraft, modding tools, dev editor, innercore, horizon, coreengine'
			}
		],
		announcementBar: {
			content: 'A huge number of articles, APIs and other things were <a target="_blank" rel="noopener noreferrer" href="https://vk.com/wall-148880110_346">irretrievably lost</a>.',
			backgroundColor: '#cc4444',
			textColor: '#ffffff',
			isCloseable: false
		},
		colorMode: {
			respectPrefersColorScheme: true
		},
		navbar: {
			title: 'Inner Core Docs',
			hideOnScroll: true,
			logo: {
				alt: '',
				src: 'copyright/innercore.svg'
			},
			items: [
				{
					position: 'left',
					to: 'docs',
					label: 'Docs'
				},
				{
					position: 'left',
					// href: `${configUrl}/api/index.html`,
					to: 'api',
					label: 'API'
				},
				{
					position: 'left',
					to: 'libraries',
					label: 'Libraries'
				},
				{
					position: 'left',
					to: 'changelog',
					label: 'Changelog'
				},
				{
					position: 'left',
					to: 'faq',
					label: 'FAQ'
				},
				{
					position: 'right',
					type: 'localeDropdown'
				},
				{
					position: 'right',
					className: 'header-github-link',
					href: 'https://github.com/nernar/nernar.github.io',
					'aria-label': 'GitHub repository'
				}
			]
		},
		footer: {
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Getting Started',
							to: '/docs/intro'
						},
						{
							label: 'Contributing',
							to: 'https://github.com/nernar/nernar.github.io/blob/master/README.md#contribution'
						}
					]
				},
				{
					title: 'Community',
					items: [
						{
							label: 'Telegram',
							href: 'https://t.me/ntInsideChat'
						},
						{
							label: 'VK',
							href: 'https://vk.com/nernar'
						},
						{
							label: 'Contact with us',
							href: 'mailto:nernar@gmail.com'
						}
					]
				},
				{
					title: 'More',
					items: [
						{
							label: 'GitHub',
							href: 'https://github.com/nernar'
						}
					]
				}
			],
			copyright: `Copyright © ${new Date().getFullYear()} Nernar. Built with \u2764 and Docusaurus.`
		},
		prism: {
			theme: prismThemes.vsLight,
			darkTheme: prismThemes.vsDark,
			additionalLanguages: ['c', 'java'],
			magicComments: [
				{
					className: 'theme-code-block-highlighted-line',
					line: 'highlight-next-line',
					block: { start: 'highlight-start', end: 'highlight-end' }
				},
				{
					className: 'code-block-malformed-line',
					line: 'highlight-malformed-next-line',
					block: { start: 'highlight-malformed-start', end: 'highlight-malformed-end' }
				},
				{
					className: 'code-block-well-line',
					line: 'highlight-well-next-line',
					block: { start: 'highlight-well-start', end: 'highlight-well-end' }
				}
			]
		}
	} satisfies Preset.ThemeConfig
} satisfies Config;
