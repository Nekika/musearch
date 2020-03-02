<template>
    <Loader v-if="loading"></Loader>
    <div v-else class="details">
        <h2>{{ name }}</h2>
        <RecordList :id="id"></RecordList>
    </div>
</template>

<script>
    import {mapGetters, mapActions, mapMutations} from 'vuex'
    import Loader from "../components/Loader";
    import RecordList from "../components/RecordList";

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
                'artist/reset'
            ]),
            ...mapActions([
                'entity/getDetails',
                'entity/getData',
                'artist/getRecordings',
                'artist/getReleases'

            ])
        },
        created(){
            this['artist/reset']()
            this['entity/getDetails']({ id: this.id, type: this.type })
            this[`entity/getData`]({ id: this.id, type: this.type})
        },
        components: {
            Loader,
            RecordList
        }
    }
</script>

<style scoped>

</style>
