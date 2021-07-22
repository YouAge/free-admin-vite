<!--github： https://github.com/YouAge-->
<template>
  <a-breadcrumb>
    <a-breadcrumb-item>Home</a-breadcrumb-item>
    <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
    <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
    <a-breadcrumb-item>An Application</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script lang='ts'>
import {defineComponent, computed} from 'vue'
import {Breadcrumb} from "ant-design-vue";

export default defineComponent({
  name: "FBreadcrumb",
  components:{
    ABreadcrumb:Breadcrumb,
    ABreadcrumbItem:Breadcrumb.Item
  },
  setup() {

  }
})
</script>

<style scoped lang='less'>

</style>
