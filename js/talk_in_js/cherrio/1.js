// 对象是由方法和属性构成 语法 
// 1. 构建一只鸭子
// 2. 招募1000只鸭子
// 3. 告诉国王你完成任务了

// JSON Object 对象字面量 literal object
var duck = {
    type: '煌上煌',
    yz: 99,
    duckSing: function() {
      console.log('嘎嘎嘎');
    }
  }
  
  var jiajun = {
    name: '佳骏',
    duckSing: function() {
      console.log('嘎嘎嘎');
    }
  }
  
  var xyl = {
    name: '元隆',
    duckSing: '嘎嘎嘎'
  }
  
  const xgg = [jiajun, xyl];
  
  // JS 里由Array类型？ 
  //数据类型 数值类型Number 字符串string  布尔值bool null undefined
  //unfined  
  var cherrio ; // 关键字 标识符
  // console.log(cherrio); // undefined
  // console.log(typeof cherrio); //undefined 
  // 变量的类型由值决定
  cherrio = [];
  // console.log(cherrio);
  // // 基础类型不包括array array 只是object 的子类型 
  // console.log(typeof cherrio); // object array
  
  for(var i = 0; i < 999; i++) {
    cherrio.push(duck);
  }
  
  for(var i = 0; i < xgg.length; i++) {
    // if (xgg[i].duckSing != undefined)
    if (typeof xgg[i].duckSing == 'function') {
      cherrio.push(xgg[i]);
    }
  }
  
  if (cherrio.length === 1000) {
    console.log('已招募完成， 报告国王');
  }
  
  duck.duckSing();
  
  for (let singer of cherrio) { //es6
      singer.duckSing()
  }