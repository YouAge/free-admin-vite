/**
 *@ github： https://github.com/YouAge
 *@ 文件简介：
 */

import { createRouter, createWebHashHistory, createMemoryHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: () => import('@/layout/index.vue') }
]
console.log(process.env.URL)
const router = createRouter({
  history: createMemoryHistory(process.env.BASE_URL),
  routes
})

export default router
