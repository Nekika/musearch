import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    types: ['artist', 'album', 'title', 'label'],
    selectedType: null,
    name: null,
    data: null
  },
  mutations: {
    setSelectedType: function (state, type) {
      state.selectedType = type
    },
    setData: function (state, data) {
      state.data = data
    },
    setName: function (state, name) {
      state.name = name
    }
  },
  actions: {
    init: function ({state, commit}) {
      commit('setSelectedType', state.types[0])
    },
    getData: async function ({state, commit}) {
      const url = `https://musicbrainz.org/ws/2/artist?query=name:${state.name}&fmt=json`
      const key = state.selectedType + 's'
      const res = await axios.get(url)
      const data = res.data[key][0]
      commit('setData', data)
    }
  }
})

export default store
