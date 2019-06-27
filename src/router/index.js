import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Category from '@/components/Category'
import NewPokemon from '@/components/NewPokemon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/category/:name',
      name: 'category',
      component: Category,
      children: [
        {
          path: 'pokemons/new',
          name: 'new',
          component: NewPokemon
        }
      ]
    }
  ]
})
