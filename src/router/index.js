import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// 解决原地TP报错问题
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err)
};

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
            }
        ]
    },
    {
        path: '/login',
        name: 'AdminLogin',
        component: () => import('../views/admin/AdminLogin')
    },
    {
        path: '/admin',
        name: 'AdminHome',
        component: () => import('../views/admin/AdminHome'),
        children: [
            {
              path: '/',
              redirect: '/admin/articleList'
            },
            {
                path: '/admin/articleList',
                name: 'AdminArticleList',
                component: () => import('../views/admin/AdminArticle/AdminArticleList')
            },
            {
                path: '/admin/articleEdit',
                name: 'AdminArticleEdit',
                component: () => import('../views/admin/AdminArticle/AdminArticleEdit')
            },
            {
                path: '/admin/articleDraft',
                name: 'AdminArticleDraft',
                component: () => import('../views/admin/AdminArticle/AdminArticleDraft')
            },
            {
                path: '/admin/articleAbandoned',
                name: 'AdminArticleAbandoned',
                component: () => import('../views/admin/AdminArticle/AdminArticleAbandoned')
            },
            {
                path: '/admin/categoriesList',
                name: 'AdminCategoriesList',
                component: () => import('../views/admin/AdminCategoriesList')
            },
            {
                path: '/admin/tagsList',
                name: 'AdminTagsList',
                component: () => import('../views/admin/AdminTagsList')
            }
        ]
    },
    {
      path: '*',
      redirect: '/404'
    },
    {
        path: '/404',
        name: 'NotFound',
        component: () => import('../views/result/NotFound')
    },
    {
        path: '/403',
        name: 'NotAuthorized',
        component: () => import('../views/result/NotAuthorized')
    },
    {
        path: '/500',
        name: 'ServerError',
        component: () => import('../views/result/ServerError')
    }
];

const router = new VueRouter({
    // mode: 'history',
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
});

export default router
