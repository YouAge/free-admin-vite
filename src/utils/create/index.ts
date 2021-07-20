/**
 *@ github： https://github.com/YouAge
 *@ 文件简介： 缓存设置
 */

import { USER_INFO_KEY, TOKEN_KEY, MENU_CACHE_KEY } from '@/enums/cacheMnum'
import { MenuSetting } from 'types/config'

interface BasicStore {
  [MENU_CACHE_KEY]: MenuSetting
  [USER_INFO_KEY]: {}
  [TOKEN_KEY]: string | null | undefined
}
type localStore = BasicStore
type LocalKeys = keyof BasicStore

export class Persistent {
  static getLocal<T>(key: LocalKeys) {
    return localStorage.getItem(key)
  }
}
