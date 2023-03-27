<template>
  <div class="col-md-s6">
    <h3>Child Component 2</h3>
    <p>
      Ben User.vue isimli Parent Component'in içerisindeki bir diğer Child
      componentim
    </p>
    <p>Yaşı Değiştir : {{ age }}</p>
    <button @click="changeAge">Yaşı değiştir</button>
  </div>
</template>
<script>
import { EventBus } from "../main";

export default {
  props: {
    age: String,
  },
  methods: {
    changeAge() {
      this.age = 30;
      // this.$emit("newAge", this.age);
      // EventBus.$emit("newAge", this.age);
      EventBus.changeAge(this.age);
    },
  },
};
</script>

<style scoped>
div {
  background-color: lightgoldenrodyellow;
  padding: 20px;
  border: 1px solid #666;
  display: inline-block;
}
</style>
