<!--github： https://github.com/YouAge-->
<template>
  <div>
    <FTabs></FTabs>
<!--    <RouterView>-->
<!--   // 添加全局消息关播-->
      <div class="free-page-view">
        <router-view>
        </router-view>
      </div>


<!--    </RouterView>-->
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import FTabs from "@/layout/tabs/FTabs.vue";
  import {Card} from "ant-design-vue";

  export default defineComponent({
    name: 'PaperContent',
    components: {
      FTabs,
      ACard:Card
    },
    setup() {}
  })
</script>

<style scoped lang="less">
.free-page-view{
  min-height: calc(100vh - @base-header-default - 35px);
  margin: 10px 15px;
}

</style>
