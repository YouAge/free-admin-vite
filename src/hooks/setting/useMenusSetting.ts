/**
 *@ github： https://github.com/YouAge
 *@ 文件简介： 框架设置， 参数还是存在 vuex中
 */

import { useAppStore } from '@/store/modules/app'
import { computed, unref, ref } from 'vue'
import { MenuSetting } from 'types/config'

export function useMenusSetting() {
  const appStore = useAppStore()

  const getCollapsed = computed(() => appStore.getMenuSetting.collapsed)
  const getTheme = computed(() => appStore.getMenuSetting.theme)

  // 设置 m
  function setMenuSetting(menuConfig: Partial<MenuSetting>): void {
    appStore.setMenusSetting(menuConfig)
  }
  function toggleCollapsed() {
    setMenuSetting({ collapsed: !unref(getCollapsed) })
  }

  return {
    toggleCollapsed,
    getCollapsed,
    getTheme
  }
}
