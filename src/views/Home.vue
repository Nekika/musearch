<template>
    <div id="home">
        <div class="headers">
            <img :src="logo" alt="musearch">
            <h1>musearch</h1>
            <h2>the ultimate music search-engine</h2>
        </div>
        <section>
            <h3>what is musearch ?</h3>
            <p>
                musearch is a search-engine intended for people wishing to get information about an artist, an album
                (release) or a song (recording)
            </p>
            <p>
                it works thank's to the <a href="https://musicbrainz.org/" target="_blank">MusicBrainz</a> open music encyclopedia and especially
                the <a href="https://musicbrainz.org/doc/Development/JSON_Web_Service" target="_blank">JSON webservice</a>
            </p>
        </section>
        <section>
            <h3>get started</h3>
            <p>go to the <router-link to="search">search section</router-link> in order to make a research</p>
            <p>here you can select a category and type the name of the entity you're looking for</p>
            <p>after hitting the search button you'll get the list of the 10 most relevant results</p>
            <p>click on a result's title make you go to it's detail page</p>
        </section>
        <section>
            <h3>to go further</h3>
            check the <router-link to="/about">about section</router-link> fore more details about the project
        </section>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data: function () {
            return {
                logo: require('../assets/search.svg')
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import '../sass/scheme'

    #home
        color: $blue
        .headers
            text-align: center
            margin-top: 20px
            margin-bottom: 40px
            h2
                margin: auto
                @media (max-width: 425px)
                    width: 300px
        section
            margin: 30px 10px
            text-align: justify
            h3
                padding-bottom: 15px
                border-bottom: 1px solid $lightgrey

    img
        height: auto
        margin-bottom: 20px
        @media (max-height: 568px)
            max-height: 80px
        @media (min-height: 569px) and (max-height: 640px)
            max-height: 150px
        @media (min-height: 641px) and (max-height: 667px)
            max-height: 175px
        @media (min-height: 668px) and (max-height: 731px)
            max-height: 240px
        @media (min-height: 732px) and (max-height: 736px)
            max-height: 245px
        @media (min-height: 737px) and (max-height: 823px)
            max-height: 300px
        @media (min-height: 824px) and (max-height: 1024px)
            max-height: 350px
</style>