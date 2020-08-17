let xq = new Promise(function(resolve, reject) {
  setTimeout(() => {
    console.log('相亲');
    resolve('成功')
  }, 2000)
})

xq
.then((res) => {
  // console.log(res);
  return marry()
})
.then((res) => {
  return baby()
})
.then((res) => {
  baby2()
  console.log(res);
})
.catch(err => {
  console.log(res);
})



function marry() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('结婚');
      resolve('哈哈')
  }, 1000)
  })
}

function baby() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('baby1');
      resolve('hhh')
      // reject('ggg')
    }, 500)
  })
}

function baby2() {
  setTimeout(() => {
    console.log('baby2');
  }, 200)
}



// marry()
// baby()
