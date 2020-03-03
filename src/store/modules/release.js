//import axios from 'axios'

const state = {
    tracklist: []
}

const getters = {
    details: state => { return state.details }
}

const mutations = {
    setDetails: function ({state}, details) {
        state.details = details
    },
    reset: function ({state}) {
        state.tracklist = []
    }
}

const actions = {
    getData: function (context, id) {
        console.log(id);
        /*const url = `http://musicbrainz.org/ws/2/release?release=${id}&fmt=json`
        axios.get(url)
            .then(res => commit('setDetails', res.data))
            .catch(err => commit('setError', err, {root: true}))*/
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
