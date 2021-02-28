import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: localStorage.city || '北京'
  },
  mutations: {
    changCity (state, i) {
      state.city = i
      localStorage.city = i
    }
  }
})
