<template>
    <div class="result-list">
        <h3>results</h3>
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
        color: $blue
        ul
            padding: 0
            overflow: hidden
            overflow-y: scroll
            li
                margin: 12px 3px
                list-style: none
                &:first-child
                    margin-top: 0
                &:last-child
                    margin-bottom: 0
                box-shadow: 3px 3px 5px $blue

    ul
        @media (max-height: 568px)
            max-height: 355px
        @media (min-height: 569px) and (max-height: 640px)
            max-height: 425px
        @media (min-height: 641px) and (max-height: 667px)
            max-height: 455px
        @media (min-height: 668px) and (max-height: 731px)
            max-height: 515px
        @media (min-height: 732px) and (max-height: 736px)
            max-height: 524px
        @media (min-height: 737px) and (max-height: 823px)
            max-height: 610px
        @media (min-height: 824px) and (max-height: 1024px)
            max-height: 805px


</style>
