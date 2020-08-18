// 引入koa依赖  commonJS
const Koa = require('koa')

const app = new Koa() // 定义一个新的 Koa 实例


const main = ctx => {
  // console.log(ctx);
  if(ctx.request.url !== '/') {
    ctx.response.type = 'html'
    ctx.response.body = '<a href="/">Index Page</a>'
  } else {
    ctx.response.body = 'hello'
  }
}

app.use(main)

app.listen(3000, () => {
  console.log('启动');
})