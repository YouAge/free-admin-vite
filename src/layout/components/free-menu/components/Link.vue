<!--github： https://github.com/YouAge-->
<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue';

  export default defineComponent({
    name: 'Link',
    props: {
      to: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const linkProps = (to) => {
        return {
          to: to,
        };
      };
      return {
        type: 'router-link',
        linkProps,
      };
    },
  });
</script>

<style scoped lang="less"></style>
