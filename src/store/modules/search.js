import axios from "axios";

const state = {
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
    }
}

const actions = {
    init: function ({state, commit}) {
        commit('setSelectedType', state.types[0])
    },
    getResults: function ({commit}, params) {
        commit('setLoading', true, {root: true})
        const url = `http://musicbrainz.org/ws/2/${params.type}?query=name:${params.name}&fmt=json`
        axios.get(url)
            .then(res => {
                const key = params.type + 's'
                commit('setResults', res.data[key])
            })
            .catch(err => commit('setError', err, {root: true}))
            .finally(() => commit('setLoading', false, {root: true}))
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}