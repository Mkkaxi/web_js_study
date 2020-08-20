const Koa = require('koa')
const app = new Koa()

const main = ctx => {
  ctx.throw(500)
}

// 监听 error，可以在控制台看见server error

app.on('error', (error, ctx) => {
  console.error('server error', error);
})

app.use(main)
app.listen(3000)