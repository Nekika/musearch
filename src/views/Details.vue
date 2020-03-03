<template>
    <Loader v-if="loading"></Loader>
    <div v-else class="details">
        <h2>{{ name }}</h2>
        <Artist v-if="type === 'artist'" :id="id"></Artist>
    </div>
</template>

<script>
    import {mapGetters, mapActions, mapMutations} from 'vuex'
    import Loader from "../components/Loader";
    import Artist from "./Artist";

    export default {
        name: "Details",
        props: ['id'],
        computed: {
            ...mapGetters({
                loading: 'loading',
                type: 'search/selectedType',
                name: 'entity/name',
                releases: 'artist/releases',
                recordings: 'artist/recordings',
            })
        },
        methods: {
            ...mapMutations([
                'setLoading'
            ]),
            ...mapActions([
                'entity/reset',
                'entity/getDetails',
                'entity/getData'
            ])
        },
        created(){
            this['entity/reset'](this.type)
            this['entity/getDetails']({ id: this.id, type: this.type })
        },
        mounted() {
            this[`entity/getData`]({ id: this.id, type: this.type})
            this['setLoading'](false)
        },
        components: {
            Loader,
            Artist
        }
    }
</script>

<style scoped>

</style>
