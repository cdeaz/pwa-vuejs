import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import LoginComponent from "./components/LoginForm.vue";
import SecureComponent from "./components/secure.vue";

import axios from 'axios';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(VueMaterial)
Vue.use(VueRouter)

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

export default new VueRouter({
  routes: [
      {
          path: "/LoginForm",
          name: "LoginForm",
          component: LoginComponent
      },
      {
          path: "/secure",
          name: "secure",
          component: SecureComponent
      }
  ]
})