const Koa = require('koa')
const KoaBody = require('koa-body')
const app = new Koa()

const main = ctx => {
  // const body = ctx.request.body
  // if(!body.name) {
  //   ctx.throw(400, '.request.name')
  // }
  // ctx.response.body = { name: body.name}

  ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`
  console.log(ctx.body);
}
app.use(KoaBody())
app.use(main)
app.listen(3000)