/**
 * 功能：计算年收益
 * @author mjj
 * @date 2020-7-16
 * @params {salary 工资 number}
 * {level 评级 string}
 * @return 年收益 number
 */


function calculateBonus(monthSalary, level = 'C') {

  +monthSalary
  // console.log(monthSalary - 0)

  if (typeof + monthSalary != 'number' || monthSalary < 0) {
    throw new TypeError('工资必须是整数')
  }

  if (['A', 'B', 'C', 'D', 'S'].indexOf(level) == -1) {
    throw new Error('错误的等级')
  }

  monthSalary = parseInt(monthSalary)

  // if (typeof level != 'string') {

  // }

  if (level == 'D') {
    return monthSalary * 12
  } else if (level == 'B') {
    return monthSalary * 18
  } else if (level == 'A') {
    return monthSalary * 20
  } else if (level == 'S') {
    return monthSalary * 100
  }
  return monthSalary * 16
}

console.log(calculateBonus(20000));