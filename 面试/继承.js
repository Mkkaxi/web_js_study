// 题目

// 填充 inherit 完成输出。
function inherit(Animal, obj) {
  function F(name) {
    Animal.call(this, name)
  }
  F.prototype = obj
  F.prototype.__proto__ = Animal.prototype
  return F
}

let animalNum = 0;
function Animal(name) {
  animalNum ++;
  this.name = name;
}
Animal.prototype.getName = function() {
  return this.name;
};
const Cat = inherit(Animal, {  
    say:function() {
        console.log(`NO${animalNum}:${this.getName()}`);
    }
});
const cat1 = new Cat('小花');
cat1.say(); // NO1:小花
