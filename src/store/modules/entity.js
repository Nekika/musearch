import axios from 'axios'

const state = {
    id: null,
    details: null
}

const mutations = {
    setId: function (state, id) {
        state.id = id
    },
    setDetails: function (state, details){
        state.details = details
    }
}

const actions = {
    getDetails: function (context, params) {
        const url = `http://musicbrainz.org/ws/2/${params.type}/${params.id}?fmt=json`
        return axios.get(url)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
