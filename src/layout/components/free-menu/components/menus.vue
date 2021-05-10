<!--github： https://github.com/YouAge-->
<template>
  <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
    <a-menu-item key="1">
      <user-outlined />
      <span>nav 1</span>
    </a-menu-item>
    <a-menu-item key="2">
      <video-camera-outlined />
      <span>nav 2</span>
    </a-menu-item>
    <a-menu-item key="3">
      <upload-outlined />
      <span>nav 3</span>
    </a-menu-item>
  </a-menu>
</template>

<script lang="ts">
  import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue';
  import { defineComponent, computed, ref } from 'vue';

  export default defineComponent({
    name: 'menus',
    setup() {
      return {
        selectedKeys: ref<string[]>(['1']),
      };
    },
    components: {
      UploadOutlined,
      VideoCameraOutlined,
      UserOutlined,
    },
  });
</script>

<style scoped lang="less"></style>
