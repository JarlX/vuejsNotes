<template>
  <div class="progress">
    <div
      class="progress-bar bg-info"
      role="progressbar"
      :style="{ width: progress + '%' }"
      aria-valuenow="50"
      aria-valuemin="0"
      aria-valuemax="1000"
    >
      {{ currentItem }}/10
    </div>
  </div>
</template>

<script>
import { EventBus } from "../main";

export default {
  data() {
    return {
      currentItem: 0,
      progress: 0
    };
  },
  created() {
    EventBus.$on("progressBar", length => {
      this.currentItem = length;
      this.progress = length * 10;
    });
  }
};
</script>
