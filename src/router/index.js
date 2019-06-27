import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Category from '@/components/Category'
import AddPokemon from '@/components/AddPokemon'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/category/:name',
      name: 'category',
      props: route => ({ id: Number(route.params.name) }),
      component: Category,
      children: [
        {
          path: 'pokemons/new',
          name: 'new',
          component: AddPokemon
        }
      ]
    }
  ]
})
