<template>
  <div id="app">
    <div id="navbar">
      <router-link to="/">home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    created() {
      this.$store.dispatch('init')
    }
  }
</script>

<style lang="sass" scoped>
</style>
