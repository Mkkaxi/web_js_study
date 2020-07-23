// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [],
    totalPrice: 0,
    // colorSelect:'red',
    selectAllStatus: 'true'
  },

  getTotalPrice() {
    let carts = this.data.carts
    let total = 0
    
    for(let i = 0; i < carts.length; i++) {
      if(carts[i].selected) {
        total = total + (carts[i].num * carts[i].price)
      }
    }
    this.setData({
      totalPrice: total.toFixed(2)
    })
  },


  selectedList(e) {
    // console.log(e);
    let index = e.currentTarget.dataset.index
    let selected = `carts[${index}].selected` // selected为拼接字符串


    this.setData({
      [selected]: !this.data.carts[index].selected
    })

    let carts = this.data.carts
    for (let i = 0; i < carts.length; i++) {
      if(!carts[i].selected) {
        this.setData({
          selectAllStatus: false
        })
        break;
      }
      else {
        this.setData({
          selectAllStatus: true
        })
      }
    }

    this.getTotalPrice()

  },

  selectAll() {              //控制全选按钮的点击事件
    // 来回改变数据源中的selectAllStatus
    let selectAllStatus = this.data.selectAllStatus
    selectAllStatus = !selectAllStatus
    //把carts数组里面的每一条数据里面的selected改成false
      let carts = this.data.carts
      for(let i = 0; i < carts.length; i++) {
        carts[i].selected = selectAllStatus
      }

    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    })
    
    this.getTotalPrice()
  },                    

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log('onLoad');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log('onReady');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log('onShow');
    setTimeout(() => {
      this.setData({
        carts: [{
            id: 1,
            title: '新鲜芹菜 半斤',
            image: '/image/s5.png',
            num: 4,
            price: 0.01,
            selected: true
          },
          {
            id: 2,
            title: '素米 500g',
            image: '/image/s6.png',
            num: 1,
            price: 0.03,
            selected: true
          }]
      })
      this.getTotalPrice()
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // console.log('onHide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // console.log('onUnload');
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