let obj = {
  name: 'ming',
  age: 18,
  sex: 'man'
}

const m = new Map() 
// Map {}
m.set(obj, 'content')  //存值通过set
//  Map { { name: 'ming', age: 18, sex: 'man' } => 'content' }

// console.log(m.get(obj, 'obj')); 

// console.log(m.has(obj)); //true 

// m.delete(obj)



// const map = new Map([   // {name: 'xx', age: '18'}
//   ['name','xx'],
//   ['age', '18']
// ])
// console.log(map.size);
// console.log(map.has('name'));
// console.log(map.get('age'));

// const map = new Map()
// const items = [
//   ['name','xx'],
//   ['age', '18']
// ]

// items.forEach(([key, value]) => {
//   // console.log(key, value);
//   map.set(key, value)
// })
// console.log(map);

 
// const set = new Set([   //Set { [ 'foo', 1 ], [ 'bar', 2 ] }
//   ['foo',1],
//   ['bar',2],
//   ['ff',3]
// ])

// const m1 = new Map(set)
// console.log(m1); //  Map { 'foo' => 1, 'bar' => 2, 'ff' => 3 }


// const map = new Map()
// const k1 = ['a']
// const k2 = ['a']

// map.set(k1, 111).set(k2, 222)  // k1, k2值相同，在map中也被认为是两个键 (内存地址不同)

// map.set(-0,121)  // 0, -0 默认就是一个键
// map.set(+0,121)

// console.log(map);

// map.set(true, 1)
// map.set('true', 2)


// map.set(undefined, 3)
// map.set(null, 4)

// map.set(NaN, 6)   // NaN  默认就是一个键
// map.set(NaN, 7)

// map.clear()


const map = new Map([
  ['foo', 'no'],
  ['bar','yes']
])
// // keys()是返回键名的遍历器
// for (let key of map.keys()) {
//   console.log(key);
// }
// // values()是返回键值的遍历器
// for (let value of map.values()) {
//   console.log(value);
// }
// // entries()是返回成员的遍历器
// for (let value of map.entries()) {
//   console.log(value);
// }



let k = [...map.keys()]
let val = [...map.values()]
let m2 = [...map.entries()]

console.log(m2);