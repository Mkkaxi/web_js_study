const Koa = require('koa')
const app = new Koa()
const compose = require('koa-compose')

const logger = (ctx, next) => {
  console.log(`${ctx.request.url}`);
  next()
}

const main = (ctx, next) => {
  ctx.response.body = 'Hello World'
}

const middlewares = compose([logger, main])
app.use(middlewares)

// app.use(logger)
// app.use(main)
app.listen(3000)