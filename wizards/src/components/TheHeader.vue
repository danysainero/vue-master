<template>
  <div class="header">
    <h1>Wizard arrest</h1>
    <div class="header__group-contro">
      <input type="text" placeholder="search Wizards"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>

.header{
    border-radius:4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5);
    padding: 0 15px
}
</style>