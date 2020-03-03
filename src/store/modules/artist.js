import axios from 'axios'

const state = {
    releases: [],
    recordings: [],
    relIndex: 0,
    recIndex: 0
}

const mutations = {
    addReleases: function (state, releases){
        state.releases = state.releases.concat(releases)
    },
    addRecordings: function (state, recordings) {
        state.recordings = state.recordings.concat(recordings)
    },
    incRelIndex: function (state) {
        state.relIndex++
    },
    incRecIndex: function (state) {
        state.recIndex++
    },
    reset: function (state) {
        state.releases = []
        state.recordings = []
        state.relIndex = 0
        state.recIndex = 0
    }
}

const getters = {
    releases: state => {return state.releases},
    recordings: state => {return state.recordings}
}

const actions = {
    getReleases: function ({state, commit}, id) {
        const os = state.relIndex * 25
        const url = `http://musicbrainz.org/ws/2/release?artist=${id}&offset=${os}&fmt=json`
        axios.get(url)
            .then(res => commit('addReleases', res.data.releases))
            .catch(err => commit('setError', err, {root: true}))
    },
    getRecordings: function ({state, commit}, id) {
        const os = state.recIndex * 25
        const url = `http://musicbrainz.org/ws/2/recording?artist=${id}&offset=${os}&fmt=json`
        axios.get(url)
            .then(res => commit('addRecordings', res.data.recordings))
            .catch(err => commit('setError', err, {root: true}))
    },
    getData: function ({dispatch}, id) {
        dispatch('getReleases', id)
        dispatch('getRecordings', id)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
