function Person() {
  // var this = {
  //   __proto__ : Person.prototype
  // }
}


Person.prototype.name = 'wn'
function Person() {
  
}
var person = new Person()
Person.prototype = {  // 把原型重新估值
  name: 'pipi'
}