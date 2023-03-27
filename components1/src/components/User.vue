<template>
  <div class="container">
    <h1>Parent Component (User)</h1>
    <p>Burası parent component yani herşeyin import edildiği component :)</p>
    <button @click="changeName">Adımı Değiştir</button>
    <p>Child üzerinden gelen veri : {{ childData }}</p>
    <hr />
    <div class="row">
      <app-user-detail
        @data="childData = $event"
        :name="title"
        :age="age"
      ></app-user-detail>
      <app-user-edit @newAge="age = $event" :age="age"></app-user-edit>
    </div>
  </div>
</template>
<script>
import UserDetail from "./UserDetail";
import UserEdit from "./UserEdit";
export default {
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit,
  },
  data() {
    return {
      title: "Salih",
      childData: "",
      age: 24,
    };
  },
  methods: {
    changeName() {
      this.title = "Deniz";
    },
    deneme(e) {
      console.log(e);
    },
  },
};
</script>

<style>
div.container {
  margin-top: 30px;
  padding: 20px 40px;
  background-color: #6a8d99;
  border: 1px solid #666;
}
div.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
