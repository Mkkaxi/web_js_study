import Vue from 'vue'
import axios from 'axios'

const vue = new Vue()

// axios 配置

axios.defaults.timeout = 10000
axios.defaults.baseUrl = 'http://localhost:3000'

// 返回状态判断 （响应拦截）
axios.interceptors.response.use(
  (res) => {
    if (res.data.code !== 200) {
      vue.$toast('网络异常')
      return Promise.reject(res)
    }
    return res
  },
  (error) => {
    vue.$toast('服务器异常')
    return Promise.reject(error)
  }

)

export function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: param
    })
    .then(
      response => {
        resolve(response)
      },
      err => {
        reject(err)
      }
    )
    .catch(error => {
      reject(error)
    })
  })
}

export default {
  // 用户登录
  Login(params) {
    return fetchGet('/login', params)
  },
  HotSearchKey() {
    return fetchGet('/search/hot')
  }
}
