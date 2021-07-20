<template>
  <AConfigprovider :locale="locale">
    <router-view />
  </AConfigprovider>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import zhCN from 'ant-design-vue/es/locale/zh_CN'
  export default defineComponent({
    name: 'App',
    setup() {
      return {
        locale: zhCN
      }
    }
  })
</script>

<style lang="less"></style>
