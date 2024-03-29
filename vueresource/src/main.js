import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";

Vue.use(VueResource);

Vue.http.options.root = "https://northwind.vercel.app/api/categories";

new Vue({
  el: "#app",
  render: (h) => h(App),
});
