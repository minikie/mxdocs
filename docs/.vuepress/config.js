// docs/.vuepress/config.js
module.exports = {
    head: [['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.6.0/dist/katex.min.css' }]],
    title: '시작ss2sad!',
    description: 'Test World',
    host: 'localhost',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Xen', link: '/xenarix/intro' },
        { text: 'About', link: '/about/' }
      ],
      sidebar: {
        '/xenarix/': [
            'intro',
            ['general','제너'],
            'model',
            'result',
            'etc',
        ]
    }
  },
  markdown: {
    config: md => {
      md.use(require('markdown-it-katex'))
    }
  }
}