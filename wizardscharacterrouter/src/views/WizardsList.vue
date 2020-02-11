<template>
  <div class="wizards-list">
    <SearchInput @searchWizards="searchWizards"></SearchInput>
    <div class="wizards-list--container">
      <div class="wizards-item" v-for="(wizard, index) in wizards" :key="index">
        <WizardCard :wizard="wizard" :index="index"></WizardCard>
      </div>
    </div>
  </div>
</template>

<script>
import WizardCard from "@/components/WizardCard";
import SearchInput from "@/components/SearchInput";

export default {
  name: "WizardsList",

  components: {
    WizardCard,
    SearchInput
  },
  data() {
    return {
      wizards: [],
      search: ""
    };
  },
  methods: {
    addFavWizard(wizard) {
      this.$store.dispatch("addFavWizard", wizard);
    },

    filterWizards(search) {
      const wizards = this.$store.state.wizards;
      return wizards.filter(wizard => {
        return wizard?.name?.toLowerCase().includes(search.toLowerCase());
      });
    },

    searchWizards(search) {
      this.wizards = this.filterWizards(search);
    }
  },

  beforeMount() {
    fetch(`http://hp-api.herokuapp.com/api/characters`)
      .then(response => response.json()) 
      .then( wizards => this.$store.dispatch("addWizards", wizards))
      .then((this.wizards = this.$store.state.wizards));
  }
};
</script>

<style lang="scss" scoped>

.wizards-list {
  margin-bottom: 100px;

  &--container {
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(350px, 1fr) );
    grid-template-rows: auto;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
}

.wizards-item {
  display: flex;
  justify-content: center;
}
</style>