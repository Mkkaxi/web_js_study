// 下面三种方式实现的继承的优缺点，并改进
Shape.prototype.say = function() {
  console.log('hhhh');
}
function Shape() {
  this.info = {
    age: 18
  }
}

function Rect(name) {
  this.name = name
}

// 1
// Rect.prototype = new Shape()
// let rect = new Rect('wn')  // { info: {} }
// rect.info.age = 20
// console.log(rect.info.age);

// 2
// Rect.prototype = Shape.prototype  // 子类原型添加方法父类也会修改
// let rect = new Rect('wn')
// Rect.prototype.sex = 'man'
// console.log(Shape.prototype.sex);

// 3
Rect.prototype = Object.create(Shape.prototype)
let rect = new Rect('wn')
Rect.prototype.sex = 'man'
console.log(Shape.prototype.sex);


