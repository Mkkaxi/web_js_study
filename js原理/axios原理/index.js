// axios(config)
// axios.method(url, data, config)


axios.interceptors.request.use(
  (config) => {
    // 在发送之前做些什么
    return config
  },
  (error) => {
    return error
  }

)

axios.interceptors.response.use(
  (res) => {
    // 对响应数据做些什么
    return config
  },
  (error) => {
    // 对响应错误做些什么
    return Promise.reject(error)
  }

)