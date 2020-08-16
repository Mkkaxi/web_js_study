//index.js
const app = getApp()
const github = require('../../api/github.js')
Page({
  data: {
    trends: []
  },


  onSearch: function(value) {
    console.log(value, '++++++++++');
  },

  onPullDownRefresh: function () {
    this.reloadData()
  },

  onLoad: function () {
    wx.startPullDownRefresh({})
  },

  reloadData: function() {

    // 数据 wx.request  collection.get()
    // 到api模块去做 

    github.trendings()
    .then()
    (since.value.toLowerCase(), 
    lang.value.toLowerCase()).then(data => {

    })
  }

})
