<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
  import {mapActions, mapMutations} from 'vuex'
  import Navbar from './components/Navbar'
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
    },
    components: {
      Navbar
    }
  }
</script>

<style lang="sass" scoped>
</style>
