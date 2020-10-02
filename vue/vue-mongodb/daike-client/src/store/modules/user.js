const state = {
  user: {}
}

const getters = {
  user: state => state.user
}

const mutations = {
  SET_USER: (state, flag) => {
    state.user = flag
  }
}

const actions = {
  setUserInfo({ commit }, flag) {
    commit('SET_USER', flag)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}