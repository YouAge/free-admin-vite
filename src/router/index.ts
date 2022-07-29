
import {createRouter, createWebHashHistory,} from 'vue-router'
import type {App} from "vue";

import {routes} from './baseRouter'

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})


export default router