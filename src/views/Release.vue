<template>
    <div>
        <h3>Recordings</h3>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: "Releases",
        props: ['id'],
        computed: {
          ...mapGetters({
              tracklist: 'release/tracklist'
          })
        },
        methods: {
            ...mapActions([
                'release/getTracklist'
            ])
        },
        created() {
            this['release/getTracklist'](this.id)
        }
    }
</script>

<style scoped>

</style>