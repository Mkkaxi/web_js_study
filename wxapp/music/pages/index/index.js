//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    banners: [],
    recommendList: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.request({
      url: 'http://neteasecloudmusicapi.zhaoboy.com/banner',
      
      // 回调函数， 成功 200

      success: (data) => {
        console.log(data,'//////');
        this.setData({
          banners: data.data.banners
        })
      },

    })

    wx.request({
      url: 'http://neteasecloudmusicapi.zhaoboy.com/personalized',

      success: (res) => {
        // console.log(res);
        this.setData({
          recommendList: res.data.result
        })
      },
 
    })

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
