import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/app/index.js";
import movies from "./modules/movies";
import userMovies from "./modules/users/movies/index.js";
import user from "./modules/account/index.js";
import VuexPersist from "vuex-persist";
Vue.use(Vuex);
const vuexLocalStorage = new VuexPersist({
  key: "vuex",
  storage: window.localStorage,
  reducer: state => ({
    user: state.user
  })
});

export default new Vuex.Store({
  plugins: [vuexLocalStorage.plugin],
  modules: {
    app,
    user,
    movies,
    userMovies
  }
});
