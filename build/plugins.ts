/**
 *@ github： https://github.com/YouAge
 *@ 文件简介： vite配置文件
 */
import vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components' //按需导入
import vueJsx from '@vitejs/plugin-vue-jsx'
import * as path from 'path'
import viteSvgIcons from 'vite-plugin-svg-icons'
export default [
  vue(),
  vueJsx(),

  ViteComponents({ globalComponentsDeclaration: true }),
  /** svg 图标配置  npm i  vite-plugin-svg-icons  --save-dev
   * main.ts => import 'virtual:svg-icons-register'
   * https://github.com/anncwb/vite-plugin-svg-icons/blob/main/README.zh_CN.md*/
  viteSvgIcons({
    // 指定需要缓存的图标文件夹
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
    // 指定symbolId格式
    symbolId: 'icon-[dir]-[name]'
  })
]
