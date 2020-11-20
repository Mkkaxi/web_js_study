const Vue = require('vue')
const express = require('express')
const server = express()
const Render = require('vue-server-renderer')
const fs = require('fs')
const render = Render.createRenderer({
  template: fs.readFileSync('./src/index.template.html', 'utf8')
})

server.use(express.static('dist'))
const createApp = require('./dist/server.bundle.js').default
// createApp 指向 entry-server 那个函数， 被webpack打包成 commonJS

server.get('*', (req, res) => {
  let app = createApp()
  let context = {}
  render.renderToString(app, context, (err, html) => {
    if (err) {
      console.log(err);
    }
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    // 渲染出去的页面 只是HTML
    // 
    res.end(html)
  })
})

server.listen(8080, () => {
  console.log('server is running 8080');
})