<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Vue-Resource</h3>
        <div class="form-group">
          <input type="text" class="form-control" v-model="category.name" />
          <br />
          <input
            type="text"
            class="form-control"
            v-model="category.description"
          />
        </div>
        <button class="btn btn-primary" @click="submit">Kaydet</button>
        <button class="btn btn-info" @click="getData">Verileri Getir</button>
        <hr />
        <ul class="list-group">
          <li class="list-group-item" v-for="(category, index) in categoryArr">
            <span
              >{{ category.description }} : {{ index }} :
              {{ category.id }}</span
            >
            <button class="btn btn-danger" @click="deleteItem(category.id)">
              Sil
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: { name: "", description: "" },
      categoryArr: [],
    };
  },
  methods: {
    submit() {
      this.$http
        .post("", this.category)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getData() {
      this.$http.get("").then((res) => {
        console.log(res.data.name);
        let data = res.data;
        data.map((item) => {
          console.log(item.description);
          this.categoryArr.push(item);
        });
      });
    },
    deleteItem(id) {
      this.$http
        .delete("https://northwind.vercel.app/api/categories/" + id)
        .then((res) => {});
      console.log(id);
    },
  },
};
</script>

<style></style>
