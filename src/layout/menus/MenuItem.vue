<!--github： https://github.com/YouAge-->
<template>
  <template v-if="!menuItem.hidden">

      <a-sub-menu v-if="menuItem.children?.length && menuItem.children.length>0" :key="menuItem.path" v-bind="$attrs">
        <template #title>
        <span>
          <icon-font style="color: aliceblue" :type="menuItem.meta.icon" />
          <span>{{menuItem.meta.title}}</span>
        </span>
        </template>
        <template v-for="item in menuItem.children" :key="item.path">
          <template v-if="!item.children">
            <a-menu-item :key="item.path">
              <template #icon>
                <icon-font style="color: black" :type="item.meta.icon" />
              </template>
              <span>{{item.meta.title}}</span>
            </a-menu-item>
          </template>
          <template v-else>
            <f-menu-item :key="item.path" :menu-item="item"></f-menu-item>
          </template>
        </template>
      </a-sub-menu>
      <a-menu-item v-else :key="menuItem.path" >
<!--/*        <icon-font style="color: aliceblue" :type="menuItem.meta.icon" />*/-->
        <template #icon>
          <svg-icon name="free-user" color="#000"/>
<!--          <PieChartOutlined />-->
        </template>
        <span>{{menuItem.meta.title}}</span>
      </a-menu-item>
    </template>
  </template>


<script lang='ts'>
import {defineComponent, computed} from 'vue'
import { Menu } from 'ant-design-vue'
import {PieChartOutlined} from '@ant-design/icons-vue'
import path from "path";
import {deepCopy} from "@/utils";
import {FRouteRecordRaw} from "types/global";
import {IconFont} from '@/components/Icon'
import SvgIcon from "@/components/Icon/src/SvgIcon.vue";
export default defineComponent({
  name: "FMenuItem",
  components:{
    SvgIcon,
    AMenu: Menu,
    ASubMenu: Menu.SubMenu,
    AMenuItem: Menu.Item,
    IconFont,
    PieChartOutlined
  },
  props:{
    menuItem:{
      type:Object,
      default:{}
    }
  },
  setup(props) {
    console.log(props.menuItem)
    console.log(path.resolve('/','abc'))

    function deepPath(urlPath:string,routItem:FRouteRecordRaw) {
       /** 深拷贝*/
      let newObj:FRouteRecordRaw = deepCopy<FRouteRecordRaw>(routItem)
      newObj.path =  path.resolve(urlPath,newObj.path)
      console.log(newObj)
      return newObj
    }


    return {
      deepPath
    }
  }
})
</script>

<style scoped lang='less'>

</style>
