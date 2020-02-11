<template>
  <div>
    <select name="houses" id="houses" v-model="houses">
      <option value="5a05e2b252f721a3cf2ea33f">Gryffindor</option>
      <option value="5a05da69d45bd0a11bd5e06f">Ravenclaw</option>
      <option value="5a05dc8cd45bd0a11bd5e071">Slytherin</option>
      <option value="5a05dc58d45bd0a11bd5e070">Hufflepuff</option>
    </select>
    <house-card ref="houseCard" :house="house" :house-name="house.name"></house-card>
  </div>
</template>

<script>
import HouseCard from "@/components/HouseCard.vue";

export default {
  name: "MyHouses",
  components: {
    HouseCard
  },
  data() {
    return {
      houses: "",
      HOUSE_ID: "",
      APY_KEY: "$2a$10$bncJLvltJYoy84vKZ.wbdOyMSfPZRZw8Dvpwd7Kz1MU7LlHwiln4G",
      house: {}
    };
  },
  watch: {
    houses(val) {
      this.HOUSE_ID = val;
      fetch(
        `https://www.potterapi.com/v1/houses/${this.HOUSE_ID}?key=${this.APY_KEY}`
      )
        .then(res => res.json())
        .then(house => (this.house = house[0]))
        .then(() => this.setHouseColors(this.house));//con arrow function mantiene el this, con funcion normal el this es la propia funcion
    }
  },
  methods: {
    setHouseColors(house) {
      //const el = document.querySelector(".house-container"); //con esto se accede al dom nativo
      const el = this.$refs.houseCard.$el; //con esto se accede al virtual don

      el.style.background = house.colors[0];
    }
  }
};
</script>

<style lang="scss" scoped>
#houses {
  margin-bottom: 100px;
}
.house-container {
  width: 60%;
  margin: 0 auto;
  padding: 10px 50px;
  border: 1px solid;
  border-radius: 8px;
  color: rgb(165, 164, 164);
  font-weight: 800;
  text-align: left;
}
</style>