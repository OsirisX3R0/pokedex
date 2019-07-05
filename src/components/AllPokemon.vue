<template>
    <div>
        <h3>Count: {{pokemon.count}}</h3>

        <PokemonItem v-for="(pokemon, index) in pokemon.results" :key="index" :pokemon="pokemon" />
    </div>
</template>

<script>
import axios from 'axios'
import PokemonItem from './PokemonItem'
export default {
  name: 'AllPokemon',
  components: {PokemonItem},
  data() {
      return {
          pokemon: {}
      }
  },
  methods: {

  },
  created: function() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000`)
    .then(res => this.pokemon = res.data)
  }
}
</script>

<style scoped>
    h1 {
        text-align: center
    }
</style>
