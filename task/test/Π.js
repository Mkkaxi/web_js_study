function pai(num) {
  let pai = 0
  for (let i = 0; i < num; i++) {
    pai = pai + (jiecheng(i) / fenmu(i))
  }
  return  pai * 2
}

function jiecheng(a) {
  if(a == 0) return 1
  let b = 1
  for(let i = 1; i <= a; i++) {
    b = b * i
  }
  return b
}

function fenmu(a) {
  if (a == 0) return 1
  let b = 1
  for (let i = 0; i <= a; i++) {
      b = b * ((2*(i+1)) - 1)
  }
  return b
}
// console.log(jiecheng(1) / fenmu(1));
console.log(pai(50));

// console.log(jiecheng(3));