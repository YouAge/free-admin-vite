<!--github： https://github.com/YouAge-->
<template>
  <a-layout-sider v-model:collapsed="collapsed" class="f-scroll">
    <a-menu theme="dark" mode="inline"
    @click="clickMenuItem"
    :inline-collapsed="collapsed">
      <menus
        v-for="route in routers"
        :key="route.name"
        :item="route"
      />
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import Menus from './components/menus.vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
export default defineComponent({
  name: 'freeMenu',
  setup() {
    const routers = useRouter().options.routes
    const router = useRouter()
    const store = useStore()
    console.log(router)

    // 点击菜单
    const clickMenuItem = ({ item, key, keyPath }) =>{
      if (/http(s)?:/.test(key)) {
        window.open(key)
      } else {
        router.push({ name: key })
      }
    }

    return {
      routers,
      collapsed: computed(() => store.getters.collapsed),
      clickMenuItem
    }
  },
  components: {
    Menus,

  },
})
</script>

<style scoped lang="less">
.f-scroll {
  height: 100vh;
  overflow: auto;
  /*滚动条整体样式*/
  &::-webkit-scrollbar {
    width: 5px;
    height: 1px;
    display: none;
  }
  &:hover::-webkit-scrollbar {
    display: block;
  }
  /*滚动条里面小方块*/
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #42b983;
    background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
  }
  &::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #ededed;
    border-radius: 10px;
  }
}
</style>
