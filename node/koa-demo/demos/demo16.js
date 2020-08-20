const Koa = require('koa')
const app = new Koa()

const handle = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    // ctx.response.status = err 
    console.log(err.statusCode | err.status | 500);
    ctx.response.status = err.statusCode | err.status | 500
    ctx.response.body = {
      'message': err.message
    }
  }
}

const main = ctx => {
  throw(500)
}


app.use(handle)
app.use(main)

app.listen(3000)