<template>
  <div class="category">
    <h1>{{ category.name }} Pokémon!</h1>
    <ul class="list-group">
      <li v-for="pokemon in category.pokemons" :key="pokemon.id" class="list-group-item">
        <strong>{{ pokemon.name }}</strong>
        <span class="badge badge-fill badge-info">Level: {{ pokemon.level }}</span>
      </li>
    </ul>
    <button @click="goBack()" class="btn btn-secondary">Back to Categories</button>
    <router-link :to="{ name: 'new' }" tag="button" class="btn btn-primary">Add pokémon</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { store } from '../store'

export default {
  name: 'Category',
  props: ['name'],
  data () {
    return {
      category: {}
    }
  },
  methods: {
    goBack () {
      this.$router.push('/')
    }
  },
  mounted () {
    console.log('categories')
    this.category = store.categories.find(v => v.name === this.name)
  }
}
</script>
