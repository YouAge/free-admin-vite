<!--github： https://github.com/YouAge-->
<template>
  <div>
    <FTabs></FTabs>
    <div class="free-page-view">
      <router-view :key="key" v-slot="{ Component }">
        <transition appear name="fade-transform" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import FTabs from "@/layout/tabs/FTabs.vue";
  import {Card} from "ant-design-vue";
  import {useRoute} from "vue-router";

  export default defineComponent({
    name: 'PaperContent',
    components: {
      FTabs,
      ACard:Card
    },
    setup() {
      const route = useRoute();
      const key = computed(() => route.path);
      return { key };
    }
  })
</script>

<style scoped lang="less">
.free-page-view{
  min-height: calc(100vh - @base-header-default - 35px);
  margin: 10px 15px;
}

</style>
