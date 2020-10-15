http 头部字段：
请求头  use-agent
响应头  set-cookie  后端设置cookie

通用头  
Content-Type 
  当用在请求的时候  application/x-form-url-endcode | application/json
  application/x-form-url-endcode: name=xxx&pwd=xxx
  application/json: {name: xxx, pwd: xxx}
  multipart/form-data:
  ------分隔符--------
  name=xxx
  ------分隔符--------
  pwd=xxx
  ------分隔符--------

  当用在响应的时候  image/jpeg image/png text/html text/javascript

