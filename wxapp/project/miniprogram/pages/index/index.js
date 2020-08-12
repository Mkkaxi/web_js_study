//index.js
const app = getApp()
const db = wx.cloud.database()
const projects  = db.collection('projects')
Page({
  data: {
    title: '',
    images: []

  },
  changeTitle(e) {
    this.setData({
      title: e.detail
    })
  },

  Upload() {
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: res => {
        // success
        console.log(res);
        // 1. 本地地址
        // 2. 云端
        // 3. this.data.images []
        const images = []
        let idx = 0
        const tempFilePaths = res.tempFilePaths
        for (let filePath of tempFilePaths) {
          let tempFileName = (+ new Date() + Math.floor(Math.random() * 1000)) + '.png'
            wx.cloud.uploadFile({
            cloudPath: tempFileName,
            filePath: filePath,
            fail: error => {
              idx++
            },

            success: res => {
              idx++
              images.push(res.fileID)
              console.log(images);
              console.log(idx);
              if(idx == tempFilePaths.length) {
                console.log('图片上传完毕');
                this.setData({
                  images
                })
              }
            }

            

          })
        }

      },
      
    })
  },

  createProject() {
    projects.add({
      data: {
        title: this.data.title,
        images: this.data.images
      }
    })
    .then(res => {
      wx.showToast({
        title: '发布项目成功',
        icon: 'success'
      })
    })
    .catch(err => {
      wx.showToast({
        title: '发布项目失败',
        icon: 'error'
      })
    })

  }
})
