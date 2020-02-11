<template>
  <div class="home">
    <h2>HOME</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquid impedit quaerat, quibusdam harum obcaecati, fugit beatae numquam culpa quos unde accusamus iusto similique hic? Aliquid qui consectetur porro itaque.</p>
 <LoginForm></LoginForm>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'

export default {
  name: "home",
  components: {
    LoginForm
  }
};
</script>
