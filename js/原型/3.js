

Person.prototype.lastName = 'Fu'
function Person(name) {
  this.name = name
}

var person = new Person('jinlong')

person.lastName = 'yv'

console.log(person.lastName);
