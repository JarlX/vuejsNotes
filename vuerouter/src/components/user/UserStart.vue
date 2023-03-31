<template>
  <div class="container">
    <h3>User Start Component</h3>
    <hr />
    <ul class="list-group">
      <RouterLink tag="li" class="list-group-item" to="/user/1"
        ><a>User 1</a></RouterLink
      >
      <RouterLink tag="li" class="list-group-item" to="/user/2"
        ><a>User 2</a></RouterLink
      >
      <RouterLink tag="li" class="list-group-item" to="/user/3"
        ><a>User 3</a></RouterLink
      >
      <RouterLink tag="li" class="list-group-item" to="/user/4"
        ><a>User 4</a></RouterLink
      >
      <RouterLink tag="li" class="list-group-item" to="/user/5"
        ><a>User 5</a></RouterLink
      >
    </ul>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";

export default { components: { RouterLink } };
</script>
