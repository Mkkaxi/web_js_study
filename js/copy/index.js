// 拷贝
// let a = { age: 1 }
// let b = a
// a.age = 2 
// console.log(b);
//复制内存地址指针的操作叫浅拷贝

// Object.assign
// 深拷贝 (不会受原数据影响的赋值操作叫做深拷贝)
let a = { age: 1 }
let b = Object.assign({}, a)
a.age = 2
console.log(b);
