# 什么是XSS攻击?  如何防范XSS攻击?
xss就算攻击者想尽一切办法将可以执行的代码注入网页中

xss类型：
  - 持久型
    攻击者的代码被服务器写进了数据库

  - 非持久型
    <!-- http://www.baidu.com?name=<script>alert(1)</script> -->


防范：
  - 转义字符
  function escape(str) {
    str = str.replace(/&/g, '&amp;')
    str = str.replace(/</g, '&lt;')
    str = str.replace(/>/g, '&gt;')
    str = str.replace(/"/g, '&quto;')
    str = str.replace(/'/g, '&#39;')
    str = str.replace(/`/g, '&#96;')
    str = str.replace(/\//g, '&#x2F;')
    return str
  }
  <!-- <script>alert(1)</script> -->
  <!-- &lt;script&gt;alert(1)&lt;&#x2F;script&gt; -->
  
const xss = require('xss')
let html = xss('<h1></h1>')



# CSP
开发者告诉浏览器哪些外部资源是可以加载和执行，如何拦截是由浏览器自己实现

通常有两种方式开启CSP：
  1. 设置 HTTP Header 中的 Content-Security-Policy
  2. 设置 meta 标签 <meta http-equiv="Content-Security-Policy">

  <!-- Content-Security-Policy: default-src 'self' 只允许访问本站文件 -->
  <!-- Content-Security-Policy: img-src https://*  只允许加载https图片 -->



# 什么是CSRF攻击？ 如何防范CSRF ？
跨站请求伪造

防范：
1. Get 请求不对数据进行修改
2. 不让第三方网站访问Cookie
3. 组织第三方网站请求接口
4. 请求时必须携带验证码或者Token