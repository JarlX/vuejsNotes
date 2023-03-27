import Vue from "vue";
import App from "./App.vue";

export const EventBus = new Vue({
  methods: {
    changeAge(age) {
      EventBus.$emit("newAge", age);
    },
  },
});

new Vue({
  el: "#app",
  render: (h) => h(App),
});
