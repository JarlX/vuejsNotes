<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Filter ve Mixins</h3>
        <p>{{ message | toUpperCase | toLowerCaase }}</p>
        <hr />
        <input type="text" v-model="searchText" />
        <ul>
          <li v-for="product in filtered">{{ product }}</li>
        </ul>
        <appFilterList></appFilterList>
      </div>
    </div>
  </div>
</template>

<script>
import { productMixin } from "./productMixin";
import FilterList from "./FilterList.vue";
export default {
  mixins: [productMixin],
  components: {
    appFilterList: FilterList,
  },
};
</script>

<style></style>
