import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Details from "../views/Details.vue";
import Catched from "../views/Catched.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/details/:pokeId",
    name: "Details",
    component: Details,
  },
  {
    path: "/catched",
    name: "Catched",
    component: Catched,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
