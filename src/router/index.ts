/**
 *@ github： https://github.com/YouAge
 *@ 文件简介： 路由入口
 */

import {RouteRecordRaw,createWebHashHistory,createRouter,createRouterMatcher}  from 'vue-router';

import Layout from '../layout/index.vue'
import NProgress from "../utils/progress";

const routes:Array<RouteRecordRaw> =[
  {
    path:'/',
    name:'index',
    component:Layout,
    redirect:'/home',
    children:[
      {
        path:'/home',
        name: 'home',
        component:()=>import('../views/home/index.vue'),
        meta:{
          title:"首页",
          icon:''
        }
      }
    ]
  }
]

const router = createRouter({
  history:createWebHashHistory(),
  routes,
})


router.beforeEach((to, from, next) => {
  NProgress.start();
  next()
})



router.afterEach(() => {
  NProgress.done();
});

export default router;
