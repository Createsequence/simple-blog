import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const Home = () => import('../views/Home.vue');

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
        component: () => import('../views/Content.vue'),
        children: [
          {
            path: '/',
            redirect: '/home/content/articleList'
          },
          {
            path: '/home/content/articleList',
            component: () => import('../views/ArticleList.vue')
          },
          {
            path: '/home/content/article',
            component: () => import('../views/Article.vue')
          }
        ]
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
