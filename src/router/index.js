import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import auth from "./auth.js";
import user from "./user.js";
import admin from "./admin.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/"
  },
  { path: "/view-movie-*" },
  { path: "/admin-view-series-seasons-*" },
  { path: "/view-episode-*" },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  ...auth,
  ...admin,
  ...user
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
