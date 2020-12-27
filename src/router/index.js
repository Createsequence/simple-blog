import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const Home = () => import('../views/Home.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        component: () => import('../views/Content.vue')
      },
      {
        path: '/content',
        component: () => import('../views/Content.vue')
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
