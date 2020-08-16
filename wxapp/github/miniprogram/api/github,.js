const trendings = () => new Promise((resolve, reject) => {
  const url = ''
  wx.request({
    url,
    data: {
      language: 'all'
    },

    success: function(res){
      // success
    },
    fail: function() {
      // fail
    },
    complete: function() {
      // complete
    }
  })
})

const getRepo = () => new Promise((resolve, reject) => {
  
})

module.exports = {
  trendings,
  getRepo
}