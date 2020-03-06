<template>
    <li class="record-item">
        {{ title }}
    </li>
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