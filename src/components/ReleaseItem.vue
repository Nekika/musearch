<template>
    <li class="release-item">
        {{ title }}
    </li>
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

<style lang="sass" scoped>

</style>