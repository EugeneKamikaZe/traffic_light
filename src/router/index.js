import Vue from 'vue';
import Router from 'vue-router';
import LightBulb from '../components/LightBulb';

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: LightBulb,
      children: [
        {
          path: '/red',
          name: 'Red',
          component: LightBulb,
        },
        {
          path: '/yellow',
          name: 'Yellow',
          component: LightBulb,
        },
        {
          path: '/green',
          name: 'Green',
          component: LightBulb,
        },
      ],
    },
  ],
});
