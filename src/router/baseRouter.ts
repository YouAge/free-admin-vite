import {RouteRecordRaw} from "vue-router";

import Layout from '@/layouts/index.vue'
export const routes:Array<RouteRecordRaw> = [
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

]