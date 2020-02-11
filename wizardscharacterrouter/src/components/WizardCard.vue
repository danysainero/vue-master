<template>
  <div class="wizardCard">
      <button class="btn"  @click.once="addFavWizard(wizard)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          :class="{'btn__fav': wizard.fav}"
        >
          <polygon
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
          />
        </svg>
      </button>
      <img :src="wizard.image" alt />
      <span>{{wizard.name}}</span>
      <span>{{wizard.gender}}</span>
      <span>{{wizard.house}}</span>
      <router-link :to="`/wizard/${index}`">See details</router-link>
  </div>
</template>

<script>
export default {
  name: "wizardCard",

  data() {
    return {
    }
  },
  props: {
    wizard: {
      type: Object
    },
    index: {
      type: Number
    }
  },
   methods: { 
    addFavWizard(wizard) {
      this.$store.dispatch("addFavWizard", wizard);
    }
  },
};
</script>

<style lang="scss" scoped>
.wizardCard {

  align-items: center;
  border: solid rgb(148, 148, 148);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 350px;
    height: 450px;

  img {
    max-height: 50%;
    margin: 20px;
    width: 60%;
  }

  .btn{
    border-radius: 8px;
    cursor: pointer;
    margin-top: 10px;

    &__fav{
      fill: orange;
      color: orange;
    }
  }
}
</style>