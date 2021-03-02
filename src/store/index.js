import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: localStorage.city || '北京',
    detailData: '',
    detailList: ''
  },
  mutations: {
    changCity (state, i) {
      state.city = i
      localStorage.city = i
    },
    detailData (state, res) {
      state.detailData = res.data.data
      state.detailList = res.data.data.categoryList
    }
  },
  actions: {
    detailInfo (context) {
      axios.get('/api/detail.json')
        .then((res) => {
          context.commit('detailData', res)
        })
        .catch(() => {
          console.log('请求失败')
        })
    }
  }
})
