import axios from 'axios'

const state = {
    details: {}
}

const mutations = {
    setDetails: function (state, details){
        state.details = details
    }
}

const getters = {
    name: state => {
        return state.details.name || state.details.title
    }
}

const actions = {
    getDetails: function ({commit}, params) {
        const url = `http://musicbrainz.org/ws/2/${params.type}/${params.id}?fmt=json`
        return new Promise((resolve, reject) => {
            axios.get(url)
                .then(res => {
                    commit('setDetails', res.data)
                    resolve()
                })
                .catch(err => reject(err))
        })
    },
    getData: function ({dispatch}, params) {
        dispatch(`${params.type}/getData`, params.id, {root: true})
    },
    reset: function ({commit}, type) {
        commit(`${type}/reset`, null, {root: true})
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
