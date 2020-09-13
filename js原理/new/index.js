function Person(name) {
  this.name = name
}

let p = new Person('Tom')

// 1. p.__proto__ =  ?  Person.prototype
// 2. Person.__proto__ = ? Function.prototype

var foo = {}
var F = function() {}

Object.prototype.a = 'value a'
Function.prototype.b = 'value b'

// console.log(foo.a);
// console.log(foo.b);
// console.log(F.a);
// console.log(F.b);

// new 的实现原理
function myNew(fun) {
  return function() {
    let obj = {
      __proto__: fun.prototype
    }
    fun.call(obj, ...arguments)
    return obj
  }
}


// function Person(name) {
//   this.name = name
// }
// let p = new Person('Tom')

// // 1. p.__proto__  =  ?    Person.prototype
// // 2. Person.__proto__ = ?  Function.prototype

// var foo = {}
// var F = function() {}

// Object.prototype.a = 'value a'
// Function.prototype.b = 'value b'

// // console.log(foo.a)
// // console.log(foo.b)
// // console.log(F.a)
// // console.log(F.b)



function Person(name, age) {
  this.name = name
  this.age = age
}
// let p = new Person('Tom')

// p = { name: 'Tom' }


// new 的实现原理
// function myNew(fun) {
//   return function() {
//     let obj = {
//       __proto__: fun.prototype
//     }
//     fun.call(obj, ...arguments)
//     return obj
//   }
// }

function myNew() {
  // 创建一个实例对象
  let obj = {}
  // 取到外部 传进来的构造器
  let Constructor = Array.prototype.shift.call(arguments)
  // 实现继承，要实例可以访问构造器的属性
  obj.__proto__ = Constructor.prototype
  // 调用构造器，改变其this指向到实例
  let ret = Constructor.apply(obj, arguments)
  return typeof ret === 'object' && ret !== null ? ret : obj
}


const Test = function(name) {
  this.name = name
}
let newObj = myNew(Test, 'yuanlong')

console.log(newObj);


