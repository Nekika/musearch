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

  import {mapState} from 'vuex'

  export default {
    name: 'Home',
    computed: {
      ...mapState({
        type: state => state.search.selectedType,
        loading: state => state.loading,
        results: state => state.search.results
      })
    },
    methods: {
      getData: function(name) {
        const params = {name: name, type: this.type}
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
