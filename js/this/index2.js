// function foo() {
//   console.log(this.a);
// }

// var obj = {
//   a: 2,
//   // foo: foo
// }

// foo.apply(obj)  // call bind



// var a = {
//   user: 'wn',
//   fn: function(q, w) {
//     console.log(this.user);
//     console.log(q + w);
//   }
// }

// var b = a.fn
// b.call(a, 1, 2)



// var a = {
//   user: 'wn',
//   fn: function(q, w) {
//     console.log(this.user);
//     console.log(q + w);
//   }
// }

// var b = a.fn
// b.apply(a, [1, 2])


var a = {
  user: 'wn',
  fn: function() {
    console.log(this.user);
  }
}

var b = a.fn;

b.bind(a)  // bind 返回一个函数体
