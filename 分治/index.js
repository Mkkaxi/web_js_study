// 1. 分 将原问题划分为多个相同的子问题
// 2. 解 用递归的方式解决每个子问题
// 3. 合 把所有子问题的解决结果合并起来，得到原问题的解



// 归并排序：[1, 3, 2, 6, 8, 9, 6]

const merge_sort = function (arr) {
  if (arr.length == 1) return arr // 出口

  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
  // console.log(left, right);
  
  return Merge(merge_sort(left), merge_sort(right)) // 合并左右部分
}

const Merge = function(a, b) {
  let n = a && a.length
  let m = b && b.length
  let c = []
  let i = 0, j = 0 
  while (i < n && j < m) {
    if (a[i] < b[j]) {
      c.push(a[i++])
    } else {
      c.push(b[j++])
    }
  }
  while (i < n) {
    c.push(a[i++])
  }
  while (j < m) {
    c.push(b[j++])
  }
  console.log(c);
  return c
}

console.log(merge_sort([1, 3, 2, 6, 8, 9, 6]));
