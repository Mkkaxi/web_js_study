import axios from 'axios'

const service = axios.create({
  baseURL: '/api'
})

service.interceptors.request.use( config => {
  return config
})

service.interceptors.response( response => {
  return response.data
})

export default service