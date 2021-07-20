import { ConfigEnv, defineConfig, UserConfigExport } from 'vite'

import plugins from './build/plugins'
import * as path from 'path'

const resolve = (dir: string) => path.join(__dirname, dir)

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins, // 插件配置

    define: {
      'process.env': {
        BASE_URL: '/',
        URL: 'http:'
      }
    },
    /** 别名配置*/
    resolve: {
      alias: {
        '@': resolve('src'),
        comps: resolve('src/components'),
        api: resolve('src/apis')
      }
    },
    /** 服务端设置*/
    server: {
      https: false,
      host: '0.0.0.0',
      port: 9983,
      open: false,
      //设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
      strictPort: false,
      proxy: {} // 设置本地代理
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${path.resolve('src/style/index.less')}";`
          },
          javascriptEnabled: true
        }
      }
    }
  }
}
