/**
 *@ github： https://github.com/YouAge
 *@ 文件简介：
 */
import { Router } from 'vue-router'
import NProgress from 'nprogress'

/** 路由进度条配置*/
NProgress.configure({
  easing: 'ease', // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: true, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
})

export function createRouterFilter(router: Router) {
  router.beforeEach((to, from, next) => {
    NProgress.start() // start
    next()
  })

  router.afterEach((to, from, failure) => {
    NProgress.done()
  })

  router.onError((error) => {
    NProgress.done()
    console.log('路由错误')
  })
}
