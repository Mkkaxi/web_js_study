
// var num = 123
// num.abc = 'aaaa'
// console.log(num);


// var num = new Number(123)
// num.abc = 'aaa'
// console.log(num.abc);
// console.log(num*2);
// console.log(num);
// // num 参与运算又变回了数字， 不参与运算它还能当作对象来用
// // 能有属性和方法，同理字符串和布尔也一样
// // 但是 null 和 undefined 不行


// var str = 'ads'



// // 包装类
// var num = 4
// num.len = 3
// 隐式过程
// new Number(4).len = 3
// delete len
// new Number(4).len
// console.log(num.len);



var arr = [1, 2, 3, 4, 5]
arr.length = 2
console.log(arr);
var str = 'abcd'
str.length = 2
// new String('abcd').length = 2
// delete length
// new String('abcd').length
// 字符串对象天生就具备length属性



console.log(str.length);



var str = 'abc'
str += 1
var test = typeof(str)
if(test.length == 6) {
  test.sign = 'typeOf的返回结果可能为String'
}

console.log(test.sign);
