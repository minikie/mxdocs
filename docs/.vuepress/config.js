// docs/.vuepress/config.js
module.exports = {
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
  }
}