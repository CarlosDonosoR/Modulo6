import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';

const NOTFOUND = () =>
  import(/* webpackChunkName: "notFound" */ '@/views/NotFound.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '*',
    name: 'notFound',
    component: NOTFOUND,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
