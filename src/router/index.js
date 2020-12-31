import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// 解决原地TP报错问题
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
};

const Home = () => import('../views/Home.vue');
import Classification from "../views/Categories";
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        redirect: '/home/content'
      },
      {
        path: '/home/content',
        component: () => import('../views/Content.vue')
      },
      {
        path: '/home/details',
        component: () => import('../views/Details')
      },
      {
        path: '/home/categories',
        component: () => import('../views/Categories')
      },
      {
        path: '/home/archives',
        component: () => import('../views/Archives')
      },
      {
        path: '/home/search',
        component: () => import('../views/Search')
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
