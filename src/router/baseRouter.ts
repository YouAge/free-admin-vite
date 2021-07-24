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
    meta: { title: '系统', icon: 'icon-shouye' },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: { title: '首页', icon: 'icon-shouye' }
      }
    ]
  },
  {
    path: '/error',
    name: 'error',
    component: Layout,
    meta: { title: '错误页面', icon: 'icon-shouye' },
    children: [
      {
        path: '404',
        name: '404',
        component: () => import('@/views/Error404.vue'),
        meta: { title: '404', icon: 'icon-shouye' }
      }
    ]
  },
  {
    path: '/author',
    component: Layout,
    redirect: 'user',
    meta: { title: '权限管理', icon: 'icon-shouye' },
    children: [
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/Home.vue'),
        meta: { title: '用户管理', icon: 'icon-shouye' }
      },
      {
        path: 'role',
        name: 'role',
        component: () => import('@/views/Home.vue'),
        meta: { title: '权限分配', icon: 'icon-shouye' }
      },
      {
        path: 'menu',
        name: 'menu',
        component: () => import('@/views/Home.vue'),
        meta: { title: '菜单管理', icon: 'icon-shouye' }
      }
    ]
  }
]
