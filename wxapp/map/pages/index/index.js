//index.js
//获取应用实例
const app = getApp()

Page({

  
  createBike: function() {
    let markers = this.data.markers
    for(let i = 0; i < 10; i++) {
      markers.push({
        iconPath: "../../img/bike.png",
        latitude: Math.random()/10000 + 28.714100,
        longitude: Math.random()/10000 + 115.828000,
        width: 30,
        height: 30
      })
    }

    for(let i = 0; i < 10; i++) {
      markers.push({
        iconPath: "../../img/bike.png",
        latitude: Math.random()/10000 + 28.713500,
        longitude: Math.random()/10000 + 115.827800,
        width: 30,
        height: 30
      })
    }

    for(let i = 0; i < 15; i++) {
      markers.push({
        iconPath: "../../img/bike.png",
        latitude: Math.random()/500 + 28.714100,
        longitude: Math.random()/500 + 115.828000,
        width: 30,
        height: 30
      })
    }
    this.setData({
      markers:markers
    })
    
  },
  
  data: {
    markers: [{
      iconPath: "../../img/bike.png",
      latitude: 28.714180,
      longitude: 115.828400,
      width: 30,
      height: 30
    },
    {
      iconPath: "../../img/bike.png",
      latitude: 28.714100,
      longitude: 115.828000,
      width: 30,
      height: 30
    }
  ],

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {

    this.createBike()

    console.log(app.globalData.statusBarHeight);
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
