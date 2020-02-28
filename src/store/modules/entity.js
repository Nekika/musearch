import axios from 'axios'

const state = {
    details: null,
    error: null
}

const mutations = {
    setDetails: function (state, details){
        state.details = details
    },
    setError: function (state, error) {
        state.error = error
    }
}

const actions = {
    getDetails: function ({commit}, params) {
        commit('setLoading', true, {root: true})
        const url = `http://musicbrainz.org/ws/2/${params.type}?${params.type}=${params.id}?fmt=json`
        axios.get(url)
            .then(res => {
                commit('setDetails', res.data)
            })
            .catch(err => {
                commit('setError', err)
            })
            .finally(() => commit('setLoading', false, {root: true}))
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
