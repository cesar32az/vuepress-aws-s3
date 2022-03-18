const { path } = require("@vuepress/utils");

module.exports = {
  // base suffix url
  //base: "/docs",

  // destination build dir
  dest: './dist',

  clientAppEnhanceFiles: path.resolve(__dirname, "./enhanceApp.js"),

  // Website info
  title: "Title",
  description: "Description",

  // headers
  head: [
    ["link", { rel: "icon", href: "/img/logo.png" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  // Configuration of theme
  themeConfig: {
    // header structure
    logo: "img/logo.png",
    sidebarDepth: 1,
    darkMode: true,
    searchPlaceholder: "Search...",

    // Github config
    repo: "",
    editLinks: false,
    editLinkText: "",
    lastUpdated: false,
    contributors: false,
    docsDir: "",

    backToHome: "Back to homepage",
    markdown: {
      lineNumbers: true,
    },

    // layout
    navbar: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Vuepress", link: "https://v2.vuepress.vuejs.org" },
      {text: "Styles", link: "https://v2.vuepress.vuejs.org/reference/default-theme/styles.html#palette-file"}
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          collapsable: false,
          children: ["README.md"],
        },
        {
          text: "Example",
          collapsable: false,
          children: ["example.md", "example2.md"],
        },
      ],
    },
  },

  // plugins for vuepress power!
  plugins: [
    "@vuepress/plugin-search",
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    "@vuepress/register-components",

    {
      componentsDir: path.resolve(__dirname, "./components"),
      maxSuggestions: 10,
      locales: {
        "/": {
          placeholder: "Search",
        },
      },
    },
  ],
};
