import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import { setupAntd } from './plugins/ant-design'
const app = createApp(App)
// app.config.globalProperties 挂载全局

app.use(setupAntd).use(router).mount('#app')
