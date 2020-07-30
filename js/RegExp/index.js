//正则的定义
// let part1 = new RegExp("hello")
// let part2 = /world/
// 正则的使用 test() 

// let pat = /my/  
// let str = "this is my code..."

// let arr = str.split(' ')
// console.log(arr);
// console.log(pat.test(str)); 

// let pat = /hello/
// let msg = 'oh hallo world'
// console.log(pat.exec(msg));

//正则表达式的类型
// /pattern/attributes  g  i  全局匹配和区分大小写匹配

// let str = 'Visit China oh my world'
// let pat = /china/i
// let pat2 = /china/gi
// console.log(pat2.test(str));

// 字符串的正则
// let str = 'Visit W3School'
// console.log(str.search(/W3school/i));

// let str = '1 plus 2 equl 33'
// console.log(str.match(/\d+/g));

// let str = 'hello pp! oh i am wn'
// console.log(str.replace(/wn/, "snail"));

// console.log(str.split(''));
// console.log(str.split(/\s+/));


//正则写法

// [abd]查找方括号之间的任何字符
// let str = "Is this all there is?"
// let pat = /[a-h]/g
// console.log(str.match(pat));

// [^abd] 查找任何不足方括号之间的字符
// let str = "hello pp like jinlong"
// let pat = /[^like]/g
// console.log(str.match(pat));

// let str = 'hello ziChen! How are you?'
// let pat = /hello|you/g
// console.log(str.match(pat));

// let str = "That's hot!"
// // let pat = /h.t/g
// let pat = /\W/g
// console.log(str.match(pat));

// let str = 'moon'
// let pat = /\b/
// console.log(str.match(pat));

// let str = 'hello yangyang! hhello world'
// let pat = /lo$/g
// console.log(str.match(pat));



//手机号正则
let tel = '17825564511'
let pat = /^1([3-9])\d{9}$/
console.log(pat.test(tel));