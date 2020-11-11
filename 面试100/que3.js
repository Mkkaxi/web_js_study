let arr = [[1, 2, 2], [3, 4, 5, 5],[6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]

// 拍平， 去重
 function myflat(arr) {
  let arr1 = arr.slice(0,1)
  console.log(arr1);
  
 }

 myflat(arr)



function flat(arr) {
  let res = []
  function walk(myarr){
    for (let i = 0; i < myarr.length; i++) {
        if (Array.isArray(myarr[i])) {
            walk(myarr[i])
        } else {
            res.push(myarr[i])
        }
      }
  }
  walk(arr)
  return res
}
flat(arr)

function flatten(arr) {
  return arr.reduce(function(acc, val) {
    return acc.concat(Array.isArray(val) ? flatten(val) : val)
  }, [])
}