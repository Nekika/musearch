<template>
    <Loader v-if="loading"></Loader>
    <div v-else class="details">
        <h2>{{ name }}</h2>
        <RecordList></RecordList>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Loader from "../components/Loader";
    import RecordList from "../components/RecordList";

    export default {
        name: "Details",
        props: ['id'],
        computed: {
            ...mapGetters({
                loading: 'loading',
                type: 'search/selectedType',
                name: 'entity/name',
            })
        },
        created(){
            this.$store.commit('artist/reset')
            this.$store.dispatch('entity/getDetails', {id: this.id, type: this.type})
            this.$store.dispatch(`${this.type}/getData`, this.id)
        },
        components: {
            Loader,
            RecordList
        }
    }
</script>

<style scoped>

</style>
