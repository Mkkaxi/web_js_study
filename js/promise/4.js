function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('aaa');
      resolve('sssssssss')
    }, 1000)
  })
}

function b() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('bbb');
      reject('s')
    }, 1500)
  })
}

function c() {
  setTimeout(() => {
    console.log('ccc');
  }, 500)
}

function d() {
  setTimeout(() => {
    console.log('ddddddd');
  }, 700)
}


//  finally  不管promise最后的状态是什么，都能走进finally里
a().then(b).catch(c).finally(d)

// all
Promise.all([c(),d()]).then()

// race 
Promise.race([c(),d()]).then()
