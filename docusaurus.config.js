// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/nightOwlLight");
const darkCodeTheme = require("prism-react-renderer/themes/nightOwl");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ysfaran's blog",
  tagline: "My humble blog",
  url: "https://ysfaran.github.io/",
  baseUrl: "/blog/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "ysfaran", // Usually your GitHub org/user name.
  projectName: "blog", // Usually your repo name.
  scripts: [
    {
      src: "https://cdn.jsdelivr.net/gh/lepture/github-cards@latest/jsdelivr/widget.js",
      async: true,
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          path: "./blog",
          routeBasePath: "/",
          showReadingTime: true,
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "ysfaran's Blog",
        logo: {
          alt: "ysfaran logo",
          src: "img/logo.png",
        },
        items: [
          {
            href: "https://github.com/ysfaran/blog",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Top Projects",
            items: [
              {
                label: "react-fluent-form",
                href: "https://www.react-fluent-form.com/",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/ysfaran",
              },
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/users/6489012/ysfaran",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/ysfaran15",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ysfaran's Blog, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
