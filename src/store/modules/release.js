//import axios from 'axios'

const state = {
    tracklist: []
}

const getters = {
    tracklist: state => { return state.tracklist }
}

const mutations = {
    reset: function (state) {
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
