<!--github： https://github.com/YouAge-->
<template>
  <Sider class="freeSider" v-model:collapsed="getCollapsed" :trigger="null" collapsible >
    <!--  //login-->
    <div class="default-header" >
        <router-link to="/">
          <template v-if="!getCollapsed">
          FreeAdmin
          </template>
          <template v-else>
            <SvgIcon name="free-logo" />
          </template>
        </router-link>
    </div>
    <PaperMenus />
  </Sider>
</template>

<script lang="ts">
  import { defineComponent, computed, ref } from 'vue'
  import PaperMenus from '@/layout/menus/index.vue'
  import { Layout } from 'ant-design-vue'

  import { useMenusSetting } from '@/hooks/setting/useMenusSetting'
  import SvgIcon from "@/components/Icon/src/SvgIcon.vue";

  export default defineComponent({
    name: 'SiderDefault',
    components: {
      SvgIcon,
      PaperMenus,
      Sider: Layout.Sider
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
  .default-header{
    color: #eeeeee;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
  }
</style>
