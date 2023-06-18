// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PHXVerse Docs',
  tagline: 'PHXVerse is a Crypto MetaVerse',
  favicon: 'img/phx200.png',

  // Set the production url of your site here
  url: 'https://docs.phxverse.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'phx-verse', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',  // throw
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
            'https://github.com/phx-verse/docs/tree/main/',
        },
        // blog: false,
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/phx-verse/docs/tree/main/',
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
      image: 'img/phx300.png',
      navbar: {
        title: 'PHXVerse',
        logo: {
          alt: 'PHXVerse',
          src: 'img/phx300.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Home',
          },
          {to: '/blog', label: 'Blog', position: 'right'},
          {
            href: 'https://github.com/phx-verse',
            // label: 'GitHub',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
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
                label: 'PHXPool V1',
                href: 'https://pospool.phxverse.com',
              },
              {
                label: 'PHXPool V2',
                href: 'https://app.phxverse.com',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/qCt85SsMFS',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/phxverse',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/phxverse01',
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
        copyright: `Copyright © ${new Date().getFullYear()} PHXVerse, Lab.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
