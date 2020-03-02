<template>
    <div class="release-item">
        <h4>{{ title }}</h4>
    </div>
</template>

<script>
    export default {
        name: "ReleaseItem",
        props: ['release'],
        computed: {
            title: function () {
                return this.release.title
            }
        }
    }
</script>

<style scoped>

</style>