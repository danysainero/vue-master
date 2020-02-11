<template>
  <div class="LoginForm">
    <div v-if="loggingIn" class="container-loading">
      <img src="../assets/loading.gif" alt="Loading Icon">
    </div>
    <p v-if="loginError">{{ loginError }}</p>
    <p v-if="loginSuccessful">Login Successful</p>
    <form @submit.prevent="loginSubmit">
      <input type="email" placeholder="E-Mail" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapActions } from 'vuex';

export default {
  
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
  ...mapState([
    'loggingIn',
    'loginError',
    'loginSuccessful'
  ])
},
 methods: {
  ...mapActions([
    'doLogin'
  ]),
  loginSubmit() {
    this.doLogin({
      email: this.email,
      password: this.password
    })
  }
}
};
</script>

<style lang="scss" scoped>

.LoginForm {
  border: 1px solid black;
  border-radius: 5px;
  padding: 1.5rem;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;

  .container-loading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.575);
    
    img {
      width: 2rem;
      height: 2rem;
    }
  }
  form {
    display: flex;
    flex-flow: column;
    *:not(:last-child) {
      margin-bottom: 1rem;
    }
    input {
      padding: 0.5rem;
    }
    button {
      padding: 0.5rem;
      background-color: rgb(106, 246, 116);
      border: none;
      border-radius: 3px;
      cursor: pointer;
      &:hover {
        background-color: #008a00;
        color: white
      }
    }
  }
}
</style>