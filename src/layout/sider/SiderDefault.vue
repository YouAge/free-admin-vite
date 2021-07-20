<!--github： https://github.com/YouAge-->
<template>
  <Sider class="freeSider" v-model:collapsed="getCollapsed" :trigger="null" collapsible>
    <!--  //login-->
    <div class="default-header">login</div>
    <PaperMenus />
  </Sider>
</template>

<script lang="ts">
  import { defineComponent, computed, ref } from 'vue'
  import PaperMenus from '@/layout/menus/index.vue'
  import { Layout } from 'ant-design-vue'

  import { useMenusSetting } from '@/hooks/setting/useMenusSetting'

  export default defineComponent({
    name: 'SiderDefault',
    components: {
      PaperMenus,
      Sider: Layout.Sider,
    },
    setup() {
      const { getCollapsed } = useMenusSetting()
      const collapsed = ref<boolean>(false)
      return {
        getCollapsed,
        collapsed
      }
    }
  })
</script>

<style scoped lang="less">
  .freeSider {
    color: #fff;
  }
</style>
