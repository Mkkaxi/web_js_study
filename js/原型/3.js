

// Person.prototype.lastName = 'Fu'
// function Person(name) {
//   this.name = name
// }

// var person = new Person('jinlong')

// person.lastName = 'yv'

// console.log(person.lastName);


function Bus() {

}
Car.prototype = {
  constructor: Bus()
}

function Car() {

}

var car = new Car()

// constructor 为了让Car()构造出的所有的对象都能找到它的自己的构造器

console.log(Car.constructor);
