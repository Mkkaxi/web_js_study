

// const s = new Set()   // 类数组
// const arr = new Array()


 

//  for in 不能用来遍历数组 ！！！！！！！！

// for (let i of arr) {
//   console.log(i);
// }

// arr.forEach((x) => {
//   // console.log(x);
//   s.add(x)
  
// })
// console.log(s);

// const set = new Set([1,2,3,4,4,4,3,2,1])
// const set = new Set()
// console.log(set);
// console.log(set.size);

// // 数组去重
// let arr =  [2, 3, 4, 1, 3, 2, 5]
// console.log([...new Set(arr)])

// // 字符串去重
// console.log([...new Set('sssafga')])

// let a = NaN
// let b = NaN
// set.add(a)
// set.add(b)



// const set = new Set()
// set.add(1).add(2).add(3)
// // set.delete(2)
// set.clear()
// console.log(set.has(3));

// const set = new Set([1,2,3])
// const arr = Array.from(set)
// arr.forEach(e => {
//   console.log(e);
// })

//数组去重
// function dedupe(e) {
//   return Array.from(new Set(e))
// }

// console.log(dedupe([1, 2, 3, 2, 1])); 



//set 遍历

let set = new Set(['red', 'green', 'blue']);


// keys() 是set结构中返回键名的遍历器
// values() 是set结构中返回值的遍历器
// entries() 是set结构中返回键值对的遍历器
for (let item of set.keys()) {
  console.log(item);
}


for (let item of set.values()) {
  console.log(item);
}

for (let item of set.entries()) {
  console.log(item);
}







