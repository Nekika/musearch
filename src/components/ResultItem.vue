<template>
    <li class="result-item">
        <h4 @click="goToDetails">{{ name }}</h4>
        <ul class="info">
            <li v-if="type === 'artist'"><i class="fas fa-info-circle"></i>{{ about }}</li>
            <li v-if="type === 'artist'"><i class="fas fa-globe"></i>{{ country }}</li>
            <li v-if="type === 'release' || type === 'recording'"><i class="fas fa-users"></i>{{ artist }}</li>
            <li v-if="type === 'recording'"><i class="fas fa-compact-disc"></i>{{ release }}</li>
        </ul>
    </li>
</template>

<script>
    import {mapMutations, mapGetters} from 'vuex'
    export default {
        name: "ResultItem",
        props: ['result'],
        computed: {
            ...mapGetters({
                type: 'search/selectedType'
            }),
            id: function () {
                return this.result.id
            },
            name: function () {
                return this.result.name || this.result.title
            },
            about: function () {
                return this.result.disambiguation || 'no informations'
            },
            country: function () {
                return this.result.country || 'unknown'
            },
            artist: function () {
                const artists = []
                this.result['artist-credit'].forEach(a => artists.push(a.name))
                return artists.join(' & ') || 'unknown'
            },
            release: function () {
                return this.result.releases[0].title || 'unknown'
            }
        },
        methods: {
            ...mapMutations(['setLoading']),
            goToDetails: function () {
                this['setLoading'](true)
                this.$router.push({name:'details', params: {id: this.id}})
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import '../sass/scheme'
    .result-item
        background-color: $lightgrey
        color: $blue
        padding: 4px
        h4
            width: fit-content
            &:hover
                cursor: pointer
                text-decoration: underline
        .info
            padding: 0
            overflow: hidden
            li
                list-style: none
                svg
                    margin-right: 5px
</style>
