
// js 是单线程的

function a() {
  console.log('name');
}

function b() {
  setTimeout(() => {
    console.log('age');
  }, 1000)
}

function c() {
  console.log('sex');
}

b()
a()