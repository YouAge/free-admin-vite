import  {resolve} from 'path'
import vue from '@vitejs/plugin-vue'
import { UserConfigExport, ConfigEnv,loadEnv } from "vite";
import {wrapperEnv} from "./bulid/utils";
import styleImport from 'vite-plugin-style-import';

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir);
}
const root: string = process.cwd();
const alias: Record<string, string> = {
  "/@": pathResolve("src"),
  // "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
  // 解决警告You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.
};
export default ({ command ,mode}: ConfigEnv): UserConfigExport => {
  const env = loadEnv(mode, root); // 加载 .env.{mode}
  const {
    VITE_PORT,
    VITE_PUBLIC_PATH,
    VITE_PROXY,
    VITE_DROP_CONSOLE,
  } = wrapperEnv(env);
  return {
    root,
    base: VITE_PUBLIC_PATH,
    alias,
   mode,
    //服务端渲染
   server:{
     https: false,
     port:VITE_PORT,
   },

    /** 插件*/
   plugins: [vue(),
      // styleImport({
      //   libs: [{
      //     libraryName: 'ant-design-vue',
      //     esModule: true,
      //     resolveStyle: (name) => {
      //       return `ant-design-vue/es/${name}/style/css`;
      //     },
      //   }]
      // })

    ]
 }

}
