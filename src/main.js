import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import LoginForm from './components/LoginForm.vue';
import SalesList from './SalesList.vue';

import axios from 'axios';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(VueMaterial);
Vue.use(VueRouter);

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;


const routes = [
    {
      path: '/',
      redirect: 'Login',
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginForm,
    },
    {
      path: '/saleslist',
      name: 'Saleslist',
      component: SalesList,
    },
  ];
  const router = new VueRouter({
    routes, // raccourci pour `routes: routes`
  });

  
new Vue({
    render: (h) => h(App),
    router,
  }).$mount('#app');
  
