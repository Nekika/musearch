<template>
  <div class="home">
    <h1>Project Musicbrainz</h1>
    <Searchbar :types="types"
               @changed="getData"></Searchbar>

  </div>
</template>

<script>
  import axios from 'axios'
  import Searchbar from "../components/Searchbar.vue";

  export default {
    name: 'Home',
    data: function () {
      return {
        types: ['Artist', 'Album', 'Label', 'Title'],
        data: null
      }
    },
    methods: {
      getId: function (params) {
        const type = params.type.toLowerCase();
        const key = type + 's';
        const query = params.query;
        const url = `https://musicbrainz.org/ws/2/${type}?query=${query}&fmt=json`;
        axios.get(url)
          .then(response => {
            console.log(response.data[key][0])
          })
        .catch(error => console.log(error))
      },
      getData: function (params) {
        this.getId(params)
      }
    },
    components: {
      Searchbar
    }
  }
</script>
