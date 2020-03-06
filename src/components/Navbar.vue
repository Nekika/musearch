<template>
    <div class="navbar">
        <router-link to="/">musearch</router-link>
        <router-link to="/search">search</router-link>
        <router-link to="/about">about</router-link>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style lang="sass" scoped>
    @import '../sass/scheme'

    .navbar
        background-color: $green
        a
            color: $white
</style>