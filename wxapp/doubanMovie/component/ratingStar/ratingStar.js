// component/ratingStar/ratingStar.js
// const STAR_ON = "/assets/img/rating_star_small_on.png"
// const STAR_OFF = "/assets/img/rating_star_small_off.png"
// const STAR_HALF = "/assets/img/rating_star_small_half.png"
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    score: {
      type: Number,
      observer: function() {

      }
    },

    iconSize: {
      type: String,
      value: '26rpx'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    starsUrl: []
  },

  lifetimes: {
    attached: function() {
      let num = Math.floor(this.data.score)
      let remainder = this.data.score - num
      let starsUrl = this.data.starsUrl

      if(this.data.score > 5) {  //评分5分以上执行满星
        for(let i = 0; i < 5; i++) {
          starsUrl[i] = '/assets/img/rating_star_small_on.png'
        }
      }
      else if (this.data.score < 0) {    //评分0分一下执行无星
        for(let i = 0; i < 5; i++) {
          starsUrl[i] = '/assets/img/rating_star_small_off.png'
        }
      } 
      else {    // 评分在0到5分之间执行逻辑
        for (let i = 0; i < num; i++) {   //整数部分放满星图url
          starsUrl[i] = '/assets/img/rating_star_small_on.png'
        }
  
        if(remainder > 0) {  // 评分存在余数则加入半颗星图片url
          starsUrl.push('/assets/img/rating_star_small_half.png')
          for (let j = 0; j < 5-num-1; j++) {
            starsUrl.push('/assets/img/rating_star_small_off.png')
          }
        } 
        else {  //评分不存在余数则剩下的为无星图片
          for (let j = 0; j < 5-num; j++) {
            starsUrl.push('/assets/img/rating_star_small_off.png')
          }
        }
      }

      

      this.setData({
        starsUrl
      })

    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
  }
})
