// 构造函数
function Student(name, age, sex) {

  // var this = {
      // name,
      // age,
      // sex
  // }
  
  this.name = name
  this.age = age
  this.sex = sex
  this.grade = 2017
  return ['ss']
  // return this
}

var student = new Student('jh', 22, 'boy')
console.log(student);