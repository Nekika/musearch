<template>
  <div id="search">
    <Searchbar @changed="getData"></Searchbar>
    <Loader v-if="loading"></Loader>
    <ResultList v-else-if="results"></ResultList>
  </div>
</template>

<script>
  import Searchbar from "../components/Searchbar"
  import Loader from "../components/Loader"
  import ResultList from "../components/ResultList"

  import {mapGetters} from 'vuex'

  export default {
    name: 'Search',
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
      Searchbar,
      Loader,
      ResultList
    }
  }
</script>
