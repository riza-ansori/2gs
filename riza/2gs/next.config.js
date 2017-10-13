
const SUMMARY_JSON = require('./content/summary.json')

module.exports = {
  exportPathMap: function () {
    const posts = {}
    SUMMARY_JSON.fileMap && Object.keys(SUMMARY_JSON.fileMap)
      .forEach((file) => {
        if (file.indexOf('content/posts') === 0) {
          const page = file.split('content').join('').split('.json').join('')
          posts[page] = {
            page: '/post',
            query: {
              fullUrl: page
            }
          }
        }
        if (file.indexOf('content/works') === 0) {
          const page = file.split('content').join('').split('.json').join('')
          posts[page] = {
            page: '/work',
            query: {
              fullUrl: page
            }
          }
        }
      })

    return Object.assign({}, posts, {
      '/': { page: '/' },
      '/about-us': { page: '/about-us' },
      '/contact': { page: '/contact' },
      '/works': { page: '/works' },
      '/blog': { page: '/blog' }      
    })
  }
}