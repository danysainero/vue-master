<template>
  <div id="container">    
    <h1>{{title}}</h1> 
    <my-button></my-button>   
  </div>
</template>

<script>
import MyButton from "@/components/MyButton.vue";

export default {
  name: "SortingHat",
  data(){
      return{
          title: "¿A que casa perteneces?"
      }
  },
  components: {
     MyButton
  }
};
</script>

<style scoped lang="scss">


h1{
  font-family: "harry", serif;
  text-transform: uppercase;
  color: rgb(255, 255, 255);
  text-shadow: 2px 2px 6px #000000fa;
  letter-spacing: 0.3rem;
}
</style>