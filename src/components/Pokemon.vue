<template>
    <PokemonDetail :info="pokemonInfo" v-if="pokemonInfo" />
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
          pokemonInfo: null
      }
  },
  methods: {
    async getInfo() {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemon}`)
        .then(res => this.pokemonInfo = res.data)
    }
  },
  mounted: async function() {
    await this.getInfo()
  }
}
</script>

<style>

</style>
