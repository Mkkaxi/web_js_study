import axios from '../api'

const login = (data) => {
  return axios({
    url: '/login',
    method: 'post',
    data
  })
}


export default {
  login
}