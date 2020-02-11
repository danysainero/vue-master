<template>
  <div id="app">
     <my-header></my-header> 
    <img class="hall-img" alt />
     <sorting-hat></sorting-hat> 
  </div>
</template>

<script>
import SortingHat from "@/components/SortingHat.vue";
import MyHeader from "@/components/MyHeader.vue";

export default {
  name: "app",
  components: {
     SortingHat, 
     MyHeader 
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "harry";
  src: url(./assets/fonts/HARRY.TTF);
}

body, html{
  margin: 0;
  padding: 0;
}

#app {
  height: 100vh;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d1d3d4;
  border: none;
  background: #000;
 /*  background-image: url("./assets/images/GreatHall.jpg");
  background-size: cover;
  background-repeat: no-repeat; */
}

.hall-img {
  width: 100vw;
}
</style>
