var baseObj = {
  randomNum: function(min, max) { //生成随机数
    return parseInt( Math.random() * (max - min + 1) + min )

  }
}