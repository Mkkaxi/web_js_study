
Person.prototype = {
  name: 'min',
  sayName: function() {
    console.log(this.name);
  }
}
function Person() {
  this.name = 'yuan'
}
console.log(person.sayName());
console.log(person.sayName());
