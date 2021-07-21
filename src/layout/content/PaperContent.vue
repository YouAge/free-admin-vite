<!--github： https://github.com/YouAge-->
<template>
  <div>
  <FTabs></FTabs>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import FTabs from "@/layout/tabs/FTabs.vue";

  export default defineComponent({
    name: 'PaperContent',
    components: {FTabs},
    setup() {}
  })
</script>

<style scoped lang="less"></style>
