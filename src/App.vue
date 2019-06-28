<template>
  <div id="app">
    <Header />
    <Home msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Home from './components/Home'
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    Home,
    Header
  }
}
</script>

<style scoped>

</style>
