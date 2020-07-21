// let [foo, [[bar], baz]] = [1, [[2], 3]];
// foo // 1
// bar // 2
// baz // 3

// let [ , , third] = ["foo", "bar", "baz"];
// third // "baz"

// let [x, , y] = [1, 2, 3];
// x // 1
// y // 3

// let [head, ...tail] = [1, 2, 3, 4];
// head // 1
// tail // [2, 3, 4]

// let [x, y, ...z] = ['a'];
// x // "a"
// y // undefined
// z // []


// // 报错
// let [foo] = 1;
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {};




// let [foo = true] = [];
// foo // true

// let [x, y = 'b'] = ['a']; // x='a', y='b'
// let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'



// let [x = 1, y = x] = [];     // x=1; y=1
// let [x = 1, y = x] = [2];    // x=2; y=2
// let [x = 1, y = x] = [1, 2]; // x=1; y=2
// let [x = y, y = 1] = [];     // ReferenceError: y is not defined



// let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
// baz // "aaa"

// let obj = { first: 'hello', last: 'world' };
// let { first: f, last: l } = obj;
// f // 'hello'
// l // 'world'



// let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
// baz // "aaa"
// foo // error: foo is not defined

// // 上面代码中，foo是匹配的模式，baz才是变量。真正被赋值的是变量baz，而不是模式foo。


let obj = {
  name: 'zi',
  desc: {
    age:'20',
    alone: 'false',
    sanwei: [50, 100, 150]
  }
}

  let {name,desc:{age,alone,sanwei: [x,y,z]}}= obj

console.log(name,age,alone,x,y,z);


//  !!!! 

// 错误的写法
// let x;
// {x} = {x: 1};
// SyntaxError: syntax error

// 正确的写法
// let x;
// ({x} = {x: 1});
(123).toString