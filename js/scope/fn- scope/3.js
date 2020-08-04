// var a = 2

// function foo() {    //  声明式函数
//   var a = 3
//   console.log(a);
// }
// foo()
// console.log(a);


// 自执行函数

var a = 2;

(function foo() {   // 函数表达式
  var a =3
  console.log(a);  
})()


//   自执行函数是一个很好的隐藏作用域的方式