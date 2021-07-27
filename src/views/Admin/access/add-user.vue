<!--github： https://github.com/YouAge-->
<template>
  <a-modal v-model:visible="visible"  v-bind="$attrs" title="Basic Modal" @ok="handleOk" :afterClose="remove">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-modal>

</template>

<script lang="ts">
import {defineComponent,ref} from 'vue'
import { Modal } from 'ant-design-vue'
export default defineComponent({
  name: "addUser",
  components:{
    [Modal.name]: Modal
  },
  props:{
    remove: {
      // 移除模态框
      type: Function
    },
    handleOk: {
      // 点击确定
      type: Function
    }
  },
  setup(props) {
    const visible = ref<boolean>(true);

    const showModal = () => {
      visible.value = true;
    };

    // const handleOk = (e: MouseEvent) => {
    //   console.log(e);
    //   visible.value = false;
    // };
    return {
      visible,
      showModal,
      // handleOk,
    };
  },
})
</script>

<style scoped>

</style>
