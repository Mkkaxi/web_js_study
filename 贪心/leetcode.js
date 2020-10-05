// 455 
// https://leetcode-cn.com/problems/assign-cookies/

// 既能满足孩子，还能消耗最少，较小的饼干分配给胃口较小的孩子
// 将饼干数组和孩子数组做升序排序，遍历饼干数组，找到能满足第一个孩子的饼干
// 继续遍历饼干数组，找到满足第二，三，四

var findContentChildren = function(g, s) {
  let n = 0
  g.sort(function sortArr(a, b) {
    return a - b
  })
  s.sort(function sortArr(a, b) {
    return a - b
  })
  for (let i = 0; i < s.length; i++) {
    if(s[i] >= g[n]) {
      n++
    }
  }
  return n
};


console.log(findContentChildren([1,2,3,4], [1,2,3,4]));