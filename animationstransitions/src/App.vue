<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Animation ve Transition</h3>
        <hr />
        <select class="form-control" v-model="activeEffect">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <br /><br />
        <button class="btn btn-primary" @click="show = !show">
          Kutuyu Göster/Gizle
        </button>
        <br /><br />
        <!-- <Transition :name="activeEffect" appear>
          <div class="alert alert-success" v-if="!show">
            Bu bir Alert Kutusudur.
          </div>
        </Transition>

        <hr />
        <Transition name="slide" type="animation" appear>
          <div class="alert alert-warning" v-if="!show">
            Bu bir Alert Kutusudur.
          </div>
        </Transition>
        <hr />
        <Transition
          enter-class=""
          enter-active-class="animate__heartBeat"
          leave-class=""
          leave-active-class="animate__zoomOut"
          appear
        >
          <div class="alert alert-danger" v-if="!show">
            Bu bir Alert Kutusudur.
          </div>
        </Transition> -->
        <hr />
        <Transition name="fade" mode="out-in">
          <div class="alert alert-success" v-if="show" key="success">
            Bu bir Alert Kutusudur...
          </div>
          <div class="alert alert-danger" v-else key="danger">
            Bu bir Alert Kutusudur...
          </div>
        </Transition>
        <hr />
        <button class="btn btn-primary" @click="showJS = !showJS">
          Göster/Gizle
        </button>
        <br /><br />
        <Transition
          :css="false"
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @after-enter-cancelled="afterEnterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @after-leave-cancelled="afterLeaveCancelled"
        >
          <div
            style="width: 300px; background-color: #fbbd08; border:1px solid #666; width: 100px; height: 75px; display: flex; justify-content: center; align-items: center; border-radius: 5px;"
            v-if="showJS"
          >
            Bu bir Alert Kutusudur..
          </div>
        </Transition>

        <hr />

        <h3>Dinamik Componentler Arası Geçiş</h3>
        <button class="btn btn-primary" @click="activeComponent = 'appHome'">
          Home
        </button>
        <button class="btn btn-danger" @click="activeComponent = 'appPost'">
          Post
        </button>
        <br /><br />
        <Transition name="fade" mode="out-in">
          <component :is="activeComponent"></component>
        </Transition>
        <hr />
        <button class="btn btn-info" @click="addNewItem">
          Yeni Eleman Ekle
        </button>
        <br /><br />
        <ul class="list-group">
          <TransitionGroup name="slide">
            <li
              class="list-group-item text-center"
              v-for="(number, index) in numbers"
              @click="removeItem(index)"
              :key="index"
            >
              Number : {{ number }} Index : {{ index }}
            </li>
          </TransitionGroup>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import home from "./components/Home.vue";
import post from "./components/Post.vue";
export default {
  data() {
    return {
      show: false,
      activeEffect: "fade",
      showJS: false,
      elementWidth: 0,
      activeComponent: "appHome",
      numbers: [1, 2, 3, 4, 5, 6, 7, 8],
    };
  },
  components: {
    appHome: home,
    appPost: post,
  },
  methods: {
    addNewItem() {
      const position = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(position, 0, this.numbers.length + 1);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    },
    beforeEnter(el) {
      console.log("beforeEnter");
      this.elementWidth = 0;
      el.style.width = this.elementWidth + "px";
    },
    enter(el, done) {
      console.log("enter");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth + round * 10 + "px";
        round++;
        console.log(el.style.width);
        if (round > 30) {
          clearInterval(interval);
          done();
        }
      }, 50);
    },
    afterEnter(el) {
      console.log("afterEnter");
    },
    afterEnterCancelled(el) {
      console.log("afterEnterCancelled");
    },
    beforeLeave(el) {
      console.log("beforeLeave");
      this.elementWidth = 300;
      el.style.width = this.elementWidth + "px";
    },
    leave(el, done) {
      console.log("leave");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth - round * 10 + "px";
        round++;
        console.log(el.style.width);
        if (round > 30) {
          clearInterval(interval);

          done();
        }
      }, 50);
    },
    afterLeave(el) {
      console.log("afterLeave");
    },
    afterLeaveCancelled(el) {
      console.log("afterLeaveCancelled");
    },
  },
};
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: 1s;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-in forwards;
  transition: opacity 1s;
  opacity: 0;
  position: relative;
}
.slide-move {
  transition: transform 1s;
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
