<template>
  <div class="films">
    <h2>Harry Potter Films</h2>
    <router-link to="/films/piedra-filosofal" active-class="test">Piedra filosofal</router-link>
    <router-link to="/films/camara-secreta" active-class="test">Camara secreta</router-link>
   <transition name="fade">
    <router-view />
   </transition>

  </div>
</template>

 <style lang="scss" scoped>
.films {
  font-size: 1.3rem;
  padding: 0 20%;

  p{
    margin: 50px auto
  }
}

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

.test {
  color: green;
}
</style>   