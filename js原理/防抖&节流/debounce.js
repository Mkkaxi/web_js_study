function debounce(func, delay) {
  // 利用闭包保存定时器
  let timer
  return function() {
    // 在规定的时间内再次触发会清除定时器后再重设定时器
    if(timer) {
      clearInterval(timer)
    }

    timer = setTimeout(() => {
      func.apply(this, arguments)
    }, delay)
  }

}

window.onscroll = function() {
  console.log(1);
}