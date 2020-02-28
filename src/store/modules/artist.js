import axios from 'axios'

const state = {
    id: null,
    releases: [],
    recordings: [],
    relIndex: 0,
    recIndex: 0
}

const mutations = {
    setReleases: function (state, releases){
        state.releases = state.releases.concat(releases)
    },
    setRecordings: function (state, recordings) {
        state.recordings = state.recordings.concat(recordings)
    },
    incRelIndex: function (state) {
        state.relIndex++
    },
    incRecIndex: function (state) {
        return new Promise((resolve, reject) => {
            try {
                state.recIndex++
                resolve()
            } catch (e) {
                reject(e)
            }
        })
    }
}

const actions = {
    getReleases: function ({state}, id) {
        const os = state.relIndex * 25
        const url = `http://musicbrainz.org/ws/2/release?artist=${id}&offset=${os}&fmt=json`
        return axios.get(url)
    },
    getRecordings: function ({state}, id) {
        const os = state.recIndex * 25
        const url = `http://musicbrainz.org/ws/2/recording?artist=${id}&offset=${os}&fmt=json`
        return axios.get(url)
    },
    getData: function ({dispatch, commit}, id) {
        const promises = [
            dispatch('getReleases', id),
            dispatch('getRecordings', id)
        ]
        Promise.all(promises)
            .then(responses => {
                const releases = responses[0].data.releases
                const recordings = responses[1].data.recordings
                commit('setReleases', releases)
                commit('setRecordings', recordings)
            })
            .catch(err => {
                commit('setError', err, {root: true})
            })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}