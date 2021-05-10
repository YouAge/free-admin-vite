<!--github： https://github.com/YouAge-->
<template>
  <a-layout>
    <!--    // hooks 组件测试-->
    <free-menu />
    <free-header />
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'

import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue'
import { freeMenu,freeHeader } from './components'

export default defineComponent({
  name: 'Layout',
  setup() {
    return {
      selectedKeys: ref<string[]>(['1']),
      collapsed: ref<boolean>(false),
    }
  },
  components: {
    freeHeader,
    freeMenu,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
})
</script>

<style scoped lang="less">
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
