import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

// Modules
import entity from './modules/entity'

Vue.use(Vuex)

const state = {
  loading: false,
  error: null,
  types: ['artist', 'recording', 'release', 'label'],
  selectedType: null,
  results: null
}

const mutations = {
  setSelectedType: function (state, type) {
    state.selectedType = type
  },
  setResults: function (state, results) {
    state.results = results
  },
  setError: function (state, error) {
    state.error = error
  },
  toggleLoading: function (state) {
    state.loading = !state.loading
  }
}

const actions = {
  init: function ({state, commit}) {
    commit('setSelectedType', state.types[0])
  },
  getResults: function ({commit}, params) {
    const url = `http://musicbrainz.org/ws/2/${params.type}?query=name:${params.name}&fmt=json`
    axios.get(url)
        .then(res => {
          const key = params.type + 's'
          commit('setResults', res.data[key])
        })
        .catch(err => {commit('setError', err)})
        .finally(() => commit('toggleLoading'))
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    entity
  }
})

export default store
