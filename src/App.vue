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
    methods: {
    },
    created() {
      this.$store.dispatch('init')
    }
  }
</script>

<style lang="sass" scoped>
</style>
