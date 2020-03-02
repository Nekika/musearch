<template>
  <div id="home">
    <Search @changed="getData"></Search>
    <Loader v-if="loading"></Loader>
    <ResultList v-else-if="results"></ResultList>
  </div>
</template>

<script>
  import Search from "../components/Search"
  import Loader from "../components/Loader"
  import ResultList from "../components/ResultList"

  import {mapGetters} from 'vuex'

  export default {
    name: 'Home',
    computed: {
      ...mapGetters({
        selectedType: 'search/selectedType',
        results: 'search/results',
        loading: 'loading',
      })
    },
    methods: {
      getData: function(name) {
        const params = {name: name, type: this.selectedType}
        this.$store.dispatch('search/getResults', params)
      }
    },
    components: {
      Search,
      Loader,
      ResultList
    }
  }
</script>
