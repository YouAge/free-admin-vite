<!--github： https://github.com/YouAge-->
<template>
  <div style="background: #fff;" class="free-header">
    <menu-unfold-outlined
        v-if="collapsed"
        class="trigger"
        @click="() => (collapsed = !collapsed)"
    />
    <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
  </div>
</template>

<script lang='ts'>

import {
  MenuUnfoldOutlined} from '@ant-design/icons-vue';
import {defineComponent, computed,ref} from 'vue'

export default defineComponent({
  name: "freeHeader",
  setup() {
    return {
      collapsed:ref<boolean>(false)
    }
  },
  components:{
    MenuUnfoldOutlined
  }
})
</script>

<style scoped lang='less'>
.free-header{
  display: flex;
  height: 65px;
  width: 100%;
  //padding-left: 200px;
  //margin-left: 200px;
}
</style>
