<template>
    <div class="record-list">
        <h3>Records</h3>
        <RecordItem v-for="(record, index) in recordings" :key="index" :record="record"></RecordItem>
        <button @click="loadMore">Load more</button>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import RecordItem from "./RecordItem"

    export default {
        name: "RecordList",
        computed: {
            ...mapState({
                recordings: state => state.artist.recordings
            })
        },
        methods: {
            loadMore: function () {

            }
        },
        components: {
            RecordItem
        }
    }
</script>

<style scoped>

</style>