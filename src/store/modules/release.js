import axios from 'axios'

const state = {
    artists: [],
    tracklist: []
}

const getters = {
    tracklist: state => { return state.tracklist },
    artists: state => { return state.artists }
}

const mutations = {
    setTracklist: function(state, tracklist){
      state.tracklist = tracklist
    },
    setArtists: function(state, artists){
      state.artists = artists
    },
    reset: function (state) {
        state.artists = []
        state.tracklist = []
    }
}

const actions = {
    getTracklist: function ({commit}, id) {
        const url = `http://musicbrainz.org/ws/2/recording?release=${id}&fmt=json`
        return new Promise((resolve, reject) => {
            axios.get(url)
                .then(res => {
                    commit('setTracklist', res.data.recordings)
                    resolve()
                })
                .catch(err => reject(err))
        })
    },
    getArtists: function ({commit}, id) {
        const url = `http://musicbrainz.org/ws/2/artist?release=${id}&fmt=json`
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
        dispatch('getTracklist', id)
            .then(() => { return dispatch('getArtists', id) })
            .catch(err => commit('setError', err, {root: true}))
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
