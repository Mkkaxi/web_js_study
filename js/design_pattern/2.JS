// JSON 对象
// 策略模式
// 对象字面量
// 工资发放策略


var strategies = {
  'A': function(salary) {
    return salary * 20
  },
  'B': function(salary) {
    return salary * 18
  },
  'C': function(salary) {
    return salary * 16
  },
  'D': function(salary) {
    return salary * 12
  },
  'S': function(salary) {
    return salary * 100
  }
}
function calculateBonus(salary, level = 'C') {
  console.log(strategies[level])
  console.log(typeof strategies[level])
  return strategies[level](salary); //变量用[]访问，常量用 . 访问
  
}

console.log(calculateBonus(20000))