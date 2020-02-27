<template>
  <div class="home">
    <h1>musicbrainzzz</h1>
    <Searchbar @changed="getData"></Searchbar>
    <Result v-if="data" :data="data"></Result>
  </div>
</template>

<script>
  import Searchbar from "../components/Searchbar.vue";
  import Result from "../components/Result.vue";

  export default {
    name: 'Home',
    computed: {
      data: function () {
        return this.$store.state.data
      }
    },
    methods: {
      getData: function () {
        this.$store.dispatch('getData')
      }
    },
    components: {
      Searchbar,
      Result
    }
  }
</script>
