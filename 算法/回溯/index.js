// 在尝试中寻找问题的解，过程中一旦发现条件不符合，就回溯返回上一层


// 用递归模拟出所有的情况
// 遇到包含重复元素的情况就回溯
// 手机所有能到达递归终点的情况，并返回

// https://leetcode-cn.com/problems/permutations/

var permute = function(nums) {
  const res = []
  const backtrack = (path) => {
    if (path.length === nums.length) {
      res.push(path)
    }

    nums.forEach(n => {
      if (path.includes(n)) {
        return
      }
      backtrack(path.concat(n))
    })
  }
  backtrack([])
  return res
};

console.log(permute([1,2,3]));