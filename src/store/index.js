import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import search from './modules/search';
import entity from './modules/entity'
import artist from './modules/artist'
import release from './modules/release'

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

const getters = {
  loading: state => {return state.loading}
}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  modules: {
    search,
    entity,
    artist,
    release
  }
})

export default store
