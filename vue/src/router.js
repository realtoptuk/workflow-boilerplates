import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/HomePage';
const Test = () => import('./pages/TestPage');

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      name: 'Home',
    },
    {
      path: '/test',
      component: Test,
      name: 'Test',
    },
  ],
});
