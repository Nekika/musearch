<template>
    <div class="searchbar">
        <select v-model="selectedType">
            <option v-for="(type,index) in types"
                    :key="index"
                    :selected="type === selectedType"
                    :value="type">{{ type }}</option>
        </select>
        <input type="text"
               :placeholder="placeholder"
               v-model="query"
               @change="onChange">
        <button>Search</button>
    </div>
</template>

<script>
    export default {
        name: "Searchbar",
        props: ['types'],
        data: function () {
            return {
                selectedType: this.types[0],
                query: ""
            }
        },
        computed: {
            placeholder: function () {
                return `Type the name of a ${this.selectedType}`
            }
        },
        methods: {
            onChange: function () {
                const params = {
                    type: this.selectedType,
                    query: this.search
                };
                this.$emit('changed', params)
            }
        }
    }
</script>

<style scoped>

</style>