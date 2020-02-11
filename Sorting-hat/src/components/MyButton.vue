<template>
  <div class="btn-container">
    <button class="btn" @click="randomHouses">Ver</button>
    <div>
      <img src="./../assets/images/18ea2df1a21a246a8d2f2c3da57e835b.png" alt id="hatImage" />
    </div>
    <p id="houseText">{{yourHouse}}</p>
  </div>
</template>

<script>
export default {
  name: "MyButton",
  data() {
    return {
      houses: ["Gryffindor", "Hufflepuff", "Slytherin", "Ravenclaw"],
      yourHouse: "",
      count: 0
    };
  },
  methods: {
    randomHouses() {
      const hat = document.getElementById("hatImage");
      hat.classList.add("hat-movement");
      const intervalHouses = setInterval(() => {
        const houseselected = document.getElementById("houseText");
        const randomHouse = this.houses[
          Math.floor(Math.random() * this.houses.length)
        ];
        this.yourHouse = randomHouse;
        this.count++;

        if (this.count > 20) {
          clearInterval(intervalHouses);
          hat.classList.remove("hat-movement");
          this.count = 0;
        }
      }, 150);
    }
  }
};
</script>

<style lang="scss" scoped>
#houseText {
  font-size: 1.2rem;
}

.btn {
  border: solid red;
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
  background: rgb(255, 255, 255);
  color: rgb(34, 33, 33);
  font-family: "harry", serif;
  text-transform: uppercase;
  font-size: 1.2rem;
  cursor: pointer;
}

#hatImage {
  margin: 30px 0;
  width: 20vw;
}

.hide {
  display: none;
}

.show {
  display: inline-block;
}

.hat-movement {
  -webkit-animation: shake-lr 3s linear  forwards;
  animation: shake-lr 3s linear  forwards;
}


 @keyframes shake-lr {
  0%,
  100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);/* 
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%; */
  }
  10% {
    -webkit-transform: rotate(8deg);
            transform: rotate(8deg);
  }
  20%,
  40%,
  60% {
    -webkit-transform: rotate(-10deg);
            transform: rotate(-10deg);
  }
  30%,
  50%,
  70% {
    -webkit-transform: rotate(10deg);
            transform: rotate(10deg);
  }
  80% {
    -webkit-transform: rotate(-8deg);
            transform: rotate(-8deg);
  }
  90% {
    -webkit-transform: rotate(2deg);
            transform: rotate(2deg);
  }
  95% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}


</style>
