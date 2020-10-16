const Koa = require('koa');
const app = new Koa();
const path = require('path');
const router = require('koa-router')();
const md5 = require('md5')

router.get('/', async function (ctx) {
  ctx.body = `
  <html>
  <body>hello world</body>
  <script src="a.js"></script>
  </html>
  `
});

router.get('/a.js', async function(ctx) {
  // console.log('请求了');
  const fs = require('fs')
  const js = fs.readFileSync('./a.js', 'utf8')
  // http 1.0  expires: 2020-10-16：17：00  浏览器时间可以修改，有可能导致缓存失效
  // http 1.1  状态码 200 请求不会来到服务器 浏览器直接把 上一次得到的内容取出来用 
  const etag = md5(js)
  if (ctx.headers['if-none-match'] === etag) {
    ctx.status = 304  // 304 告诉浏览器 内容没有变化
    ctx.body = ''
    return
  }
  ctx.set('Cache-Control', 'public, max-age=30')
  // 能够根据文件内容生成的 hash 字符串 md5
  // md('js') => 'xxxx'
  // md('js1') => 'xxxx1'
  // 输入一样 输出一样， 输出不一样 输出不一样   =>  
  ctx.set('ETag', etag)
  // last-modified: 上一次的文件修改时间
  // 文件的修改时间 时间变了 文件内容就变了
  // ctx.set('last-modified', '文件修改时间')
  // 大文件的时候 hash 耗时比较就 取最后修改时间
  // 强缓存优先生效
  // 30s 请求来到服务器
  // 顺便 用 if-none-match 把上一次的 etag 带回来
  ctx.body = js
})


app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(9090, () => {
  console.log('server is running 9090');
});
