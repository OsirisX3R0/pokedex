<template>
    <PokemonDetail :info="pokemonInfo" />
</template>

<script>
import axios from 'axios';
import PokemonDetail from './PokemonDetail';
export default {
  name: 'Pokemon',
  components: {PokemonDetail},
  data() {
      return {
          pokemon: this.$route.params.name,
          pokemonInfo: []
      }
  },
  methods: {

  },
  created: function() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemon}`)
    .then(res => this.pokemonInfo = res.data)
  }
}
</script>

<style>

</style>
