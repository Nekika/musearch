import axios from 'axios'

const state = {
    cover: "",
    artists: [],
    tracklist: []
}

const getters = {
    cover: state => { return state.cover },
    tracklist: state => { return state.tracklist },
    artists: state => {
        let res = []
        state.artists.forEach(a => res.push(a.name))
        return res.join(' x ')
    }
}

const mutations = {
    setTracklist: function(state, tracklist){
      state.tracklist = tracklist
    },
    setArtists: function(state, artists){
      state.artists = artists
    },
    setCover: function (state, cover) {
        state.cover = cover
    },
    reset: function (state) {
        state.artists = []
        state.tracklist = []
    }
}

const actions = {
    getCover: function ({commit}, id) {
        const url = `http://coverartarchive.org/release/${id}`
        return new Promise((resolve, reject) => {
            axios.get(url)
                .then(res => {
                    commit('setCover', res.data.images[0].image)
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
    getData: function ({dispatch, commit}, id) {
        dispatch('getArtists', id)
            .then(() => { return dispatch('getCover', id)})
            .then(() => { return dispatch('getTracklist', id) })
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
