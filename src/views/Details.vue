<template>
    <Loader v-if="loading"></Loader>
    <div v-else class="details">
        <h2>{{ name }}</h2>
        <RecordList :id="id"></RecordList>
        <ReleaseList :id="id"></ReleaseList>
    </div>
</template>

<script>
    import {mapGetters, mapActions, mapMutations} from 'vuex'
    import Loader from "../components/Loader";
    import RecordList from "../components/RecordList";
    import ReleaseList from "../components/ReleaseList";

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
                'setLoading',
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
        },
        mounted() {
            this[`entity/getData`]({ id: this.id, type: this.type})
            this['setLoading'](false)
        },
        components: {
            Loader,
            RecordList,
            ReleaseList
        }
    }
</script>

<style scoped>

</style>
