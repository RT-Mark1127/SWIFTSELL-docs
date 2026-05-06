// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SWIFTSELL Documentation',
  tagline: 'Configure, price, and quote with confidence.',
  favicon: 'img/favicon.ico',

  url: 'https://docs.swiftsell.com',
  baseUrl: '/',

  organizationName: 'SWIFTSELL',
  projectName: 'SwiftSell-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        style: 'dark',
        // title: "SWIFTSELL Documentation",
        logo: {
          alt: 'SWIFTSELL Logo',
          src: 'img/swiftsell-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'userGuideSidebar',
            position: 'left',
            label: 'User Guide',
          },
          {
            type: 'docSidebar',
            sidebarId: 'adminGuideSidebar',
            position: 'left',
            label: 'Admin Guide',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'User Guide',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started/logging-in',
              },
              {
                label: 'Product Catalog',
                to: '/docs/user-guide/product-catalog',
              },
              { label: 'Quotes', to: '/docs/user-guide/quotes/overview' },
              { label: 'Orders', to: '/docs/user-guide/orders' },
            ],
          },
          {
            title: 'Admin Guide',
            items: [
              { label: 'Overview', to: '/docs/admin-guide/overview' },
              {
                label: 'Users & Roles',
                to: '/docs/admin-guide/users-and-roles/users',
              },
              { label: 'Platforms', to: '/docs/admin-guide/platforms' },
              { label: 'Products', to: '/docs/admin-guide/products/' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RenaissanceTech. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
