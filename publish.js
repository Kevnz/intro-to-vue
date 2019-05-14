const ghPages = require('gh-pages')

ghPages.publish('dist', err => {
  console.info('error?', err)
  console.info('done')
})