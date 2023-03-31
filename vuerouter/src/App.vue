<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <br />
        <RouterView name="header-top"></RouterView>
        <Transition name="slide" mode="out-in">
          <RouterView></RouterView>
        </Transition>
        <br />
        <RouterView name="header-bottom"></RouterView>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";

export default {
  components: { RouterView, appHeader: Header },
};
</script>

<style>
.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}

.slide-leave {
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }

  to {
    transform: translateY(0px);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
