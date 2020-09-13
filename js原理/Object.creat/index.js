// Object.create 的实现原理

let a = { b: 1 }
let c = Object.create(a) 
function create(obj) {
  if (typeof obj !== 'object') {
    throw TypeError
  }

  function Ctr() {}
  Ctr.prototype = obj
  let o = new Ctr()
  return o


  // a.__proto__ = obj.__proto__
  // return a
}