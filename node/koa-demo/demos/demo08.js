const Koa = require('koa')
const app = new Koa()

const logger = (ctx, next) => {
  console.log(`${ctx.request.url}-${ctx.request.method}-${Date.now()}`);
  next()
}

const main = ctx => {
  ctx.response.body = 'Hello World' 
}

app.use(logger)
app.use(main)
app.listen(3000)