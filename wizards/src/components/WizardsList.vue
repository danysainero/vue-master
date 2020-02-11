<template>
  <div class="wizard-list">
    <div v-for="(wizard, index) in wizardsList" :key="index" class="wizard-list__item">
      <h1 class="wizard-list__title">{{wizard.name}}</h1>
      <div class="wizard-list__image-container">
        <img :src="wizard.image" alt class="wizard-list__image" />
        <span ref="index"></span>
      </div>
      <p>REWARD: {{wizard.price}} $$$</p>
      <div class="button-group">
        <button class="btn btn--free" @click="deleteWizard(index)">Eliminar</button>
        <button class="btn btn--capture" @click="captureWizard(index)">Capturar</button>
      </div>
    </div>
  </div>
</template>
/* TODO crear listado ficticio de magos*/
/* TODO crear tarjeta con magos, nombre y precio*/
/* TODO crear dos botones en cada tarjeta, eliminar y capturar*/
/* TODO crear header con titulo y en el header un filtro*/
/* TODO si hay resultados en el filtro, mostrar los resultados, si no, mostrar texto diciendo que no se ha encontrado nada*/
<script>
export default {
  name: "WizardsList",
  data() {
    return {
      animated: false,
      wizardsList: [
        {
          name: "Gellert Grindelwald ",
          image: require("./../assets/mago1.png"),
          price: "550"
        },
        {
          name: "mago2",
          image: require("./../assets/mago2.jpg"),
          price: "13454"
        },
        {
          name: "Quirinus Quirrell",
          image: require("./../assets/mago3.png"),
          price: "110"
        },
        {
          name: "Quirinus Quirrell",
          image: require("./../assets/mago3.png"),
          price: "9990"
        }
      ]
    };
  },
  methods: {
    deleteWizard(index) {
      this.wizardsList.splice(index, 1);
    },
    captureWizard(index) {
      this.$refs.index[index].classList.toggle("animated-bars");

      event.target.innerHTML == "Capturar"
        ? (event.target.innerHTML = "Liberar")
        : (event.target.innerHTML = "Capturar");
    }
  }
};
</script>

<style lang="scss" scoped>
.wizard-list {
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  &__title {
    font-size: 1.8rem;
  }

  &__item {
    background: rgba(117, 117, 117, 0.144);
    box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
    border-radius: 8px;
    padding: 30px;
    margin: 15px 45px;
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__image-container {
    position: relative;
    width: 50%;

    .wizard-list__image {
      box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
        -9px -9px 16px rgba(255, 255, 255, 0.5);
      border-radius: 8px;
      width: 100%;
      height: calc(200px - 1vw);
    }

    span {
      border-radius: 8px;
      position: absolute;
      width: 100%;
      height: 0;
      top: 0;
      left: 0;
      background: repeating-linear-gradient(
        90deg,
        rgba(56, 41, 41, 0.42),
        rgba(47, 37, 37, 0) 20px,
        #504444 20px,
        #000 28px
      );
    }
  }

  .button-group {
    display: flex;
    justify-content: space-evenly;

    .btn {
      border: none;
      border-radius: 4px;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.301),
        -2px -2px 4px rgba(202, 202, 202, 0.88);
      padding: 8px 15px;
      font-size: 1.1rem;
      cursor: pointer;
      outline: none;
      transform: skew(-5deg);
      margin: 0 10px;
      width: 150px;

      &--capture {
        background: rgba(0, 0, 0, 0.698);
        color: rgb(255, 239, 184);

        &:hover {
          box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.801),
            inset -2px -2px 4px rgba(202, 202, 202, 0.575);
        }
      }

      &--free {
        background: rgba(63, 138, 2, 0.698);
        color: rgb(255, 239, 184);

        &:hover {
          box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.301),
            inset -2px -2px 4px rgba(202, 202, 202, 0.88);
        }
      }
    }
  }
}

.animated-bars {
  animation: dropdownBars 1s forwards linear;
}

@keyframes dropdownBars {
  from {
    height: 0;    
  }
  to {
    height: calc(200px - 1vw);
  }
}
</style>