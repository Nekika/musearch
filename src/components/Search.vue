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
    import {mapState} from 'vuex'

    export default {
        name: "Search",
        data: function () {
            return {
                name: ""
            }
        },
        computed: {
            placeholder: function () {
                return `Type the name of a ${this.selectedType}`
            },
            ...mapState({
                types: state => state.types,
                selectedType: state => state.selectedType
            })
        },
        methods: {
            onChange: function () {
                this.$emit('changed', this.name)
            },
            onTypeChange: function (e) {
                this.$store.commit('setSelectedType', e.target.value)
            }
        }
    }
</script>

<style scoped>

</style>
