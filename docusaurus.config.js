// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Knot',
  tagline: 'Portable application description language',
  url: 'https://effervescentia.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'effervescentia', // Usually your GitHub org/user name.
  projectName: 'knot-docs', // Usually your repo name.
  deploymentBranch: 'docs',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'docusaurus-preset-shiki-twoslash',
      {
        themes: ["light-plus", "material-palenight"],
        langs: [
          {
            id: 'knot',
            scopeName: 'source.knot',
            path: path.join(__dirname, 'grammar/knot.tmLanguage.json'),
          },
          "tsx",
          "css"
        ]
      }
    ]
  ],
  
  plugins: [
    () => ({
      name: 'inject-custom-font',
      injectHtmlTags() {
        return {
          headTags: [
            { tagName: "link", attributes: { rel: "preconnect", href: "https://fonts.googleapis.com" } },
            { tagName: "link", attributes: { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true } },
            { tagName: "link", attributes: { rel: "preload", as: "font", href: "https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" } }
          ],
        };
      }
    })
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Knot',
        logo: {
          alt: 'Knot Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'overview',
            position: 'left',
            label: 'Reference',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/effervescentia/knot',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Syntax',
                to: '/docs/syntax',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/effervescentia',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Knot. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
