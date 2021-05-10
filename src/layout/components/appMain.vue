<!--github： https://github.com/YouAge-->
<template>
  <section class="app-main">
    <router-view :key="key" v-slot="{ Component }">
      <transition appear name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<script lang="ts">
  import { defineComponent, computed, Component } from 'vue';
  import { useRoute } from 'vue-router';
  export default defineComponent({
    name: 'appMain',
    setup() {
      const route = useRoute();
      const key = computed(() => route.path);
      return { key };
    },
  });
</script>

<style scoped lang="less"></style>
