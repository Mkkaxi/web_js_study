// miniprogram/pages/index/index.js
import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    newGroupModal: false,
    groupName: ''

  },

  showNewGroupModal() {
    this.setData({
      newGroupModal: true
    })
  },

  onGroupNameChange(e) {
    this.setData({
      groupName: e.detail
    })
  },

  closeDialog() {
    this.selectComponent('#new-group-modal').close()
  },

  createGroup() {
    const self = this
    if (this.data.groupName === '') {
      Notify({
        message: '起个名字吧',
        duration: 2000,
        selector: '#notify-selector',
        background: '#dc3545'
      })
      self.selectComponent("#new-group-modal").stopLoading()
      return
    }

    // 调用云函数
    wx.cloud.callFunction({
      name: 'createGroup',
      data: {
        groupName: self.data.groupName
      },
      success(res) {
        console.log(res);
        self.setData({
          groupName: '',
          newGroupModal: false
        })

        Notify({
          message: '新建成功',
          duration: 2000,
          selector: '#notify-selector',
          background: '#28a745'
        })

        setTimeout(() => {
          wx.switchTab({
            url: '/pages/group/group'
          })
        })
      },
      fail(error) {
        console.log(error);
      }

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})