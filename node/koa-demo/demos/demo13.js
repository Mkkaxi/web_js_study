const Koa = require('koa')
const app = new Koa()
const route = require('koa-route')

const main = ctx => {
  ctx.response.body = 'hello world'
}

const redirect = ctx => {
  ctx.response.redirect('/')
  ctx.response.body = '<a hre="/">Index page</a>'
}


app.use(route.get('/', main))
app.use(route.get('/redirect', redirect))
app.listen(3000)