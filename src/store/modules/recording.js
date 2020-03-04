import axios from 'axios'

const state = {
    artists: [],
    release: {}
}

const mutations = {
    setRelease: function (state, release) {
        state.release = release
    },
    setArtists: function(state, artists){
        state.artists = artists
    },
    reset: function (state) {
        state.artists = []
        state.release = {}
    }
}

const getters = {
    release: state => { return state.release },
    artists: state => { return state.artists }
}

const actions = {
    getRelease: function ({commit}, id) {
        const url = `http://musicbrainz.org/ws/2/release?recording=${id}&fmt=json`
        return new Promise((resolve, reject) => {
            axios.get(url)
                .then(res => {
                    commit('setRelease', res.data.releases[0])
                    resolve()
                })
                .catch(err => reject(err))
        })
    },
    getArtists: function ({commit}, id) {
        const url = `http://musicbrainz.org/ws/2/artist?recording=${id}&fmt=json`
        return new Promise((resolve, reject) => {
            axios.get(url)
                .then(res => {
                    commit('setArtists', res.data.artists)
                    resolve()
                })
                .catch(err => reject(err))
        })
    },
    getData: function ({dispatch, commit}, id) {
        dispatch('getRelease', id)
            .then(() => { return dispatch('getArtists', id) })
            .catch(err => commit('setError', err, {root: true}))
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}