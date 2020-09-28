// const obj = {
//   a: 1,
//   b: 2,
//   c: 3
// }

// for (let i of obj) {
//   console.log(i);
// }


// const arr = ['a', 'b', 'c']

// for (let i in arr) {
//   console.log(i);
// }

// const arr = ['a', 'b']
// arr.name = 'wn'
// console.log(arr);


// const obj = {
//   a: 1,
//   b: 2
// }

// Object.prototype.c = 3
// for (let i in obj) {
//   console.log(i);
// }


// for in
// 循环返回的都是数据结构的键值名
// 遍历数组返回的是数组的下标
// 不仅可以遍历数字键名，还会遍历原型上的值和手动添加的其他键
// 特别情况下，遍历的顺序不会按照对象的顺序进行

// for of
// 不能遍历对象
// 返回的是数组的元素


// Symbol.iterator 数据结构部署此属性，就具备迭代器接口，可以被for of遍历
// 数组
// Map
// Set
// String
// arguments 对象
// Nodelist对象



// 对象中的常规属性和排序属性

function Foo() {
  this[100] = 'test-100',
  this[1] = 'test-1',
  this['b'] = 'bar-B',
  this[5] = 'test-5',
  this[8] = 'test-8',
  this[45] = 'test-45',
  this[66] = 'test-66'
}

let bar = new Foo()
for (let key in bar) {
  console.log(`index:${key} value:${bar[key]}`);
}

// 对象中的数字属性会被优先遍历，且按照顺序遍历

// ECMAScript 规范中定义了  「数字属性应该按照索引值的大小升序排列，字符串属性根据创建时的顺序升序排列」

// 数字属性成为排序属性， 字符串属性为常规属性