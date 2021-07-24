/**
 *@ github： https://github.com/YouAge
 *@ 文件简介： 菜单 tabs 数据功能
 */

import { defineStore } from 'pinia'
import { RouteLocationNormalized } from 'vue-router'

export interface menuTabsState {
  tabsList: RouteLocationNormalized[]
  activeKey: string
}

export const useTabsStore = defineStore({
  id: 'menuTabs',
  state: () => ({
    tabsList: [],
    activeKey: ''
  }),
  getters: {
    getTabsList(): RouteLocationNormalized[] {
      return this.tabsList
    }
  },
  actions: {
    /** sheActiveKey*/
    async sheActiveKey(fullPath: string) {
      this.activeKey = fullPath
    },
    /** 添加*/
    async addTabs(route: RouteLocationNormalized) {
      const { path, name, fullPath, params, query, meta } = route
      /** 过滤掉 不需要添加到标签页的 页面*/

      /** 判断是否存在*/
      const tabHasExits = this.tabsList.find((tab) => tab.fullPath == fullPath)
      if (!tabHasExits) {
        this.tabsList.push(route)
      }
      this.activeKey = fullPath
      // 保存到缓存中
    },
    /** 删除标签*/
    async delTabs(index: number) {
      // const index = this.tabaList.findIndex((item) => item.fullPath == router.fullPath)
      await this.$state.tabsList.splice(index, 1) // index,1,item 插入，删除，切分
    },
    /** 关闭左边标签*/
    async delLeftTabs(router: RouteLocationNormalized) {
      const index = this.$state.tabsList.findIndex((item) => item.fullPath == router.fullPath)
      this.$state.tabsList.splice(0, index) // index,1,item 插入，删除，切分
    },
    /** 关闭右侧标签*/
    async delRightTabs(router: RouteLocationNormalized) {
      const index = this.$state.tabsList.findIndex((item) => item.fullPath == router.fullPath)
      this.$state.tabsList.splice(index + 1) // index,1,item 插入，删除，切分
    },
    /** 关闭除自己外*/
    async defOtherTabs(router: RouteLocationNormalized) {
      this.$state.tabsList = this.$state.tabsList.filter((item) => item.fullPath == router.fullPath)
    }
    /** 关闭全部*/
  }
})

// Need to be used outside the setup
export function useMenuTabsWithOutStore() {
  return useTabsStore(store)
}
