<!--github： https://github.com/YouAge-->
<template>
  <Header class="freeLayoutHeaderClass">
    <div class="freeLayoutHeaderLeft">
      <!--     // 图标-->
      <span class="freeMenuFold">
        <component :is="collapsed ? 'menu-unfold-outlined' : 'menu-fold-outlined'" @click="toggleCollapsed"
        ></component>
      </span>
        <div>
          <FBreadcrumb />
        </div>
    </div>
    <div class="freeLayoutHeaderAction">
      <a-dropdown>
        <a-avatar>{{ '用户名'}}</a-avatar>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a href="javascript:;">个人中心</a>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item>
              <a ><poweroff-outlined /> 退出登录</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
      <a-tooltip placement="bottom">
        <template #title>
          <span>{{'模式'}}</span>
        </template>
        <div class="freeMenuFold">
          <SettingOutlined />
        </div>
      </a-tooltip>
    </div>
  </Header>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import Menus from '@/layout/menus/index.vue'
  import { Layout,Row, Col,Menu,Avatar,Tooltip,Dropdown } from 'ant-design-vue'
  import { useMenusSetting } from '@/hooks/setting/useMenusSetting'
  import {FBreadcrumb} from './components'
  import components from './components'
  export default defineComponent({
    name: 'PageHeader',
    components: {
      Menus,
      Header: Layout.Header,
      ARow: Row,
      ACol: Col,
      ADropdown:Dropdown,
      AMenuItem:Menu.Item,
      AMenu:Menu,
      AMenuDivider:Menu.Divider,
      AAvatar:Avatar,
      ATooltip:Tooltip,
      FBreadcrumb,
      ...components,
    },
    setup() {
      const { getCollapsed, toggleCollapsed } = useMenusSetting()
      return {
        collapsed: getCollapsed,
        toggleCollapsed
      }
    }
  })
</script>

<style scoped lang="less">
  .ant-layout-header {
    padding: 0;
  }

  .freeLayoutHeaderClass {
    display: flex;
    height: @base-header-default;
    padding: 0;
    margin-left: -1px;
    line-height: 48px;
    //color: #fff;
    background-color: #fff;
    align-items: center;
    justify-content: space-between;

    .freeLayoutHeaderAction,
    .freeLayoutHeaderLeft{
      display: flex;
      align-items: center;
    }

  }
  .freeMenuFold {
    padding: 0 24px;
    cursor: pointer;
    &:hover{
      background-color: #f6f6f6;
    }
  }
</style>
