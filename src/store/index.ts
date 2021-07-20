/**
 *@ github： https://github.com/YouAge
 *@ 文件简介：
 */

import type { App } from 'vue'
import { createPinia } from 'pinia'
// pinia-plugin-persist 数据持久化插件
// import app from '@/store/modules/app'
//
// export const store = createStore({
//   modules: {
//     app
//   }
// })

const store = createPinia()

export function setupStore(app: App<Element>) {
  app.use(store)
}

export { store }
