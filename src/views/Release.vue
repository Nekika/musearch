<template>
    <div>
        <h3>
            <span v-for="(artist, index) in artists" :key="index">
                {{ artist.name }}
            </span>
        </h3>
        <h3>Recordings</h3>
        <ul>
            <li v-for="(track, index) in tracklist" :key="index">{{ track.title }}</li>
        </ul>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: "Releases",
        props: ['id'],
        computed: {
          ...mapGetters({
              tracklist: 'release/tracklist',
              artists: 'release/artists'
          })
        },
        methods: {
            ...mapActions([
                'release/getData'
            ])
        },
        created() {
            this['release/getData'](this.id)
        }
    }
</script>

<style scoped>

</style>