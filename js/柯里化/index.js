function sun(a, b, c) {
  console.log(a, b, c);
}

function curry(fn, len = fn.length) {
  return _curry.call(this, fn, len)
}

function _curry(fn, len, ...args) {
  return function(...params) {
    let _args = [...args, ...params]
    if(_args.length >= len) {
      return fn.apply(this, _args)
    } else {
      return _curry.call(this, fn, len, ..._args)
    }
  }
}

let _sum = curry(sum)

let A = _sum(1)
let B = A(2)
B(3)

function fn(a, b, c, d, e) {
  console.log(a, b, c, d, e);
}

let _fn = curry(fn)

_fn(1)(2)(3)(4)(5)


//  降低函数的通用性，提高函数的适用性
function checkByRegExp(regExp, string) {
  return regExp.test(string)
}

let _check = curry(checkByRegExp)
let checkCellPhone = _check(/^1\d{10}$/)
let checkEmail = _check(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/)

checkByRegExp(/^1\d{10}$/, '17826864511')  // 手机号校验
checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/, '652501825@qq.com')  // 邮箱校验


let list = [
  {
    name: 'aka'
  },
  {
    name: 'sss'
  }
]

let names = list.map(function(item) {
  return item.name
})

let prop = curry(function(key, obj) {
  return obj[key]
})

let names = list.map(prop('name'))
