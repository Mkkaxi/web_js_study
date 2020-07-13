var bird = {
  flyTimer: null, //控制小鸟飞翔的定时器
  wingTimer: null, //小鸟翅膀摆动的定时器

  div: document.createElement('div'),
  showBird: function(parentObj) {
    this.div.style.width = '40px'
    this.div.style.height = '28px'
    this.div.style.backgroundImage = 'url(img/bird0.png)'
    this.div.style.backgroundRepeat = 'no-repeat'
    this.div.style.position = 'absolute'
    this.div.style.left = '50px'
    this.div.style.top = '200px'
    this.div.style.zIndex = '1'
    // 将小鸟的div插入到游戏界面中
    parentObj.appendChild(this.div)
  },
}