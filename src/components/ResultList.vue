<template>
    <div class="result-list">
        <h3>Results</h3>
        <ResultItem v-for="(result, index) in results" :key="index" :result="result"></ResultItem>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ResultItem from "./ResultItem";

    export default {
        name: "ResultList",
        computed: {
            ...mapGetters({
                results: 'search/results'
            })
        },
        components: {
            ResultItem
        }
    }
</script>

<style scoped>

</style>
