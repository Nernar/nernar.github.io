// @ts-check
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

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

const baseUrl = process.env.BASE_URL ?? '/';

module.exports =
	/** @type {import('@docusaurus/types').Config} */
	({
		title: 'Inner Core Docs',
		tagline: 'Inner Core, Core Engine and Horizon documentation',
		url: 'https://nernar.github.io',
		baseUrl,
		onBrokenLinks: 'throw',
		onBrokenMarkdownLinks: 'warn',
		favicon: 'favicon/favicon.ico',

		markdown: {
			mermaid: true
		},
		themes: ['@docusaurus/theme-mermaid'],
		staticDirectories: ['static', 'api/declarations'],

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
				'classic',
				/** @type {import('@docusaurus/preset-classic').Options} */
				({
					docs: {
						sidebarPath: require.resolve('./sidebars.js'),
						breadcrumbs: false,
						editLocalizedFiles: true,
						editUrl: 'https://github.com/nernar/nernar.github.io/tree/master/',
						showLastUpdateTime: true
					},
					blog: false,
					theme: {
						customCss: require.resolve('./src/css/custom.css')
					}
				})
			]
		],

		plugins: [
			[
				'content-docs',
				/** @type {import('@docusaurus/plugin-content-docs').Options} */
				({
					id: 'api',
					path: 'api/www',
					routeBasePath: 'api',
					numberPrefixParser: false,
					exclude: [],
					sidebarItemsGenerator: function(generatorArgs) {
						return generatorArgs.defaultSidebarItemsGenerator({
							...generatorArgs,
							docs: generatorArgs.docs.filter(function(value) {
								// By some reason, global replacement doesn't working
								// value.frontMatter = {
									// ...value.frontMatter
								// };
								// It implemented internally in documenter
								value.title = value.title.replace(/\\?\\_/g, '_');
								return !(value.sourceDirName == '.' && value.unversionedId == 'index');
							})
						});
					}
				})
			]
		],

		themeConfig:
			/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
			({
				metadata: [
					{
						name: 'keywords',
						content: 'nernar, minecraft, modding tools, dev editor, innercore, horizon, coreengine'
					}
				],
				colorMode: {
					defaultMode: 'dark'
				},
				navbar: {
					title: 'Inner Core Docs',
					hideOnScroll: true,
					logo: {
						alt: '',
						src: 'copyright/horizon.svg'
					},
					items: [
						{
							position: 'left',
							to: 'docs',
							label: 'Docs'
						},
						{
							position: 'left',
							to: 'api',
							label: 'API'
						},
						{
							position: 'left',
							to: 'examples',
							label: 'Examples'
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
					theme: lightCodeTheme,
					darkTheme: darkCodeTheme,
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
			})
	});
