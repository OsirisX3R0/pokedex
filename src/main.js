import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import './styles/scarab/css/scarab.css'

import Home from './components/Home'
import AllPokemon from './components/AllPokemon'
import Pokemon from './components/Pokemon'

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pokemon',
      name: 'allPokemon',
      component: AllPokemon
    },
    {
      path: '/pokemon/:name',
      name: 'Pokemon',
      component: Pokemon
    }
  ]
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
