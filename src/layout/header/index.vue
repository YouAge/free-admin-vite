<!--github： https://github.com/YouAge-->
<template>
  <Header class="freeLayoutHeaderClass">
    <div class="freeLayoutHeaderLeft">
      <!--     // 图标-->
      <span class="freeMenuFold">
        <component
          :is="collapsed ? 'menu-unfold-outlined' : 'menu-fold-outlined'"
          @click="toggleCollapsed"
        ></component>
      </span>
    </div>
    <div class="freeLayoutHeaderAction"></div>
  </Header>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { Layout } from 'ant-design-vue'
  import Menus from '@/layout/menus/index.vue'
  import { Row, Col } from 'ant-design-vue'
  import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
  import { useMenusSetting } from '@/hooks/setting/useMenusSetting'
  export default defineComponent({
    name: 'PageHeader',
    components: {
      Menus,
      Header: Layout.Header,
      ARow: Row,
      ACol: Col,
      MenuUnfoldOutlined,
      MenuFoldOutlined
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
    height: 64px;
    padding: 0;
    margin-left: -1px;
    line-height: 48px;
    //color: #fff;
    background-color: #fff;
    align-items: center;
    justify-content: space-between;
  }
  .freeMenuFold {
    padding: 0 24px;
    cursor: pointer;
  }
</style>
