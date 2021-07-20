import { createApp } from 'vue'
import router from '@/router'
import { setupStore, store } from '@/store'
import App from './App.vue'
import 'virtual:svg-icons-register'
const app = createApp(App)

// import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '@/style/index.less'
import { setupAntd } from '@/plugins/antDesign'
// setupAntd(app)
console.log(app.config)
setupStore(app)
app.use(router).mount('#app')
