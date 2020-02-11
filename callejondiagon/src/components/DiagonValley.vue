<template>
  <div id="shop-container">
    <div class="item-container">
      <span>{{capa.title}}:</span>
      <span>Uds {{capa.quantity}}</span>
      <span>{{capa.price}} €</span>
      <button type="button" @click="addItem(capa)">Comprar</button>
      <button type="button" @click="removeItem(capa)">Quitar</button>
    </div>
    <div class="item-container">
      <span>{{varita.title}}:</span>
      <span>Uds {{varita.quantity}}</span>
      <span>{{varita.price}} €</span>
      <button type="button" @click="addItem(varita)">Comprar</button>
      <button type="button" @click="removeItem(varita)">Quitar</button>
    </div>
    <div class="item-container">
      <span>{{libro.title}}:</span>
      <span>Uds {{libro.quantity}}</span>
      <span>{{libro.price}} €</span>
      <button type="button" @click="addItem(libro)">Comprar</button>
      <button type="button" @click="removeItem(libro)">Quitar</button>
    </div>
    <p class="total">total:{{total}} €</p>
    <button type="button" @click="resetShop()">Reset</button>
  </div>
</template>

<script>
export default {
  name: "DiagonValley",
  methods: {

    addItem(item) {
      this.$store.dispatch('increment', { price })      
    },

    removeItem(item) {
        this.$store.dispatch('decrement', { price })      
    },

    resetShop() {
      this.$store.dispatch('resetTotal')
    }
  },
  data() {
    return {
      capa: {
        title: "capa mágica",
        quantity: 0,
        price: 100
      },
      varita: {
        title: "varita mágica",
        quantity: 0,
        price: 200
      },
      libro: {
        title: "libro mágica",
        quantity: 0,
        price: 100
      }
    };
  },

  computed: {
    total() {
         return this.$store.state.total
    }
  }
};
</script>

<style lang="scss" scoped>
#shop-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.item-container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.total {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>