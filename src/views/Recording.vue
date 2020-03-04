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
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: "Recording",
        props: ['id'],
        computed: {
            ...mapGetters({
                release: 'recording/release',
                artists: 'recording/artists'
            })
        },
        methods: {
            ...mapActions([
                'recording/getData'
            ])
        },
        created() {
            this['recording/getData'](this.id)
        }
    }
</script>

<style scoped>

</style>