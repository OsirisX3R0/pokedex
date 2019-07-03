<template>
    <div>
        <h3>Count: {{pokemon.count}}</h3>

        <PokemonItem v-for="(pokemon, index) in pokemon.results" :key="index" :pokemon="pokemon" />
    </div>
</template>

<script>
import PokemonItem from './PokemonItem'

export default {
  name: 'AllPokemon',
  components: {PokemonItem},
  data() {
      return {
          pokemon: null
      }
  },
  methods: {

  },
  async created() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000`);
    this.pokemon = await res.json();
  }
}
</script>

<style scoped>
    h1 {
        text-align: center
    }
</style>
