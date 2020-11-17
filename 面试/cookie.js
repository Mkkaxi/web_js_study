// js 设置cookie
document.cookie = 'name=value;expire=20201117'
console.log(document.cookie);  // 能读取到 httponly 为 false 的cookie
// 后端
// 通过它返回的响应头
// ctx.set('set-cookie':'name=value;')