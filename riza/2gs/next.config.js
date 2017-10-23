
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
      '/about': { page: '/about' },
      '/contact': { page: '/contact' },
      '/works': { page: '/works' },
      '/blog': { page: '/blog' },
      '/portfolio': { page: '/portfolio' },  
      '/details': { page: '/details' },            
      '/services': { page: '/services' },                  
    })
  }
}