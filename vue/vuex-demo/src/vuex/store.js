import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

const getters = {
  count: (state) => {
    return state.count += 10
  }
}

const actions = {
  addActions(context) {
    context.commit('add')
  }
}

const mutations = {
  add(state) {
    state.count++
  },
  reduce(state) {
    state.count--
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})