<template>
    <div id="home">
        <div class="headers">
            <h1>musearch</h1>
            <h2>the ultimate music search-engine</h2>
        </div>
        <section>
            <h3>what is musearch ?</h3>
            <p>
                musearch is a search-engine intended for people wishing to get information about an artist, an album,
                a song or a label
            </p>
            <p>
                it works thank's to the <a href="https://musicbrainz.org/">MusicBrainz</a> open music encyclopedia and especially
                the <a href="https://musicbrainz.org/doc/Development/JSON_Web_Service">JSON webservice</a>
            </p>
        </section>
        <section>
            <h3>get started</h3>
            <p>go to the <a href="/search">search section</a> in order to make a research</p>
            <p>here you can select a category and type the name of the entity you're looking for</p>
            <p>after hitting the search button you'll get the list of the 10 most relevant results</p>
            <p>click on a result's title make you go to it's detail page</p>
        </section>
        <section>
            <h3>to go further</h3>
            check the <a href="/about">about section</a> fore more details about the project
        </section>
    </div>
</template>

<script>
    export default {
        name: "Home"
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
</style>