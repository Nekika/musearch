import axios from 'axios'

const state = {
    releases: null,
    recordings: null,
}

const mutations = {
    setReleases: function (state, releases){
        state.releases = releases
    },
    setRecordings: function (state, recordings) {
        state.recordings = recordings
    }
}

const actions = {
    getReleases: function ({commit}) {

    }
}