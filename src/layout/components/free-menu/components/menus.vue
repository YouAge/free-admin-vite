<!--github： https://github.com/YouAge-->
<template>
  <template v-if="!menuItem.hidden">
    <a-sub-menu v-if="menuItem.children?.length" :key="menuItem.name" v-bind="$attrs">
      <template #title>
        <span>
          
          <InboxOutlined />
          <span>{{ menuItem.meta.title }}</span>
        </span>
      </template>
      <template v-for="item in menuItem.children" :key="item.name">
        <template v-if="!item.children">
          <a-menu-item :key="item.name">
            <InboxOutlined />
            <span>{{ item.meta.title }}</span>
          </a-menu-item>
        </template>
        <template v-else>
          <menus :key="item.name" :menu-item="item" />
        </template>
      </template>
    </a-sub-menu>
    <a-menu-item v-else :key="menuItem.name">
      <InboxOutlined />
      <span>{{ menuItem.meta.title }}</span>
    </a-menu-item>
  </template>
</template>

<script lang="ts">
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  InboxOutlined
} from '@ant-design/icons-vue'
import { defineComponent, computed, ref } from 'vue'

export default defineComponent({
  name: 'menus',
  props:{
    menuItem:{
      type:Object,
      default:{}
    },
    basePath:{
      type:String,
      default:''
    }

  },
  setup() {
    return {
      selectedKeys: ref<string[]>(['1']),
    }
  },
  components: {
    UploadOutlined,
    VideoCameraOutlined,
    UserOutlined,
    InboxOutlined
  },
})
</script>

<style scoped lang="less"></style>
