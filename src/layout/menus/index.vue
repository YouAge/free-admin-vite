<!--github： https://github.com/YouAge-->
<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
    :theme="theme"
    :inline-collapsed="false"
  >
    <a-menu-item key="1">
      <template #icon>
        <MailOutlined />
      </template>
      Navigation One
    </a-menu-item>
    <a-menu-item key="2">
      <template #icon>
        <CalendarOutlined />
      </template>
      Navigation Two
    </a-menu-item>
    <a-sub-menu key="sub1">
      <template #icon>
        <AppstoreOutlined />
      </template>
      <template #title>Navigation Three</template>
      <a-menu-item key="3">Option 3</a-menu-item>
      <a-menu-item key="4">Option 4</a-menu-item>
      <a-sub-menu key="sub1-2" title="Submenu">
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
      </a-sub-menu>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <template #icon>
        <SettingOutlined />
      </template>
      <template #title>Navigation Four</template>
      <a-menu-item key="7">Option 7</a-menu-item>
      <a-menu-item key="8">Option 8</a-menu-item>
      <a-menu-item key="9">Option 9</a-menu-item>
      <a-menu-item key="10">Option 10</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref, toRefs } from 'vue'
  import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
    CalendarOutlined
  } from '@ant-design/icons-vue'
  import { Menu, SubMenu, MenuItem } from 'ant-design-vue'
  import { useMenusSetting } from '@/hooks/setting/useMenusSetting'

  export default defineComponent({
    name: 'Menus',
    components: {
      MailOutlined,
      AppstoreOutlined,
      SettingOutlined,
      CalendarOutlined,
      AMenu: Menu,
      ASubMenu: SubMenu,
      AMenuItem: MenuItem
    },
    setup() {
      const state = reactive({
        rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
        openKeys: ['sub1'],
        selectedKeys: []
      })
      const onOpenChange = (openKeys: string[]) => {
        const latestOpenKey = openKeys.find((key) => state.openKeys.indexOf(key) === -1)
        if (state.rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
          state.openKeys = openKeys
        } else {
          state.openKeys = latestOpenKey ? [latestOpenKey] : []
        }
      }

      const { getCollapsed, theme } = useMenusSetting()

      return {
        getCollapsed,
        theme,
        ...toRefs(state),
        onOpenChange
      }
    }
  })
</script>

<style scoped lang="less"></style>
