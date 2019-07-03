<template>
    <PokemonDetail :info="pokemonInfo" />
</template>

<script>
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

  },
  async created() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemon}`);
    this.pokemonInfo = await res.json();
  }
}
</script>

<style>

</style>
