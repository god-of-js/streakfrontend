import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import bluestreak from './components/title.vue'
import VueIziToast from 'vue-izitoast';
import 'izitoast/dist/css/iziToast.css';
import {errorNot, successNot} from './helpers'
import axios from 'axios'
Vue.config.productionTip = false;
Vue.component('bluestreak', bluestreak)
Vue.prototype.$errorNot = errorNot;
Vue.prototype.$successNot = successNot;
Vue.prototype.$axios = axios;
Vue.use(VueIziToast)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
