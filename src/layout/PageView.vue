<!--github： https://github.com/YouAge-->
<template>
  <page-header-wrapper>
    <router-view />
  </page-header-wrapper>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'

  export default defineComponent({
    name: 'PageView',
    setup() {}
  })
</script>

<style scoped lang="less"></style>
