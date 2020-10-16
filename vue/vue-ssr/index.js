const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer()
const server = require('express')()

const app = new Vue({
  template: '<div>hello world</div>'
})

// 服务器端渲染
server.get('/', (req, res) => {
  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Server Error')
      return
    }
    res.send(`
      ${html}
    `)
  })
})

server.listen(8080)