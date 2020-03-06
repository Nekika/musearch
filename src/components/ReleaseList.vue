<template>
    <div class="release-list">
        <ul>
            <ReleaseItem v-for="(release, index) in releases" :key="index" :release="release"></ReleaseItem>
        </ul>
        <button class="btn" @click="loadMore">Load more</button>
    </div>
</template>

<script>
    import {mapGetters, mapActions, mapMutations} from 'vuex'
    import ReleaseItem from "./ReleaseItem";

    export default {
        name: "ReleaseList",
        props: ['id'],
        computed: {
            ...mapGetters({
                releases: 'artist/releases'
            })
        },
        methods: {
            ...mapMutations([
                'artist/incRelIndex',
            ]),
            ...mapActions([
                'artist/getReleases',
                'setError'
            ]),
            loadMore: function () {
                return new Promise((resolve, reject) => {
                    try { this['artist/incRelIndex']() } catch (e) { reject(e) }
                    resolve()
                })
                    .then(() => { this['artist/getReleases'](this.id) })
                    .catch(err => { this['setError'](err) })
            }
        },
        components: {
            ReleaseItem
        }
    }
</script>

<style lang="sass" scoped>
    .release-list
        @import "../sass/list"
</style>