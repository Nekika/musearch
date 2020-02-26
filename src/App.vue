<template>
  <div id="app">
    <div id="navbar">
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style lang="sass" scoped>
</style>
