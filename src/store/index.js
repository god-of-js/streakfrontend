import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/app/index.js";
import user from "./modules/account/index.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app,
    user
  }
});
