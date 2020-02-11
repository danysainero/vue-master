<template>
  <div class="theFooter">
    <p>the footer</p>
  </div>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>

<style lang="scss" scoped>

.theFooter {
  background: rgb(168, 167, 167);
  border-radius: 8px 8px 0 0;
  bottom: 0;
  left: 0;
  padding: 10px 0 0 0;
  position: fixed;
  right: 0;

  p{
    font-size: 1.5rem
  }
}
</style>