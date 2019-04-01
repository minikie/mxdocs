// docs/.vuepress/config.js
module.exports = {
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/katex@0.6.0/dist/katex.min.css"
      }
    ]
  ],
  // title: "Xenarix",
  // description: "Economic Scenario Generator",
  host: "localhost",
  langs: [
    { lang: 'en', label: 'English', path: '/', selectText: 'Languages' },
    { lang: 'zh-CN', label: '简体中文', path: '/en/', selectText: '选择语言' }
  ],
  title: {
    '/': 'VuePress',
    '/en/': '中文 title'
  },
  description: {
    '/': 'English description',
    '/en/': '中文 description'
  },
  themeConfig: {
    locales: {
      "/": {
        nav: [
          { text: "Home", link: "/" },
          { text: "Xenarix", link: "/xenarix/1_intro" },
          { text: "About", link: "/about/" },
          {
            text: "Languages",
            items: [
              { text: "한글", link: "/xenarix/1_intro" },
              { text: "English", link: "/en/xenarix/1_intro" }
            ]
          },
          { text: "GitHub", link: "https://github.com/minikie/xenarix" }
        ],
        sidebar: {
          "/xenarix/": [
            "1_intro",
            "2_general", //['2_general','general'],
            "3_variable",
            "4_model",
            "5_shock",
            "6_result",
            "7_examples"
          ]
        }
      },
      "/en": {
        nav: [
          { text: "Home", link: "/" },
          { text: "Xenarix", link: "/xenarix/1_intro" },
          { text: "About", link: "/about/" },
          {
            text: "Languages",
            items: [
              { text: "한글", link: "/xenarix/1_intro" },
              { text: "English", link: "/en/xenarix/1_intro" }
            ]
          },
          { text: "GitHub", link: "https://github.com/minikie/xenarix" }
        ],
        sidebar: {
          "/en/xenarix/": [
            "1_intro",
            "2_general", //['2_general','general'],
            "3_variable",
            "4_model",
            "5_shock",
            "6_result",
            "7_examples"
          ]
        }
      }
    }
  },
  markdown: {
    config: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};
