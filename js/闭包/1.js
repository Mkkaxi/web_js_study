function test() {
  var arr = []
  for (var i = 0; i < 10; i++) {
    arr[i] = function () {
      var j = i
      console.log(j);
    }
  }
  return arr
}

var myArr = test()
for (var k = 0; k < 10; k++) {
  test()[k]()
}