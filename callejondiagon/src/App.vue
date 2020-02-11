<template>
  <div id="app">
  <diagon-valley></diagon-valley>
  </div>
</template>

<script>
import DiagonValley from './components/DiagonValley.vue'

export default {
  name: 'app',
  components: {
    DiagonValley
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
