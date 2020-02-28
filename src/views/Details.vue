<template>
    <Loader v-if="loading"></Loader>
    <div v-else class="details">
        <h3>Details</h3>
        <p>{{ name }}</p>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import Loader from "../components/Loader";

    export default {
        name: "Details",
        props: ['id'],
        computed: {
            ...mapState({
                type: state => state.search.selectedType,
                loading: state => state.loading,
                details: state => state.entity.details
            }),
            name: function () {
                return this.details.name
            }
        },
        created(){
            const params = {id: this.id, type: this.type}
            this.$store.dispatch('entity/getDetails', params)
        },
        components: {
            Loader
        }
    }
</script>

<style scoped>

</style>