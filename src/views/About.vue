<template>
    <div id="about">
        <section>
            <h3>the project</h3>
            <p>
                <b>musearch</b> is an homework project about creating an application using Vue.js
            </p>
            <p>
                the app also uses <a href="https://vuex.vuejs.org/" target="_blank" t>Vuex</a> for the state management and
                <a href="https://github.com/axios/axios" target="_blank">axios</a> for the API calls
            </p>
            <p>
                the whole code is available on <a href="https://github.com/Nekika/musearch" target="_blank">GitHub</a>
            </p>
        </section>
        <section>
            <h3>the author</h3>
            <p>
                my name is <b>Hugo</b> and at the time of writing this i'm a french web development student
                from Nancy
            </p>
            <div class="icons">
                <a href="https://github.com/Nekika" target="_blank"><i class="fab fa-github-square"></i></a>
                <a href="https://linkedin.com/in/hugo-jahnke-a96ba8146" target="_blank"><i class="fab fa-linkedin"></i></a>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style lang="sass" scoped>
    @import '../sass/scheme'

    #about
        color: $blue
        margin: 20px 10px 0 10px
        .icons
            font-size: 30pt
            text-align: center
            a
                color: $blue
                &:hover
                    color: $lightgrey
                svg
                    margin: 8px

</style>