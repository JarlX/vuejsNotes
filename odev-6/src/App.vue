<template>
  <div class="container">
    <webHeader></webHeader>
    <hr />
    <serverStatus></serverStatus>
    <hr />
    <webFooter></webFooter>
  </div>
</template>

<script>
import Header from "./header.vue";
import ServerStatus from "./serverStatus.vue";
import Footer from "./footer.vue";

export default {
  components: {
    webHeader: Header,
    serverStatus: ServerStatus,
    webFooter: Footer
  }
};
</script>

<style></style>
