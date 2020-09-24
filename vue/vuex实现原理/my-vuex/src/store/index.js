import Vue from 'vue'
import Vuex from './myVuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 199
  },
  getters: {
    getCount: state => state.count * 100
  },
  mutations: {
    addCount(state, num) {
      state.count += num
    },
    reduceCount(state, num) {
      state.count -= num
    }
  },
  actions: {
    getReduceCount(context, num) {
      context.commit('reduceCount', num)
    }
  },
  modules: {
  }
})
