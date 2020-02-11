<template>
  <div id="card-container">
      <h1>WIZARD CARD</h1>
    <form @submit.prevent="onSubmit" class="form">
      <div >
        <label class="form__label" for="name">name</label>
        <input class="form__control" type="text" id="name" v-model="name" />
      </div>
      <div >
        <label class="form__label" for="alias">alias</label>
        <input class="form__control" type="text" id="alias" v-model="alias" />
      </div>
      <div >
        <label class="form__label" for="role">role</label>
        <input class="form__control" type="text" id="role" v-model="role" />
      </div>
      <div >
        <label class="form__label" for="house">house</label>
        <input class="form__control" type="text" id="house" v-model="house" />
      </div>
      <div >
        <label class="form__label" for="school">school</label>
        <input class="form__control" type="text" id="school" v-model="school" />
      </div>
      <div >
        <label class="form__label" for="wand">wand</label>
        <input class="form__control" type="text" id="wand" v-model="wand" />
      </div>
      <input type="submit" value="Submit" />
    </form>

    <div class="dni-container">
      <h1 class="dni__title">DNI MÁGICO</h1>
      <p class="dni__text">
        Nombre:
        <span>{{name}}</span>
      </p>
      <p class="dni__text">
        Alias:
        <span>{{alias}}</span>
      </p>
      <p class="dni__text">
        Role:
        <span>{{role}}</span>
      </p>
      <p class="dni__text">
        House:
        <span>{{house}}</span>
      </p>
      <p class="dni__text">
        School:
        <span>{{school}}</span>
      </p>
      <p class="dni__text">
        Wand:
        <span>{{wand}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "WizardCard",
  methods: {
    onSubmit() {}
  },
  data() {
    return {
      name: "",
      alias: "",
      role: "",
      house: "",
      school: "",
      wand: ""
    };
  }
};
</script>
<style lang="scss" scoped>
#card-container {
  padding: 0 150px;
}
.dni-container {
  width: 60%;
  max-width: 500px;
  margin: 100px auto 0 auto;
  padding-left: 20px;
  border: solid 1px grey;
  border-radius: 6px;
  background: rgb(248, 214, 139);
  text-align: left;

  & .dni__title {
    text-align: center;
  }
  & .dni__text {
    font-weight: 600;
    margin-right: 10px;

    span {
      font-weight: normal;
      padding-left: 20px;
    }
  }
}
</style>