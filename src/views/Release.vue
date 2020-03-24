<template>
    <div>
        <h3>
            <span>{{ artists }}</span>
        </h3>
        <img :src="cover" :alt="artists">
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
              cover: 'release/cover',
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

<style lang="sass" scoped>
    h3:first-of-type
        text-align: center
    img
        max-width: 95%
        height: auto
        display: flex
        margin: auto

    
</style>