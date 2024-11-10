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
// @ts-check

const prismRenderer = require('prism-react-renderer');
const logger = require('@docusaurus/logger');

const baseUrl = process.env.BASE_URL ?? '/';

const config = /** @type {import('@docusaurus/types').Config} */ ({
	title: 'Inner Core Docs',
	tagline: 'Inner Core, Core Engine and Horizon documentation',
	url: 'https://nernar.github.io',
	baseUrl,
	onBrokenLinks: 'warn',
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
			'@docusaurus/preset-classic',
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
			'@docusaurus/plugin-content-docs',
			/** @type {import('@docusaurus/plugin-content-docs').Options} */
			({
				id: 'libraries',
				path: 'libraries',
				routeBasePath: 'libraries',
				sidebarPath: require.resolve('./libraries.js'),
				breadcrumbs: false,
				editLocalizedFiles: true,
				editUrl: 'https://github.com/nernar/nernar.github.io/tree/master/',
				showLastUpdateTime: true
			})
		]
	],

	themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
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
			defaultMode: 'dark'
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
			theme: prismRenderer.themes.vsLight,
			darkTheme: prismRenderer.themes.vsDark,
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

const themeConfig = 
	/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
	(config.themeConfig);
if (themeConfig.navbar && themeConfig.navbar.items) {
	const partial = themeConfig.navbar.items.shift();
	themeConfig.navbar.items.unshift({
		position: 'left',
		href: `${config.url}/api/index.html`,
		label: 'API'
	});
	if (partial) {
		themeConfig.navbar.items.unshift(partial);
	}
} else {
	logger.default.error('Unexpected `config.themeConfig.navbar?.items` is undefined!');
}

module.exports = config;
