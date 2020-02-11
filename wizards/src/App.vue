<template>
  <div id="app">
    <the-header></the-header>
    <wizards-list></wizards-list>
  </div>
</template>

<script>
import WizardsList from "@/components/WizardsList.vue";
import TheHeader from "@/components/TheHeader.vue";

export default {
  name: "app",
  components: {
    WizardsList,
    TheHeader
  }
};
</script>

<style lang="scss">
#app {
  background: #efeeee;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0 20px;
}
body,
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
