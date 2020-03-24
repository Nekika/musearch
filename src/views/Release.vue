<template>
    <div>
        <h3>
            <span>{{ artists }}</span>
        </h3>
        <img :src="cover" :alt="artists">
        <ol>
            <li v-for="(track, index) in tracklist" :key="index">{{ track.title }}</li>
        </ol>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "Releases",
        props: ['id'],
        computed: {
          ...mapGetters({
              cover: 'release/cover',
              tracklist: 'release/tracklist',
              artists: 'release/artists'
          })
        }
    }
</script>

<style lang="sass" scoped>
    @import '../sass/list'

    h3:first-of-type
        text-align: center
    img
        max-width: 80%
        height: auto
        display: flex
        margin: auto

    ol
        margin-top: 30px
        overflow: scroll
        height: fit-content
        @media (max-height: 568px)
            max-height: 355px
        @media (min-height: 569px) and (max-height: 640px)
            max-height: 425px
        @media (min-height: 641px) and (max-height: 667px)
            max-height: 455px
        @media (min-height: 668px) and (max-height: 731px)
            max-height: 515px
        @media (min-height: 732px) and (max-height: 736px)
            max-height: 524px
        @media (min-height: 737px) and (max-height: 823px)
            max-height: 275px
        @media (min-height: 824px) and (max-height: 1024px)
            max-height: 805px


</style>