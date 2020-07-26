let array = [1, 2, 1, '1']

function unique() {
  let res = []
  for (let i = 0; i < array.length; i++) {

    let current = array[i]
    if (res.indexOf(current) === -1) {
      res.push(current)
    }
  }
  return res
}

console.log(unique(array));