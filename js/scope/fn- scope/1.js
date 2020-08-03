//函数中的作用域  气泡模型
function foo (a) {
  var b = 2
  
  function bar() {
    console.log();
  } 

  var c = 3
}


// foo的作用域具备 a, b, c, bar这些标识符