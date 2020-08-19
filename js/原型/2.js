
Car.prototype.carName = 'BMW'
Car.prototype.height = 1400
Car.prototype.width = 4900

function Car(color, owner) {
  this.color = color
  this.owner = owner
  // this.carName = 'BMW'   耦合度高
  // this.width = 4900
  // this.height = 1400
}

var car = new Car('red', 'huang')
var car1 = new Car('green', 'hao')