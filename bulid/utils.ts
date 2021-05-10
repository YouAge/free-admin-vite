/**
 *@ github： https://github.com/YouAge
 *@ 文件简介： 配置导入
 */
import dotenv from 'dotenv';
import * as process from "process";

export interface VitEnv {
  VITE_PORT: number;
  VITE_USE_MOCK: boolean;
  VITE_PUBLIC_PATH: string;
  VITE_PROXY: [string, string][];
  VITE_DROP_CONSOLE: boolean;
}

export function wrapperEnv(envConf: any): VitEnv{
  const ret:any ={}
  for (const envName of Object.keys(envConf)){
    let realName = envConf[envName].replace(/\\n/g,'\n')
    realName = realName === 'true' ? true : realName === 'false' ? false : realName;
    if (envName === 'VITE_PORT') {
      realName = Number(realName);
    }
    if (envName === 'VITE_PROXY') {
      try {
        realName = JSON.parse(realName);
      } catch (error) {}
    }
    ret[envName] = realName;
    process.env[envName] = realName;
  }
  return ret;
}
