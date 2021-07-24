<!--github： https://github.com/YouAge-->
<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
    :theme="getTheme"
    :inline-collapsed="false"
    @click="clickMenu"
  >
    <template v-for="item in menuList" :key="item.path">
      <f-menu-item :menu-item="item" />
    </template>
  </a-menu>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref, toRefs } from 'vue'
  import { Menu} from 'ant-design-vue'
  import { useMenusSetting } from '@/hooks/setting/useMenusSetting'
  import FMenuItem from "@/layout/menus/MenuItem.vue";
  import path from "path";
  import {routes} from '@/router/baseRouter'
  import { useRouter } from 'vue-router';
  export default defineComponent({
    name: 'Menus',
    components: {
      FMenuItem,
      AMenu: Menu,
      AMenuItem:Menu.Item,
      ASubMenu: Menu.SubMenu,

    },
    setup() {
      const router = useRouter()
      const state = reactive({
        rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
        openKeys: ['sub1'],
        selectedKeys: []
      })

      const { getCollapsed, getTheme } = useMenusSetting()
      function clickMenu  ({key,item,keyPath}){
        if (/http(s)?:/.test(key)) {
          window.open(key)
        } else {
          const url = path.resolve('/',keyPath.join('/'))
          router.push(url)
        }
      }

      return {
        getCollapsed,
        getTheme,
        ...toRefs(state),
        clickMenu,
        menuList:routes
      }
    }
  })
</script>

<style scoped lang="less"></style>
