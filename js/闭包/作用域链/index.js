
function a() {
  function b() {
    var b = 111
  }
  var a = 222
}
a()



// 函数a为对象 ，所以有a.[[scope]]属性，  [scope]属性为一个数组，作用域域


//  a 定义  a.[[scope]]  --> 0: GO: {}
//  a 执行  a.[[scope]]  --> 0: aAO: {}  1: GO: {}
//  b 定义  a.[[scope]]  --> 0: aAO: {}  1: GO: {}
//  b 执行  a.[[scope]]  --> 0: bAO: {}  1: aAO: {}  2: GO: {}


//  b 执行完   [scope]中指向 bAO 的指针消失， bAO 被销毁
//  a 执行完   [scope]中指向 aAO 的指针消失 ,因为 aAO 中包含了b函数，导致 aAO 消失的时候b函数失效