// 欺骗词法作用域

// eval()

function foo(str, a) {
  'use strict'
  eval(str)  // 影响了正常的词法作用域， 欺骗
  console.log(b, a);
}
// foo('var b = 3', 2)


var obj = {
  a: 1,
  b: 2,
  c: 3
}
obj.a = 10

//with
with (obj) {
  a = 100,
  b = 200
  // c = 300
}
// console.log(obj);

//with 的缺点
function foo2(obj) {
  // obj.a = 2
  with(obj) {
    a = 2,
    b = 10
  }
}

var o1 = {
  a: 3
}

foo2(o1)

console.log(o1.a);


var o2 = {
  b: 3
}

foo2(o2)
console.log(o2.a);

console.log(o2.b);
console.log(b);



