<template>
    <div class="result-item">
        <h4>{{ name }}</h4>
        <button @click="goToDetails">details</button>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        name: "ResultItem",
        props: ['result'],
        computed: {
            id: function () {
                return this.result.id
            },
            name: function () {
                return this.result.name || this.result.title
            }
        },
        methods: {
            ...mapMutations(['setLoading']),
            goToDetails: function () {
                this['setLoading'](true)
                this.$router.push({name:'details', params: {id: this.id}})
            }
        }
    }
</script>

<style scoped>

</style>
