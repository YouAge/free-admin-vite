import {ConfigEnv, defineConfig, UserConfigExport} from 'vite'
import vue from '@vitejs/plugin-vue'
import plugins from "./build/plugins";

import * as path from 'path'

const resolve =(dir: string) =>path.join(__dirname,dir)
// // https://vitejs.dev/config/
export default ({command}:ConfigEnv):UserConfigExport=>{

  return {
    plugins,
    define: {
      'process.env': {
        BASE_URL: '/',
        URL: 'http:'
      }
    },
    /** 设置别名*/
    resolve:{
      alias:{
        '@': resolve('src')
      },
      extensions: ['.js', '.ts', '.vue', 'jsx', '.tsx','.json']
    },
    // 配置全局的css变量
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${path.resolve('src/styles/index.less')}";`
          },
          javascriptEnabled: true
        }
      }
    }
  }
}
