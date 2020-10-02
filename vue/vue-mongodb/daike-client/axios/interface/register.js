import axios from '../api'

const register = data => {
  return axios({
    url: '/register',
    method: 'post',
    data
  })
}

export default {
  register
}