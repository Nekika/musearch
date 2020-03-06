<template>
    <div class="searchbar">
        <select :value="selectedType" class="form-control-sm" @change="onTypeChange">
            <option v-for="(type,index) in types"
                    :key="index"
                    :selected="type === selectedType"
                    :value="type">{{ type }}</option>
        </select>
        <input type="text"
               :placeholder="placeholder"
               autofocus
               class="form-control-sm"
               v-model="name"
               @change="onChange">
        <button class="btn-sm">search</button>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        name: "Searchbar",
        data: function () {
            return {
                name: ""
            }
        },
        computed: {
            ...mapGetters({
                types: 'search/types',
                selectedType: 'search/selectedType',
                placeholder: 'search/placeholder'
            })
        },
        methods: {
            ...mapMutations([
               'search/setSelectedType'
            ]),
            onChange: function () {
                this.$emit('changed', this.name)
            },
            onTypeChange: function (e) {
                this['search/setSelectedType'](e.target.value)
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import '../sass/scheme'

    .searchbar
        display: flex
        flex-direction: row
        justify-content: space-evenly
        input, select
            text-align: center
            border-width: 1px
            border-color: $blue
            color: $blue
        select
            background-color: $white
        button
            background-color: $green
            border-color: $green
            color: $white
        @media (max-width: 320px)
            select
                width: 30%
            input
                width: 45%
        @media (min-width: 321px)
            input
                width: 50%
        @media (min-width: 376px)
            select
                width: 20%
            input
                width: 60%
</style>
