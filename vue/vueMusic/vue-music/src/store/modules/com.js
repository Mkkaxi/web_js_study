import * as type from '../types'

const state = {
  showSidebar: false,
  searchHistory: []
}

const getters = {
  showSidebar: state => state.showSidebar,
  searchHistory: state => state.searchHistory
}

const mutations = {
  [type.COM_SHOW_SIDE_BAR](state, status) {
    state.showSidebar = status
  },
  [type.COM_DELETE_SEARCH_HISTORY](state, index) {
    state.searchHistory.splice(index, 1)
  },
  [type.COM_CLEAR_SEARCH_HISTORY](state) {
    state.searchHistory = []
  },
  [type.COM_SAVE_SEARCH_HISTORY](state, payload) {
    state.searchHistory = payload
  }
}

const actions = {
  setShowSidebar({ commit }, status) {
    commit(type.COM_SHOW_SIDE_BAR, status)
  },
  deleteSearchHistory({ commit }, index) {
    commit(type.COM_DELETE_SEARCH_HISTORY, index)
  },
  clearSearchHistory({ commit }) {
    commit(type.COM_CLEAR_SEARCH_HISTORY)
  },
  saveSearchHistory({ commit, state }, query) {
    let song = new Set()
    state.searchHistory.unshift(query)
    song = [...state.searchHistory]
    commit(type.COM_SAVE_SEARCH_HISTORY, song)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

