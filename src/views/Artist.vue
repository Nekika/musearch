<template>
    <div class="artist-view">
        <h3>
            <span :class="visible ? 'passive' : 'active'"
                  @click="setVisible(0)">
                Releases
            </span>
            <span :class="visible ? 'active' : 'passive'"
                  @click="setVisible(1)">
                Recordings
            </span>
        </h3>
        <ReleaseList v-if="!visible" :id="id" @clicked="setVisible"></ReleaseList>
        <RecordList v-else :id="id" @clicked="setVisible"></RecordList>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import RecordList from "../components/RecordList"
    import ReleaseList from "../components/ReleaseList"
    export default {
        name: "Artist",
        props: ['id'],
        data: function () {
            return {
                visible: 0
            }
        },
        computed: {
            ...mapGetters({
                releases: 'artist/releases',
                recordings: 'artist/recordings',
            })
        },
        methods: {
            ...mapActions([
                'artist/getData'
            ]),
            setVisible: function (list) {
                this.visible = list
            }
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

<style lang="sass" scoped>
    @import '../sass/scheme'
    .artist-view
        margin-left: 5px
        margin-right: 5px
    .passive
        color: $lightgrey
        &:hover
            color: $blue
            cursor: pointer

    @media (max-width: 425px)
        h3
            text-align: center

</style>