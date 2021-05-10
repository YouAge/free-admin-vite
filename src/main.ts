import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import { setupAntd } from './plugins/ant-design'
const app = createApp(App)
// app.config.globalProperties 挂载全局

app.use(setupAntd).use(router).mount('#app')

const win: any = window //
if (process.env.NODE_ENV === 'development') {
  if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in win) {
    // 这里__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue赋值一个createApp实例
    win.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
  }
}
