<template>
    <div class="record-item">
        <h4>{{ title }}</h4>
    </div>
</template>

<script>
    export default {
        name: "RecordItem",
        props: ['record'],
        computed: {
            title: function () {
                return this.record.title 
            }
        }
    }
</script>

<style scoped>

</style>