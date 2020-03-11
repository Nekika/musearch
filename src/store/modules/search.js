import axios from "axios";

const state = {
    error: null,
    types: ['artist', 'recording', 'release'],
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

const getters = {
    types: state => {return state.types},
    selectedType: state => {return state.selectedType},
    placeholder: state => {
        const a = state.selectedType === 'artist' ? 'an' : 'a'
        return `type the name of ${a} ${state.selectedType}`
    },
    results: state => {return state.results},
}

const actions = {
    init: function ({state, commit}) {
        commit('setSelectedType', state.types[0])
    },
    getResults: function ({commit}, params) {
        commit('setLoading', true, {root: true})
        const url = `http://musicbrainz.org/ws/2/${params.type}?query=name:${params.name}&limit=10&fmt=json`
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
    getters,
    mutations,
    actions
}
