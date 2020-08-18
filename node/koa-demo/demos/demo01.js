// 引入koa依赖  commonJS
const Koa = require('koa')

const app = new Koa() // 定义一个新的 Koa 实例

app.listen(3000, () => {
  console.log('启动');
})