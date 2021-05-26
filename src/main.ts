import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import { setupAntd } from './plugins/ant-design'
const app = createApp(App)
// app.config.globalProperties 挂载全局

app.use(setupAntd).use(router).use(store).mount('#app')
