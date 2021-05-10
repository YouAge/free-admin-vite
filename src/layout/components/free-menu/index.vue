<!--github： https://github.com/YouAge-->
<template>
  <a-layout-sider v-model:collapsed="collapsed">
    <menus />
  </a-layout-sider>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import Menus from './components/menus.vue'
export default defineComponent({
  name: 'freeMenu',
  setup() {
    return {
      collapsed: ref<boolean>(false),
    }
  },
  components: {
    Menus,
  },
})
</script>

<style scoped lang="less"></style>
