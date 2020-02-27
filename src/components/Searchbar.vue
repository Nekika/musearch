<template>
    <div class="searchbar">
        <select v-model="selectedType" @change="onTypeChange">
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
    export default {
        name: "Searchbar",
        data: function () {
            return {
                types: this.$store.state.types,
                selectedType: this.$store.state.selectedType,
                name: ""
            }
        },
        computed: {
            placeholder: function () {
                return `Type the name of a ${this.selectedType}`
            }
        },
        methods: {
            onTypeChange: function(){
                this.$store.commit('setSelectedType', this.selectedType)
            },
            onChange: function () {
                this.$store.commit('setName', this.name)
                this.$store.dispatch('getData')
            }
        }
    }
</script>

<style scoped>

</style>