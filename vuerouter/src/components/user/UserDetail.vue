<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <hr />

    <p>Kullanıcı ID bilgisi : {{ $route.params.id }}</p>
    <RouterLink tag="button" class="btn btn-dark" :to="navigateToLink"
      >Düzenle</RouterLink
    >
  </div>
</template>
<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      navigateToLink: {
        name: "UserEdit",
        params: { id: this.$route.params.id },
        query: { name: "Salih Can", lastName: "Çakar" },
        hash: "#data",
      },
    };
  },
  components: { RouterLink },
  beforeRouteEnter(to, from, next) {
    console.log("Component Seviyesinde");
    next();
  },
};

//:to="'/User/' + $route.params.id + '/edit'"
</script>
