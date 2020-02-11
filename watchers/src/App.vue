<template>
  <div id="app">
   <my-houses></my-houses>
  </div>
</template>

<script>
import MyHouses from './components/MyHouses.vue'

export default {
  name: 'app',
  components: {
    MyHouses,
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
