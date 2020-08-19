const Koa = require('koa')
const app = new Koa()
const route = require('koa-route')

const main = ctx => {
  console.log(ctx);
  ctx.response.body = ctx.request.method + ' ' + ctx.request.url + ' ' + +new Date()
}

app.use(route.get('/', main))
app.use(route.get('/mm', main))
app.listen(3000)