// docs/.vuepress/config.js
module.exports = {
  head: [
    [ "link",{rel: "stylesheet",href: "https://cdn.jsdelivr.net/npm/katex@0.6.0/dist/katex.min.css"}],
    ['link', { rel: 'icon', href: '/xenarix-logo2-45.png' }]
  ],
  // title: "Xenarix",
  // description: "Economic Scenario Generator",
  host: "localhost",
  locales:{
    '/': {
      lang: '한글', // this will be set as the lang attribute on <html>
      title: 'Xenarix',
      description: '경제 시나리오 발생기'
    },
    '/en/': {
      lang: 'English',
      title: 'Xenarix',
      description: 'Economic Scenario Generator'
    }
  },
  themeConfig: {
    locales: {
      "/": {
        selectText: 'Languages',
        nav: [
          { text: "소개", link: "/intro/" },
          { text: "메뉴얼", link: "/xenarix/1_quickstart" },
          { text: "라이센스", link: "/license/" },
          { text: "GitHub", link: "https://github.com/minikie/xenarix" }
        ],
        sidebar: {
          "/xenarix/": [
            "1_quickstart",
            "2_general", //['2_general','general'],
            "3_variable",
            "4_model",
            "5_shock",
            "6_result",
            "7_examples"
          ]
        }
      },
      "/en/": {
        selectText: 'Languages',
        nav: [
          { text: "Intro", link: "/en/intro/" },
          { text: "Menual", link: "/en/xenarix/1_quickstart" },
          { text: "License", link: "/en/license/" },
          { text: "GitHub", link: "https://github.com/minikie/xenarix" }
        ],
        sidebar: {
          "/en/xenarix/": [
            "1_quickstart",
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
  plugins: [
    ['mathjax', {
      target: 'svg',
      macros: {
        '*': '\\times',
      },
    }],
  ]
  // markdown: {
  //   config: md => {
  //     md.use(require("markdown-it-katex"));
  //   }
  // }
};
