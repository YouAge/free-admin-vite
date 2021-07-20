<!--github： https://github.com/YouAge-->
<template>
  <Layout class="layout">
    <!--    //  login，和header-->
    <SiderDefault />
    <Layout>
      <PageHeader></PageHeader>
      <Content class="layout-content">
        <PaperContent />
      </Content>
      <!--    //页脚-->
    </Layout>
  </Layout>
</template>

<script lang="ts">
  import { defineComponent, computed, ref } from 'vue'
  import { Layout, LayoutSider } from 'ant-design-vue'
  import PageHeader from '@/layout/header/index.vue'
  import { PaperContent } from '@/layout/content'
  import { SiderDefault } from '@/layout/sider'
  import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue'
  export default defineComponent({
    name: 'index',
    components: {
      Layout,
      Content: Layout.Content,
      PageHeader,
      PaperContent,
      LayoutSider,
      UserOutlined,
      LaptopOutlined,
      NotificationOutlined,
      SiderDefault
    },
    setup() {
      return {
        selectedKeys1: ref<string[]>(['2']),
        selectedKeys2: ref<string[]>(['1']),
        collapsed: ref<boolean>(false),
        openKeys: ref<string[]>(['sub1'])
      }
    }
  })
</script>

<style scoped lang="less">
  #components-layout-demo-top-side-2 .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
  }

  .ant-row-rtl #components-layout-demo-top-side-2 .logo {
    float: right;
    margin: 16px 0 16px 24px;
  }

  .site-layout-background {
    background: #fff;
  }
  .ant-layout {
    min-height: calc(100vh - 64px);
  }
</style>
