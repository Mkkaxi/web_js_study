// 数组去重

let array  = [1, 1, 1, '1', '1'] // [1, '1']


function unique(array) {
let res = []
res[0] = array[0]
for (let i = 0; i < array.length; i++) {
  for (let j = 0, resLen = res.length; j < resLen; j++)
  { 
    if(array[i] === res[j]) {
      break
    }


    if(j === resLen - 1) {
      res.push(array[i])
    }
  }
  return res
  // 如果array[i]是唯一的，那么执行完循环，j = resLen
}
console.log(unique(array));



  // 1. 将数组中的每一项拿出来作为主角
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       //当外面的for循环执行一次时， 内层的for循环会执行length - 1次
//       if (array[i] === array[j]) {
//         array.splice(j, 1)
//       }
//     }

//   }
//   return array
// }
