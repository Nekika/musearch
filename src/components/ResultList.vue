<template>
    <div class="result-list">
        <h3>Results</h3>
        <ul>
            <ResultItem v-for="(result, index) in results" :key="index" :result="result"></ResultItem>
        </ul>
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

<style lang="sass" scoped>
    @import '../sass/scheme'

    .result-list
        margin: 10px
        color: $blue
        ul
            padding: 0
            overflow: hidden
            overflow-y: scroll
            height: 82vh
            li
                margin: 12px 3px
                list-style: none
                &:first-child
                    margin-top: 0
                &:last-child
                    margin-bottom: 0
                //box-shadow: 3px 3px 5px black
</style>
