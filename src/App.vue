<template>
  <div id="app">
    <div id="navbar">
      <router-link to="/">musicbrainzzz</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import {mapActions, mapMutations} from 'vuex'
  export default {
    name: 'App',
    methods: {
      ...mapActions(['search/init']),
      ...mapMutations(['setLoading'])
    },
    created() {
      this['search/init']()
    },
    mounted(){
      this['setLoading'](false)
    }
  }
</script>

<style lang="sass" scoped>
</style>
