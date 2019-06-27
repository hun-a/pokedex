<template>
  <div class="add-pokemon">
    <hr>
    <h3>Add a new Pokémon!</h3>
    <input v-model="pokemon.name" class="form-control">
    <button @click="goBack()" class="btn btn-secondary">Cancel</button>
    <button @click="save(pokemon)" class="btn btn-success">Save</button>
  </div>
</template>

<script>
import { store } from '../store'

export default {
  props: ['name'],
  name: 'AddPokemon',
  data () {
    return {
      pokemon: {
        level: '00',
        name: ''
      }
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    save (pokemon) {
      store.categories.find(v => v.name === this.name).pokemons.push(pokemon)
      this.$router.push('/category/:' + this.name)
    }
  },
  mounted () {
    console.log(this.name)
    console.log('new pokemon')
  }
}
</script>
