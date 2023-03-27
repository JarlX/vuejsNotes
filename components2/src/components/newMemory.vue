<template>
  <div>
    <h1>New Memory Componenti ...</h1>
    <button @click="counter++">Arttır</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
  destroyed() {
    console.log("Destroyed!!");
  }
};
</script>

<style scoped></style>
