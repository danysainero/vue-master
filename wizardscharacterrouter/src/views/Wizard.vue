<template>
  <div class="wizard">
      <img :src="wizard.image" alt="">
    <h2>{{wizard.name}}</h2>
    <p>{{wizard.species}}</p>
    <p>{{wizard.gender}}</p>
    <p>{{wizard.house}}</p>
    <p>{{wizard.patronus}}</p>
    <p>{{wizard.actor}}</p>
  </div>
</template>

<script>
export default {
  name: "Wizard",
  data() {
    return {
      wizards: [],
      wizard: {},
      storagedWizards: ""
    };
  },
  props: {
    id: String
  },
  beforeMount() {
    this.wizards = localStorage.getItem("wizards");    
    const myWizards = JSON.parse(this.wizards);
    this.wizard = myWizards[this.id];
  }
};
</script>

<style lang="scss" scoped>
.wizard{
  margin: 50px auto
}

</style>