import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import search from './modules/search';
import entity from './modules/entity'

Vue.use(Vuex)

const state = {
  loading: true
}

const mutations = {
  setLoading: function (state, loading) {
    state.loading = loading
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  modules: {
    search,
    entity
  }
})

export default store
