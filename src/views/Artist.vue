<template>
    <div>
        <ReleaseList :id="id"></ReleaseList>
        <RecordList :id="id"></RecordList>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import RecordList from "../components/RecordList"
    import ReleaseList from "../components/ReleaseList"
    export default {
        name: "Artist",
        props: ['id'],
        computed: {
            ...mapGetters({
                releases: 'artist/releases',
                recordings: 'artist/recordings',
            })
        },
        methods: {
            ...mapActions([
                'artist/getData'
            ])
        },
        created() {
            this['artist/getData'](this.id)
        },
        components: {
            RecordList,
            ReleaseList
        }
    }
</script>

<style scoped>

</style>