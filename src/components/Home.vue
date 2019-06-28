<template>
  <div>
    <div class="card">
      <div class="card-head">
        <h3>
          <router-link to="/pokemon" class="dark">Pokemon</router-link>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
