//index.js
const app = getApp()
const db = wx.cloud.database()
const productsCollection = db.collection('products')
Page({
  data: {
    products: []
  },

  gotoDetail(e) {
    
    productsCollection.doc(e.currentTarget.dataset.id).get().then(res => {
      console.log(res);
    })
  },

  onLoad() {
    productsCollection
    .get()
    .then(res => {
      // console.log(res.data);
      this.setData({
        products: res.data
      })
    })
  },
  
})
