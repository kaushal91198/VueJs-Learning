import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import vueKanban from "vue-kanban";
import Vuex from "vuex";
import Home from "./components/Home.vue";
import Form from "./components/Form/index.vue";
import Api from "./components/Api/apiEmployeeList.vue";
import OneEmployee from "./components/Api/oneEmployee.vue";
import Notfound from "./components/Notfound.vue";
import Dynamic from "./components/Dynamic.vue";
import CustomDirectives from "./components/CustomDirectives.vue";
import NonProps from "./components/NonProps.vue";
import ComputedProperty from "./components/ComputedProperty.vue";
import Watchers from "./components/Watchers.vue";
import Slot from "./components/Slots.vue";
import MainDynamic from "./components/Dynamic/main.vue";
import BeforeCreatedAndCreated from "./components/BeforeCreatedAndCreated.vue";
import BeforeMountedAndMounted from "./components/BeforeMountedAndMounted.vue";
import Kanban from "./components/VueKanban.vue";
import VueDraggable from "./components/VueDraggable.vue";
import VueXComponent from "./components/VueXComponent.vue";

Vue.use(VueRouter);
Vue.use(vueKanban);
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/form",
    component: Form,
  },
  {
    path: "/api",
    component: Api,
  },
  {
    path: "/employee/:id",
    component: OneEmployee,
  },
  {
    path: "/dynamic",
    component: Dynamic,
  },
  {
    path: "/custom-directive",
    component: CustomDirectives,
  },
  {
    path: "/non-props",
    component: NonProps,
  },
  {
    path: "/computed",
    component: ComputedProperty,
  },
  {
    path: "/watchers",
    component: Watchers,
  },
  {
    path: "/slot",
    component: Slot,
  },
  {
    path: "/dynamic-main",
    component: MainDynamic,
  },
  {
    path: "/before-created-and-created",
    component: BeforeCreatedAndCreated,
  },
  {
    path: "/before-mounted-and-mounted",
    component: BeforeMountedAndMounted,
  },
  {
    path: "/kanban-board",
    component: Kanban,
  },
  {
    path: "/vue-draggable",
    component: VueDraggable,
  },
  {
    path: "/vuex",
    component: VueXComponent,
  },
  {
    path: "*",
    component: Notfound,
  },
];
const router = new VueRouter({ routes });

Vue.directive("size", {
  bind(el, binding) {
    if (binding.value === "small") {
      el.style.fontSize = "60px";
    } else if (binding.value === "big") {
      el.style.fontSize = "100px";
    } else {
      el.style.fontSize = "20px";
    }
  },
});
Vue.config.productionTip = false;

Vue.filter("Ucase", function (val) {
  return val.toUpperCase();
});
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
  },

  getters: {
    getCountWithName: (state) => (name) => {
      return state.count + name;
    },
    getCount(state) {
      return state.count;
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state, action) {
      state.count -= action;
    },
  },
  actions: {
    increment(context) {
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit("increment", 5);
          resolve();
        }, 1000);
      });
    },
    decrement(context, payload) {
      context.commit("decrement", payload.value);
    },
    anotherIncrementMethod(context) {
      context.dispatch("increment").then((res) => {
        console.log(res);
      });
    },
  },
});

// router.beforeEach(()=>{
//   console.log(store.state.count,'this.$store')
// })

new Vue({
  router: router,
  render: (h) => h(App),
  store: store,
}).$mount("#app");
