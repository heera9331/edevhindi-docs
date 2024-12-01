import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Edevhindi",
  tagline: "Bharat",
  favicon: "https://edevhindi.com/wp-content/uploads/2024/05/e-dev-hindi.png",

  // Set the production url of your site here
  url: "https://edevhindi.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "heera9331", // Usually your GitHub org/user name.
  projectName: "edevhindi-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "hi"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "https://edevhindi.com/wp-content/uploads/2024/05/e-dev-hindi.png",
    navbar: {
      title: "Edevhindi",
      logo: {
        width: "64px",
        height: "64px",
        className: "object-fit w-[64px] h-[64px]",
        alt: "Edevhindi Logo",
        src: "https://edevhindi.com/wp-content/uploads/2024/05/e-dev-hindi.png",
      },
      items: [
        { to: "/docs/intro", label: "Blogs", position: "left" },
        { to: "/", label: "Home", position: "left" },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
            {
              label: "ReactJS",
              to: "/docs/reactjs",
            },
            {
              label: "OOPs",
              to: "/docs/category/object-oriented-programming",
            },
            {
              label: "DBMS",
              to: "/docs/dbms",
            },
            {
              label: "C Programming",
              to: "#",
            },
            {
              label: "Java Programming",
              to: "#",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://github.com/heera9331/",
            },
            {
              label: "Linkedin",
              href: "https://www.linkedin.com/in/heera9331/",
            },
            {
              label: "RPGV Notes",
              href: "/rgpv-notes",
            },
          ],
        },
        {
          title: "Important Pages",
          items: [
            {
              label: "About us",
              to: "/about-us",
            },
            {
              label: "Contact us",
              to: "/contact-us",
            },
            {
              label: "Privacy Policy",
              to: "/privacy-policy",
            },
            {
              label: "Disclaimer",
              to: "/disclaimer",
            },
            {
              label: "Terms of service",
              to: "#",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Portfolio",
              to: "#",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Edevhindi - Desing & Developed by Heera Singh Lodhi`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  stylesheets: [
    {
      href: "/css/tailwind.css",
      type: "text/css",
    },
  ],

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
};

export default config;
