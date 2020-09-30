var majorityElement = function (nums) {
  let count = 0
  for (let num of nums) {
    for(let i = 0; i < nums.length; i++) {
      if(num == nums[i]) {
        count++
      }
      if(count >= nums.length/2) {
        return num
      }
    }
    count = 0
  }
};

console.log(majorityElement([2,3,5,5,5,3,5,35,5]));
  

