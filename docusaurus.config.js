// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const baseUrl = process.env.BASE_URL ?? '/';

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'Inner Core Docs',
  tagline: 'Inner Core, Core Engine and Horizon documentation',
  url: 'https://nernar.github.io',
  baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

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

  // plugins: [[
    // 'docusaurus-plugin-typedoc',
    // Unstable declarations, it reserved just to change purposes
    // /** @type {import('docusaurus-plugin-typedoc/dist/types').PluginOptions} */
    // ({
      // entryPoints: ['declarations/core-engine/headers/core-engine.d.ts'],
      // tsconfig: 'declarations/api-tsconfig.json',
      // out: '../src/pages/api',
      // sidebar: {
        // categoryLabel: "API",
        // position: 2,
        // autoConfiguration: true
      // },
      // frontmatter: {
        // pagination_prev: null,
        // pagination_next: null
      // }
    // })
  // ]],

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
        defaultMode: "dark"
      },
      navbar: {
        title: 'Inner Core Docs',
        hideOnScroll: true,
        logo: {
          alt: '',
          src: 'img/logo.svg'
        },
        items: [
          {
            position: 'left',
            to: 'docs/',
            label: 'Docs'
          },
          // {
            // position: 'left',
            // to: 'api/',
            // label: 'API'
          // },
          {
            type: 'localeDropdown',
            position: 'right'
          },
          {
            href: 'https://github.com/nernar/nernar.github.io',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository'
          }
        ]
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true
        }
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/ntInsideChat'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/nernar/nernar.github.io',
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nernar. Built with Docusaurus.`
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
};
