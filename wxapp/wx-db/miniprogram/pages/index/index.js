//index.js
const app = getApp()
const db = wx.cloud.database()
const productsCollection = db.collection('products')
Page({
  uploadAvatar() {
    // 上传图片 选择上传类型
    // 得到图片
    // 上传到云服务器
    // 硬件
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: res => {
        // success
        // console.log(res.tempFilePaths);
        for (let filePath of res.tempFilePaths) {
          let currentFileName = Math.floor(Math.random()*1000000).toString() + '.png'
          wx.cloud.uploadFile({
            cloudPath: currentFileName,
            filePath,
            success: res => {
              console.log(res);
            }
          })

        }
      },
      
    })

  },

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
