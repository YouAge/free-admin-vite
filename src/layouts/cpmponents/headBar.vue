<style scoped lang="less">
.at-header{
  display: flex;
  align-items: center;
  align-content: center;
  .left{
    
  }
  .right{
    text-align: right;
  }
}
</style>

<template>
<div class="at-header">
  <div class="left">
<!--    <atIcons name="vue"></atIcons>-->
    <el-icon><Fold /></el-icon>

  </div>
  <div class="right">

  </div>
</div>
</template>


<script lang="ts" setup>
import atIcons from "@/components/at-icons";
</script>