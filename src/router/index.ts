/**
 *@ github： https://github.com/YouAge
 *@ 文件简介：
 */

import { createRouter, createWebHashHistory, createMemoryHistory, RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import { createRouterFilter } from '@/router/router-filter'
import { routes } from './baseRouter'

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

/**
 * @ 为了好的变更和修改，
 * */
export function setupRouter(app: App) {
  // 创建路由守卫
  createRouterFilter(router)
  app.use(router)
}

export default router
