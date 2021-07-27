<!--github： https://github.com/YouAge-->
<template>
  <div class="access-content">
    <a-card>
      <div style="margin-bottom: 8px">
        <a-button class="editable-add-btn" @click="handleAdd" >Add</a-button>
      </div>
      <a-table :columns="columns" :data-source="data" @change="handleChange" bordered/>
    </a-card>
  </div>

</template>

<script lang='ts'>
import {defineComponent, computed, createVNode, render, mergeProps, ref,createApp} from 'vue'
import {useColumns} from "./useColumns";
import addUser from './add-user.vue'
import {useCreateModal} from '@/hooks/web/useCreateModal';


export default defineComponent({
  name: "access",
  setup() {
    const handleAdd = ()=>{
      let _instance
      const container = document.createElement('div') // 创建div
      const remove = ()=>{ // 清除
        _instance = null
        render(null,container)
        container.remove()
      }
      _instance = createVNode(addUser,{remove,handleOk:(e:MouseEvent)=>{
        console.log('触发',e)
          remove()
        }})
      render(_instance, container)
      console.log(_instance)
      return _instance
    }


    return {
      handleAdd,
      ...useColumns()
    }
  }
})
</script>

<style scoped lang='less'>

</style>
