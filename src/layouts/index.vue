<template>
  <div class="layout">
      <div class="at-left" :style="{width: isCollapse?'60px':'200px'}">
          <div class="at-logo">
            <img src="../assets/logo.png" class="at-img"/>
             <div class="at-title" v-show="!isCollapse">Atom Admin</div>
          </div>
      </div>
      <div class="at-right" :style="{marginLeft: isCollapse?'60px':'200px'}">
        <div class="at-right-top">
          <head-bar />
        </div>
        <div class="at-tight-content">

        </div>
      </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import headBar from './cpmponents/headBar.vue'
import HeadBar from "@/layouts/cpmponents/headBar.vue";
const isCollapse = ref(false)

</script>

<style scoped lang="less">
.layout{
  display: flex;
}
.at-left{
  position: fixed;
  left: 0;
  height: 100vh;
  background: #545C64;

  .at-logo{
    height: @base-header-height;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    background-color: #1B96C6;
    .at-img{
      width: 40px;
      height: 40px;
      border-radius: 4px;
    }
    .at-title{
      font-size: 20px;
      color: #6FC3E5;
      margin-left: 15px;
    }
  }
}
.at-right{
  flex: 1;

  .at-right-top{
    height: @base-header-height;
    //background-color: #F3F3F5;
    box-sizing: border-box;
    box-shadow: 0 2px 5px rgb(0 0 0 / 6%);
  }
}

</style>