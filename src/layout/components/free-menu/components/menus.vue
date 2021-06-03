<!--github： https://github.com/YouAge-->
<template>
  <div v-if="!item.meta.hidden">
    <a-sub-menu v-if="item.children?.length" :key="item.name" v-bind="$attrs">
      <template #title>
        <span>
          <AppstoreOutlined />
          <span>{{ item.meta.title }}</span>
        </span>
      </template>
      <template v-for="child in item.children" :key="child.name">
        <template v-if="!child.children || child.children.length === 0">
          <a-menu-item :key="child.name">
            <AppstoreOutlined />
            <span>{{ child.meta.title }}</span>
          </a-menu-item>
        </template>
        <template v-else>
          <menus :item="child.children" />
        </template>
      </template>
    </a-sub-menu>
    <a-menu-item :key="item.name" v-else>
      <PieChartOutlined />
      <span>{{ item.meta.title }}</span>
    </a-menu-item>
  </div>
</template>

<script lang="ts">
  import { PieChartOutlined, AppstoreOutlined } from '@ant-design/icons-vue';
  import { defineComponent, PropType, ref } from 'vue';
  import { RouteRecordRaw } from 'vue-router';
  export default defineComponent({
    name: 'menus',
    props: {
      item: {
        type: Object as PropType<RouteRecordRaw>,
        required: true,
      },
      basePath: {
        type: String,
        default: '',
      },
    },
    components: {
      PieChartOutlined,
      AppstoreOutlined,
    },
    setup(props) {},
  });
</script>

<style scoped lang="less"></style>
