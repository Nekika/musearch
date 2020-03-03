<template>
    <div class="search">
        <select :value="selectedType" @change="onTypeChange">
            <option v-for="(type,index) in types"
                    :key="index"
                    :selected="type === selectedType"
                    :value="type">{{ type }}</option>
        </select>
        <input type="text"
               :placeholder="placeholder"
               v-model="name"
               @change="onChange">
        <button>search</button>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        name: "Search",
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

<style scoped>

</style>
