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
        display: block
        padding: 10px
        a
            color: $white
            &:hover
                color: $lightgrey
                text-decoration: none
            &:nth-child(1)
                font-size: 16pt
            &:nth-child(n + 2)
                margin-left: 15px
</style>