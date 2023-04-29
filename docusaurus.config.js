// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PHXVERSE Documentation',
  tagline: 'PHXVERSE is a Crypto MetaVerse',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.phxverse.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'phx-verse', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          routeBasePath: '/',
          editUrl:
            'https://github.com/phx-verse/docs/tree/main/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/phx-verse/docs/tree/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/phxverse.jpeg',
      navbar: {
        title: 'PHXVERSE',
        logo: {
          alt: 'PHXVERSE',
          src: 'img/phxverse.jpeg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Home',
          },
        //   {to: '/blog', label: 'Blog', position: 'right'},
          {
            href: 'https://github.com/phx-verse',
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
                label: 'Docs',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              /* {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              }, */
              {
                label: 'Discord',
                href: 'https://discord.gg/qCt85SsMFS',
              },
              {
                label: 'Twitter',
                href: ' https://twitter.com/phxverse',
              },
            ],
          },
          {
            title: 'More',
            items: [
              /* {
                label: 'Blog',
                to: '/blog',
              }, */
              {
                label: 'GitHub',
                href: 'https://github.com/phx-verse',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PHXVERSE, Lab.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
