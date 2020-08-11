// 实现一个函数执行出来的结果都是累加的

function add() {
  var i = 0

  function count() {
    i++
    console.log(i);
  }
  return count
}
var res = add()

res()
res()
res()


// 函数中没有固定不变的变量，函数没次重新执行都会初始化函数里面的所有东西