import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import {
  routes
} from './routes.js';
import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
    return {
      x: 0,
      y: 700
    };
  }
});

router.beforeEach((to, from, next) => {
  console.log("global beforeEach");
  next();
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');