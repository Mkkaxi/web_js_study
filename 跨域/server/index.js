const http = require('http')
const qs = require('querystring')

http.createServer((req, res) => {
  // console.log(req);
  if (req.url.includes('/api')) {
    let json = {
      code: 0
    }
    // res.write('<p>22</p>')
    // res.write('222')
    let fn = qs.parse(req.url.split('?')[1]).callback
    res.end(`${fn}(${JSON.stringify(json)})`)
  } else {
    res.end('')
  }
})
.listen(8088, () => {
  console.log(8088);
})