//正则的定义
let part1 = new RegExp("hello")
let part2 = /world/
// 正则的使用 test() 

// let pat = /my/  
// let str = "this is my code..."

// let arr = str.split(' ')
// console.log(arr);
// console.log(pat.test(str)); 

let pat = /hello/
let msg = 'oh hallo world'
console.log(pat.exec(msg));
