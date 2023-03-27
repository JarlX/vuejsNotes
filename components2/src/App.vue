<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <br />
        <button
          @click="selectedComponent = 'appMemory'"
          class="btn-sm btn btn-primary"
        >
          appMemory
        </button>
        <button
          @click="selectedComponent = 'appNewMemory'"
          class="btn-sm btn btn-primary"
        >
          appNewMemory
        </button>
        <button
          @click="selectedComponent = 'appAuthor'"
          class="btn-sm btn btn-primary"
        >
          appAuthor
        </button>
        <hr />
        <p>{{ selectedComponent }}</p>
        <hr />
        <KeepAlive>
          <!-- Dinamik Componentleri canlı tutar -->
          <component :is="selectedComponent">
            <div slot="heading">Bugün güzel bir gündü</div>
            <p slot="content">Bugün güzel bir anıydı</p>
          </component>
        </KeepAlive>

        <!-- <appMemory>
          <div slot="heading">Bugün güzel bir gündü</div>
          <p slot="content">Bugün güzel bir anıydı</p>
        </appMemory> -->
      </div>
    </div>
  </div>
</template>

<script>
import Memory from "./components/Memory.vue";
import newMemory from "./components/newMemory.vue";
import Author from "./components/Author.vue";

export default {
  data() {
    return {
      selectedComponent: "appMemory"
    };
  },

  components: {
    appMemory: Memory,
    appNewMemory: newMemory,
    appAuthor: Author
  }
};
</script>
