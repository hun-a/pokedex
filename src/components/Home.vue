<template>
  <div class="home">
    <h1>Welcome to the Pokédex!</h1>
    <ul class="list-group">
      <li v-for="category in categories" :key="category.id" class="list-group-item">
        <router-link :to="{ name: 'category', params: { name: category.name } }" tag="button" class="btn btn-primary" >
          {{ category.name }} ({{ category.pokemons.length }})
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { store } from '../store'

export default {
  name: 'Home',
  data () {
    return {
      categories: store.categories
    }
  },
  mounted () {
    console.log('categories')
  }
}
</script>
