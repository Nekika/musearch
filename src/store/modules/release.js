import axios from 'axios'

const state = {
    tracklist: []
}

const getters = {
    tracklist: state => { return state.tracklist }
}

const mutations = {
    setTracklist: function(state, tracklist){
      state.tracklist = tracklist
    },
    reset: function (state) {
        state.tracklist = []
    }
}

const actions = {
    getTracklist: function ({commit}, id) {
        const url = `http://musicbrainz.org/ws/2/release/${id}?inc=recordings&fmt=json`
        return new Promise((resolve, reject) => {
            axios.get(url)
                .then(res => {
                    commit('setTracklist', res.data.media[0].tracks)
                    resolve()
                })
                .catch(err => reject(err))
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
