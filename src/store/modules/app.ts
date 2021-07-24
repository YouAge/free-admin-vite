/**
 *@ github： https://github.com/YouAge
 *@ 文件简介：
 */
import { store } from '@/store'
import { defineStore } from 'pinia'

import { Persistent } from '@/utils/create'
import { MENU_CACHE_KEY } from '@/enums/cacheMnum'
import { deepMerge } from '@/utils'
import { MenuSetting } from 'types/config'
import { menuDefault } from '@/config'
import { DeepPartial } from '../../../types/global'

interface AppState {
  MenuConfig: MenuSetting | null
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    MenuConfig: menuDefault
  }),
  getters: {
    /** 获取主题设置*/
    getMenuSetting(): MenuSetting {
      return this.MenuConfig || ({} as MenuSetting)
    }
  },
  actions: {
    setMenusSetting(config: DeepPartial<MenuSetting>): void {
      // 设置数据
      this.MenuConfig = deepMerge(this.MenuConfig || {}, config)
      // 存储数据 菜单配置---
    }
  }
})
// Need to be used outside the setup
export function useAppStoreWithOut() {
  return useAppStore(store)
}
