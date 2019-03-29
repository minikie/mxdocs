// docs/.vuepress/config.js
module.exports = {
    head: [['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.6.0/dist/katex.min.css' }]],
    title: '시작ss2sad!',
    description: 'Test World',
    host: 'localhost',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Xen', link: '/xenarix/1_intro' },
        { text: 'About', link: '/about/' }
      ],
      sidebar: {
        '/xenarix/': [
            '1_intro',
            ['2_general','general'],
            '3_variable',
            '4_model',
            '5_shock',
            '6_result',
            '7_examples'
        ]
    }
  },
  markdown: {
    config: md => {
      md.use(require('markdown-it-katex'))
    }
  }
}