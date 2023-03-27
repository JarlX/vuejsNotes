<template>
  <div class="wcol-md-6">
    <h3>Child Component 1</h3>
    <p>
      Ben User.vue isimli Parent Component'in içerisindeki bir Child componentim
    </p>
    <p>Kullanıcı Adı : {{ name }}</p>
    <p>Kullanıcı Adı : {{ switchName() }}</p>
    <p>Kullanıcı Yaşı : {{ age }}</p>
    <button @click="sendToData">Veri gönder</button>
  </div>
</template>
<script>
import { EventBus } from "../main";

export default {
  props: {
    name: {
      type: String,

      default: "asdasdsasadd",
    },
    age: String,
  },
  methods: {
    switchName() {
      return this.name
        .split("")
        .reverse()
        .join("");
    },
    sendToData() {
      this.$emit("data", "kablosuzkedi");
    },
  },
  created() {
    EventBus.$on("newAge", (age) => {
      this.age = age;
    });
  },
};
</script>
<style scoped>
div {
  background-color: lightcoral;
  padding: 20px;
  border: 1px solid #666;
  display: inline-block;
}
</style>
