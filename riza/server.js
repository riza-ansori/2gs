const express = require('express')
const next = require('next')
const path = require('path')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const { parse } = require('url')

const rootStaticFiles = [
  '/favicon.ico',
  '/assets',
]

app.prepare()
  .then(() => {
    const server = express()

    server.get('/a', (req, res) => {
      return app.render(req, res, '/b', req.query)
    })

    server.get('/b', (req, res) => {
      return app.render(req, res, '/a', req.query)
    })

    //server side rendering
    server.get('*', (req, res) => {
      const parsedUrl = parse(req.url, true)
      
      const { pathname, query } = parsedUrl
      console.log(query)
      
      //handle static file
      if (rootStaticFiles.filter((file) => pathname.indexOf(file) > -1).length > 0) {
        const static_path = path.join(__dirname, 'static', pathname)
        app.serveStatic(req, res, static_path)
      } else
        if (pathname.indexOf('/posts') === 0) {
        query.fullUrl = pathname
        app.render(req, res, '/post', query)
      }
      else
        if (pathname.indexOf('/works') === 0 && pathname !== '/works') {
        query.fullUrl = pathname
        app.render(req, res, '/work', query)
      } else {
        handle(req, res, parsedUrl)
      }
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })