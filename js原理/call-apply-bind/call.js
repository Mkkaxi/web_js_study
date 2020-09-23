Function.prototype.myCall = function (context) {
  // this指向调用call的对象
  if (typeof this !== 'function') {
    throw Error 
  }

  const fn = Symbol('fn')
  const args = [...arguments].slice(1)
  context = context || window
  // 将调用call函数的对象添加到context的属性中

  context[fn] = this
  // 执行该属性
  const result = context[fn](...args)
  // 删除该属性
  delete context[fn]
  // 返回执行结果
  return result
}