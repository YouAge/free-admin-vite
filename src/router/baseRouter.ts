/**
 *@ github： https://github.com/YouAge
 *@ 文件简介： 初始路由
 */

import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: 'home',
    meta: { title: '首页', icon: 'icon-shouye' },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: { title: '首页', icon: 'icon-shouyen' }
      }
    ]
  },
  {
    path: '/error',
    name: 'error',
    component: Layout,
    meta: { title: '错误页面', icon: 'icon-yibiaopan' },
    children: [
      {
        path: '404',
        name: '404',
        component: () => import('@/views/Error404.vue'),
        meta: { title: '404', icon: 'icon-yibiaopan' }
      }
    ]
  }
]
