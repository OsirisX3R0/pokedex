<template>
    <div class="card">
      <div class="card-head">
        <h3>
          <router-link to="/pokemon" class="dark">{{pokemon.name}}</router-link>
        </h3>
      </div>
    </div>
</template>

<script>
export default {
    name: "PokemonItem",
    props: ["pokemon"],
    data() {
        return {
        }
    },
    methods: {
      
    }
}
</script>

<style scoped>
    a {
        text-transform: capitalize;
    }
</style>
