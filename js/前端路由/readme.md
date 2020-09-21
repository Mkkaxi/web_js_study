# 前端路由

1. 如何改变url却不引起页面的刷新？
2. 如何知道url变化？

hash
通过 hashchange  事件监听 url 的变化

改变url的方式
  - 通过浏览器前进后退来改变url 
  - 通过a标签改变url
  - 通过window.location改变url
以上这几种情况改变url （才）都会触发 hashchange 事件


history  