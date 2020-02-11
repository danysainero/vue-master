<template>
  <div class="wizardsFavList">
    <div class="wizardsFavList-item" v-for="(wizard, index) in favWizards" :key="index">
      <div class="wizardsFavList-item__container">
        <button class="btn" @click="removeFavWizard(index)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="orange"
            stroke="orange"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
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
    </div>
  </div>
</template>

<script>
export default {
  name: "FavWizardCard",
  data() {
    return {};
  },
  methods: {
    removeFavWizard(index) {
      this.$store.dispatch("removeFavWizard", index);
    }
  },
  computed: {
    favWizards() {
      return this.$store.state.favWizards;
    }
  }
};
</script>

<style lang="scss" scoped>
.wizardsFavList{
  margin-bottom: 100px
}
.wizardsFavList-item {
  display: flex;
  justify-content: center;
  padding: 20px;

  &__container {
  border: solid rgb(148, 148, 148);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin: 20px;

  img {
    width: 50%;
    margin: 20px;
  }

  .btn{
    border-radius: 8px;
    cursor: pointer;
    margin-top: 10px;
  }
}
}



</style>