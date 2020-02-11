<template>
  <div class="house-container">
    <p>Nombre: {{house.name}}</p>
    <p>Fundador: {{house.founder}}</p>
    <p>Fantasma: {{house.houseGhost}}</p>
    <p>Nombre: {{house.name}}</p>
    <p>Nombre: {{houseName}}</p>
  </div>
</template>

<script>
export default {
  name: "HouseCard",

  props: {
    house: {
      type: Object,
      default: () => ({})
    },
    houseName: {
      type: String,
      validator(value) {
        return ["Gryffindor"].includes(value);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>