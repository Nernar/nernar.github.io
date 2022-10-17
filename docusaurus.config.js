// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

const baseUrl = process.env.BASE_URL ?? '/';

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'Inner Core Docs',
  tagline: 'Inner Core, Core Engine and Horizon documentation',
  url: 'https://nernar.github.io',
  baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon/favicon.ico',

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
        hideOnScroll: true,
        logo: {
          alt: '',
          src: 'images/horizon.svg'
        },
        items: [
          {
            position: 'left',
            to: 'docs/',
            label: 'Docs'
          },
          {
            position: 'left',
            to: 'api/',
            label: 'API'
          },
          {
            position: 'left',
            to: 'examples/',
            label: 'Examples'
          },
          {
            position: 'left',
            to: 'libraries/',
            label: 'Libraries'
          },
          {
            position: 'left',
            to: 'changelog',
            label: 'Changelog'
          },
          {
            position: 'left',
            to: 'faq/',
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
      docs: {
        sidebar: {
          autoCollapseCategories: true
        }
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
};
