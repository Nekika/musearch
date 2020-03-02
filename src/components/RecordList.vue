<template>
    <div class="record-list">
        <h3>Records</h3>
        <RecordItem v-for="(record, index) in recordings" :key="index" :record="record"></RecordItem>
        <button @click="loadMore">Load more</button>
    </div>
</template>

<script>
    import {mapGetters, mapActions, mapMutations} from 'vuex'
    import RecordItem from "./RecordItem"

    export default {
        name: "RecordList",
        props: ['id'],
        computed: {
            ...mapGetters({
                recordings: 'artist/recordings'
            })
        },
        methods: {
            ...mapMutations([
                'artist/incRecIndex',
            ]),
            ...mapActions([
                'artist/getRecordings',
                'setError'
            ]),
            loadMore: function () {
                return new Promise((resolve, reject) => {
                    try { this['artist/incRecIndex']() } catch (e) { reject(e) }
                    resolve()
                })
                .then(() => { this['artist/getRecordings'](this.id) })
                .catch(err => { this['setError'](err) })
            }
        },
        components: {
            RecordItem
        }
    }
</script>

<style scoped>

</style>