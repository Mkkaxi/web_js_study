// setTimeout  Promise  Async/await  的区别

// setTimeout 隶属于宏任务队列，会等到执行栈清空后菜执行
// Promise 会让回调函数去到微任务队列，等到宏任务里面的同步代码执行完再执行
// Async 表示函数可能有异步方法，await后面跟表达式，async执行时碰到await会让它立即执行，
// await后面的代码会去到微任务队列