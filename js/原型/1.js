
//  Person.prototype -- 原型
// Person.prototype = {}   函数定义出来，就天生具备的

Person.prototype.name = 'jia'
Person.prototype.say = function () {
  console.log('giao');
}
function Person() {
  this.name = 'wn'
}

var person = new Person()

console.log(person.name);  //  从原型上继承来的

var person1 = new Person()

console.log(person1.name); 


person.say()