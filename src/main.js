import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import bluestreak from "./components/title.vue";
import VueIziToast from "vue-izitoast";
import "izitoast/dist/css/iziToast.css";
import adminmovie from "./components/admin/props/movie.vue";
import addseries from "./components/admin/props/addseries.vue";
import moviepage from "./components/admin/props/moviepage.vue";
import usermovie from "./components/user/props/movie.vue";
import appfoot from "./components/user/props/footer.vue";
import timelinemovie from "./components/user/props/timelinemovie.vue";
import {
  errorNot,
  successNot,
  post,
  Delete,
  format,
  imgCheck,
  videoCheck
} from "./helpers";
import axios from "axios";
Vue.component("adminmovie", adminmovie);
Vue.component("moviepage", moviepage);
Vue.component("addseries", addseries);
Vue.component("usermovie", usermovie);
Vue.component("appfoot", appfoot);
Vue.component("timelinemovie", timelinemovie);
Vue.config.productionTip = false;
Vue.component("bluestreak", bluestreak);
Vue.prototype.$errorNot = errorNot;
Vue.prototype.$videoCheck = videoCheck;
Vue.prototype.$imgCheck = imgCheck;
Vue.prototype.$successNot = successNot;
Vue.prototype.$post = post;
Vue.prototype.$Delete = Delete;
Vue.prototype.$format = format;
Vue.prototype.$axios = axios;
Vue.use(VueIziToast);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
