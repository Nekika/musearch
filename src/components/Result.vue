<template>
    <div class="result">
        <h3>{{ name }}</h3>
    </div>
</template>

<script>
    export default {
        name: "Result",
        props: ['data'],
        computed: {
            name: function () {
                return this.data.name
            }
        }
    }
</script>

<style scoped>

</style>