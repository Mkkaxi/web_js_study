const express = require('express')
const app = new express()

//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.get('/getText', function(request, response) {
  data = {
    'message': 'MM'
  }
  response.json(data)
})

app.listen(3000, function() {
  console.log('服务器启动');
})