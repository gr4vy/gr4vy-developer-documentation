module.exports = {
  title: "Gr4vy Documentation",
  tagline: "Integrate Gr4vy, the cloud payment orchestration platform",
  url: "https://developer.gr4vy.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon.ico",
  organizationName: "gr4vy",
  projectName: "gr4vy-developer-documentation",
  themeConfig: {
    hideableSidebar: false,
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      // title: "Gr4vy",
      logo: {
        alt: "Gr4vy Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "guides/",
          activeBasePath: "guides",
          label: "Guides",
          position: "right",
        },
        {
          to: "reference",
          label: "API Reference",
          position: "right"
        },
        {
          to: "https://gr4vy.com",
          label: "Gr4vy.com",
          position: "right",
          className: "navbar__item__button"
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Quick Start (Web)",
              to: "/guides/web-checkout",
            },
            {
              label: "Guides",
              to: "/guides",
            },
            {
              label: "API Reference",
              to: "/reference",
            }
          ],
        },
        {
          title: "Code",
          items: [
            {
              label: "Gr4vy Embed",
              href: "https://www.npmjs.com/package/@gr4vy/embed",
            },
            {
              label: "Gr4vy Embed for React",
              href: "https://www.npmjs.com/package/@gr4vy/embed-react",
            },
            {
              label: "OpenAPI 3.0",
              href: "https://github.com/gr4vy/gr4vy-openapi",
            },
          ],
        },
        {
          title: "Elsewhere",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/gr4vy",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/gr4vypop",
            },
            {
              label: "NPM",
              href: "https://www.npmjs.com/org/gr4vy",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Gr4vy, Inc`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "guides",
          routeBasePath: "guides",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/gr4vy/gr4vy-developer-documentation/edit/main",
        },
        // blog: {
        //   showReadingTime: true,
        //   editUrl:
        //     "https://github.com/gr4vy/gr4vy-developer-documentation/edit/main/",
        // },
        theme: {
          colorMode: {
            disableSwitch: true,
          },
          customCss: require.resolve("./src/css/custom.css"),
        },
        stylesheets: [
          "https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,700",
          "/css/code-block-buttons.css"
        ],
      },
    ],
  ],
  plugins: [
    "docusaurus-plugin-sass",
    "webpack-buffer-polyfill",
    "tailwindcss-loader",
  ],
}
