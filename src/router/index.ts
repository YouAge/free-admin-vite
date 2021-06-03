/**
 *@ github： https://github.com/YouAge
 *@ 文件简介： 路由入口
 */

import {
  RouteRecordRaw,
  createWebHashHistory,
  createRouter,
  createRouterMatcher,
} from 'vue-router';

import Layout from '../layout/index.vue';
import NProgress from '../utils/progress';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Layout,
    redirect: 'home',
    meta: {
      title: '首页',
      icon: '',
      hidden: false,
    },
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          icon: '',
          hidden: false,
        },
      },
    ],
  },

  {
    path: '/compunt',
    name: 'compunt',
    component: Layout,
    redirect: 'compunt',
    meta: {
      title: '组件',
      icon: '',
      hidden: false,
    },
    children: [
      {
        path: 'exec',
        name: 'exec',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '表格',
          icon: '',
          hidden: false,
        },
      },
      {
        path: 'ivdeo',
        name: 'ivdeo',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '视频',
          icon: '',
          hidden: false,
        },
      },
      {
        path: 'https://www.baidu.com/',
        name: 'img',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '图片',
          icon: '',
          hidden: false,
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
