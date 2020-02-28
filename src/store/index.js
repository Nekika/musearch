import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import search from './modules/search';
import entity from './modules/entity'
import artist from './modules/artist'

Vue.use(Vuex)

const state = {
  loading: true,
  error: null
}

const mutations = {
  setLoading: function (state, loading) {
    state.loading = loading
  },
  setError: function (state, error) {
    state.error = error
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  modules: {
    search,
    entity,
    artist
  }
})

export default store
