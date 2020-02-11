<template>
  <div class="searchInput">
     <input type="text" class="search" placeholder="Search by name" v-on:keyup="searchWizards" />
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  
   methods: { 
    searchWizards(search) {
      this.$emit('searchWizards', search.target.value)
      }
  },
};
</script>

<style lang="scss" scoped>

.searchInput {
  border: 0.8px solid grey;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  margin: 20px auto;
  padding: 5px;
 width: 20%;

 input{
   border: none;
   width: 100%;
   outline: none
 }
}

</style>