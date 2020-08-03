var a = 10
function foo(a) {
  var b = a + 2

  function bar(c) {
    console.log(a, b, c);
  }

  bar(5)

}

foo(2)

// 全局作用域下只有  foo
// foo作用域下有 a, b, bar
// bar作用域下有c
// window.a 为 10