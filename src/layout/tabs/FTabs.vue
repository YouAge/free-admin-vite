<!--github： https://github.com/YouAge-->
<template>
  <div class="free-tabs">
     <Tabs type="editable-card" hide-add size="small"
           v-model:activeKey="activeKey"
           class="tabs"
           @change="changePage"
           @edit="editTabItem">
       <template v-for="item in tabsList" :key="item.fullPath">
         <a-tab-pane>
           <template #tab>
            <Dropdown :trigger="['contextmenu']">
              <div style="display: inline-block">
                {{item.title}}
              </div>
              <template #overlay>
                <Menu >
                  <AMenuItem key="1">刷新</AMenuItem>
                  <AMenuItem key="3">关闭左侧</AMenuItem>
                  <AMenuItem key="3">关闭右侧</AMenuItem>
                  <AMenuItem key="2">关闭所有</AMenuItem>
                </Menu>
              </template>
            </Dropdown>
           </template>
         </a-tab-pane>
       </template>
       <template #tabBarExtraContent>
         <Dropdown :trigger="['click']">
           <a class="ant-dropdown-link" @click.prevent>
             <down-outlined :style="{ fontSize: '20px' }" />
           </a>
           <template #overlay>
             <Menu >
               <AMenuItem key="1">刷新</AMenuItem>
               <AMenuItem key="3">关闭左侧</AMenuItem>
               <AMenuItem key="3">关闭右侧</AMenuItem>
               <AMenuItem key="2">关闭所有</AMenuItem>
             </Menu>
           </template>
         </Dropdown>
       </template>
     </Tabs>
  </div>
</template>

<script lang='ts'>
import {defineComponent, computed,ref} from 'vue'
import {Tabs,Dropdown,Menu} from "ant-design-vue";
import {DownOutlined} from '@ant-design/icons-vue'

export default defineComponent({
  name: "FTabs",
  components:{
    Tabs,
    ATabPane: Tabs.TabPane,
    Dropdown,
    Menu,
    AMenuItem: Menu.Item,
    DownOutlined

  },
  setup() {

    const tabsList = [
      {fullPath:'/abc1',title:"菜单一"},
      {fullPath:'/abc2',title:"菜单二"},
      {fullPath:'/abc3',title:"菜单三"},
      {fullPath:'/abc4',title:"菜单五"},
      {fullPath:'/abc5',title:"菜单六"},
    ]
    let activeKey = ref(1)
    const editTabItem = function () {

    }
    let changePage = (key)=>{
      console.log(key)
      activeKey = key

    }
    return {
      tabsList,
      editTabItem,
      activeKey,
      changePage
    }
  }
})
</script>

<style scoped lang='less'>
.free-tabs{
  border-top: 1px solid #eee;
  background-color: #fff;
  //border-bottom: 1px solid #eee;
}

  ::v-deep(.tabs) {
    .ant-tabs-bar {
      padding: 4px 20px 0 10px;
      margin: 0;
      background-color: white;
      user-select: none;
    }

    .ant-tabs-tabpane {
      display: none;
    }

    .ant-tabs-tab:not(.ant-tabs-tab-active) {
      .anticon-close {
        width: 0;
        transition: width 0.3s;
      }

      &:hover .anticon-close {
        width: 16px;
      }
    }
}


</style>
