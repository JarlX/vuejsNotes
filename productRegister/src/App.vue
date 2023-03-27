<template>
  <div class="container">
    <h1 class="text-center">Ürün Ekleme Uygulaması</h1>
    <hr />
    <appNewProduct></appNewProduct>
    <br /><br />
    <appProgress></appProgress>
    <br /><br />

    <appProducts></appProducts>
  </div>
</template>

<script>
import newProduct from "./components/newProduct.vue";
import newProgress from "./components/progress.vue";
import Products from "./components/products.vue";
export default {
  data() {
    return {};
  },

  components: {
    appNewProduct: newProduct,
    appProgress: newProgress,
    appProducts: Products
  }
};
</script>

<style>
body {
  background-color: aliceblue;
  padding-top: 20px;
  padding-bottom: 20px;
}

.card {
  margin-right: 5px;
  margin-bottom: 5px;
}

.card:last-child {
  margin-right: 0px;
}

.col-md-2 {
  max-width: 15.666667% !important;
}

.product-container {
  margin-left: 15px;
}
</style>
