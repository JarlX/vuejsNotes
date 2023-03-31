<template>
  <div class="container">
    <RouterView></RouterView>

    <hr />
    <button class="btn btn-warning" @click="navToHome">Ana Sayfaya Dön</button>
  </div>
</template>
<script>
import { RouterView } from "vue-router";

export default {
  data() {
    return {
      id: this.$route.params.id, // parametreyi okumak
    };
  },
  methods: {
    navToHome() {
      this.$router.push({ name: "anasayfa" });
    },
  },
  watch: {
    $route(to, from) {
      this.id = to.params.id;
    },
  },
  components: { RouterView },
};
</script>
