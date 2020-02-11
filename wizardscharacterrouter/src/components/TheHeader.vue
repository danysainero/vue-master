<template>
  <div class="theHeader">
    <router-link to="/" active-class="test" exact>Home</router-link>
    <router-link to="/about" active-class="test">About</router-link>
    <router-link to="/wizards" active-class="test">Wizards</router-link>
    <router-link to="/films" active-class="test">Films</router-link>
    <router-link to="/favourites" active-class="test">Favourites</router-link>
  </div>
</template>

<script>
export default {
  name: "TheHeader"
};
</script>

<style lang="scss" scoped>
.theHeader {
  background: rgb(235, 235, 235);
  border-radius: 8px;
  padding: 40px 0;

  a {
    color: black;
    font-weight: bolder;
    margin: 20px;
    text-decoration: none;

    &.router-link-exact-active {
      border-bottom: 1px solid red;
      color: green;
    }
  }

  .test{
      color: green;
  }
}
</style>