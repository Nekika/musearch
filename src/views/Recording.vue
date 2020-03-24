<template>
    <div>
        <h3>
            <span v-for="(artist, index) in artists" :key="index">
                {{ artist.name }}
            </span>
        </h3>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "Recording",
        props: ['id'],
        computed: {
            ...mapGetters({
                release: 'recording/release',
                artists: 'recording/artists'
            })
        }
    }
</script>

<style scoped>

</style>