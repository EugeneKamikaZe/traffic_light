import Vue from 'vue/dist/vue.js';
import App from './App';
import VueRouter from 'vue-router';
import router from './router/index';

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
