<template>
    <Loader v-if="loading"></Loader>
    <div v-else class="details">
        <h2>{{ name }}</h2>
        <Artist v-if="type === 'artist'" :id="id"></Artist>
        <Release v-else-if="type === 'release'" :id="id"></Release>
        <Recording v-else-if="type === 'recording'" :id="id"></Recording>
    </div>
</template>

<script>
    import {mapGetters, mapActions, mapMutations} from 'vuex'
    import Loader from "../components/Loader"
    import Artist from "./Artist"
    import Release from "./Release"
    import Recording from "./Recording"

    export default {
        name: "Details",
        props: ['id'],
        computed: {
            ...mapGetters({
                loading: 'loading',
                type: 'search/selectedType',
                name: 'entity/name',
            })
        },
        methods: {
            ...mapMutations([
                'setLoading',
                'setError'
            ]),
            ...mapActions([
                'entity/reset',
                'entity/getDetails',
                'entity/getData'
            ])
        },
        created(){
            const params = { id: this.id, type: this.type }
            this['entity/reset'](params.type)
            this['entity/getDetails']({ id: this.id, type: this.type })
                .then(() => { return this['entity/getData'](params) })
                .catch(err => this['setError'](err))
                .finally(this['setLoading'](false))
        },
        components: {
            Loader,
            Artist,
            Release,
            Recording
        }
    }
</script>

<style lang="sass" scoped>
    @import '../sass/scheme'

    .details
        color: $blue
        margin: 20px 10px 0 10px
        h2
            text-align: center
            font-weight: bold
</style>
