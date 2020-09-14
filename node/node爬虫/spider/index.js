const https = require('https')
const cheerio = require('cheerio')
const fs = require('fs')

// 通过https模块的gt方法，请求网站连接， 在回调函数中获取资源
https.get('https://movie.douban.com/top250', (res) => {
  //获取到的资源是分段返回的，所以需要手动拼接（html)
  let html = ''
  // res.on类似与addEventlistener
  res.on('data', (chunk) => {
    html += chunk
  })

  // res数据加载完成，我们去执行xx逻辑
  res.on('end', () => {
    // 操作dom
    const $ = cheerio.load(html)
    let allFilms = []

    $('li .item').each(function() {
      const title = $('.title', this).text()
      const star = $('.rating_num', this).text()
      const pic = $('.pic img', this).attr('src')
      allFilms.push({title, star, pic})
    })
    // console.log(allFilms);
    fs.writeFile('./files.json', JSON.stringify( allFilms ), (err) => {
      if (err) throw err;
      console.log('文件以保存');
    })
  })

})