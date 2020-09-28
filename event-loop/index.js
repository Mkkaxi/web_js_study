// setTimeout(() => {
//   console.log(1);
// }, 0)

// new Promise((resolve, reject) => {
//   console.log(2);
// })


console.log('script start');

async function async1() {
  await async2()
  console.log('async1 end');
}

async function async2() {
  console.log('async2 end');
}
async1()

setTimeout(() => {
  console.log('setTimeout');
}, 0)

new Promise(resolve => {
  console.log('Promise');
  resolve()
})
.then(() => {
  console.log('promise1');
})
.then(() => {
  console.log('promise2');
})

console.log('script end');