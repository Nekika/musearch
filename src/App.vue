<template>
  <div id="app">
    <div id="navbar">
      <router-link to="/">musicbrainzzz</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    created() {
      this.$store.dispatch('search/init')
    },
    mounted(){
      this.$store.commit('setLoading', false)
    }
  }
</script>

<style lang="sass" scoped>
</style>
