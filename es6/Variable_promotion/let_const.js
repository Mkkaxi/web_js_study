// console.log(name);
// var name = '张三'
// var name
// name = 'zhangsan'


// console.log(name);
// let name = 'lisi'


// for (let i = 0; i < 10 ;i++) {
//   console.log(i);
// }

// console.log(i);


// var a = []
// for (var i = 0; i < 10; i++) {
//   a[i] = function() {
//     console.log(i);
//   }
  
// }
// a[6]()


// for(let i = 1; i < 3; i++) {  //父作用域
//   let i = 'abc'               //子作用域
//   console.log(i)
// }



//暂时性死区
// var tmp = 123 

// if(true) {
//   tmp = 'abc'
//   let tmp //清除除本区域外的声明
// }