<template>
    <Loader v-if="loading"></Loader>
    <div v-else class="details">
        <h2>{{ name }}</h2>
        <RecordList></RecordList>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import Loader from "../components/Loader";
    import RecordList from "../components/RecordList";

    export default {
        name: "Details",
        props: ['id'],
        computed: {
            ...mapState({
                type: state => state.search.selectedType,
                loading: state => state.loading,
                details: state => state.entity.details,
                data: state => state[state.search.selectedType]
            }),
            name: function () {
                return this.details.name
            }
        },
        created(){
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