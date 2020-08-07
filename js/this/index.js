// function identify(context) {
//   return context.toUpperCase()
// }

// function speak(context) {
//   let greeting = "hello, I'm" + identify(context)
//   console.log(greeting);
// }

// let me = {
//   name: 'wn'
// }
// speak(me)






//  this所处的词法作用域在哪里生效了，this作用域就指向哪里

// function foo() {
//   let person = {
//     name: 'wn',
//     age: 18
//   }
//   // console.log(this.person.age);
//   console.log(this);  

// }
// // foo()

// function bar() {
//   let person = {
//     name: 'wn',
//     age: 18
//   }
//   foo()

// }
// bar()


// function foo() {
//   // "use strict"
//   console.log(this.a);
// }

// var a = 2;
// (function() {
//   "use strict"
//   foo() // 严格模式下的foo的调用，与位置无关
// })()




// function foo() {
//   console.log(this.a);
// }

// var obj = {
//   a: 2,
//   foo: foo
// }

// obj.foo() // foo此时被obj所拥有



function foo() {
  console.log(this.a);
}

// function doFoo() {  // 参数传递又称之为隐式赋值
//   fn()
// }

var obj = {
  a: 2,
  foo: foo 
}

var bar = obj.foo;
var a = 'hello'
bar()
// doFoo(obj.foo)