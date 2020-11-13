// 对象数组的去重
const responseList = [
  { id: 1, a: 1 },
  { id: 2, a: 2 },
  { id: 3, a: 3 },
  { id: 1, a: 4 }
]

const result = responseList.reduce((acc, cur) => {
  const ids = acc.map(item => item.id)
  console.log(acc);
  return ids.includes(cur.id) ? acc : [...acc, cur]
}, [])