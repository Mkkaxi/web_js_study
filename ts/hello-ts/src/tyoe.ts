// 其他常见的数据类型

// any 
// let notSure: any = 4
// notSure = 'sas'

// // unknow
// let value: any
// value = true
// value = 1
// value = 'hello'
// value = Symbol('type')
// value = {}
// value = []


// let value2: unknown
// value2 = false
// value2 = true
// value2 = 1
// value2 = 'hello'



// never
// const empty: never[] = []

// function error(message: string): never {
//   throw new Error(message)
// }



// 数组
const list: string[] = [1, 2, 3]
const list1: Array<number> = [1, 2, 3]  // 泛型

// 元组
const list2: (string | number)[] = ['1', 2]