<!--github： https://github.com/YouAge-->
<template>
  <div class="free-tabs">
     <Tabs type="editable-card" hide-add size="small"
           v-model:activeKey="activeKey"
           class="tabs"
           @prevClick="callback"
           @nextClick="callback"
           @change="changePage"
           @edit="editTabItem">
       <template v-for="item in tabsList" :key="item.fullPath">
         <a-tab-pane>
           <template #tab>
            <Dropdown :trigger="['contextmenu']">
              <div style="display: inline-block">
                {{item.meta.title}}
              </div>
              <template #overlay>
                <Menu >
                  <AMenuItem key="1" @click="reloadPage">刷新</AMenuItem>
                  <AMenuItem key="3" @click="closeLeftTabs(item)">关闭左侧</AMenuItem>
                  <AMenuItem key="3" @click="closeRightTabs(item)">关闭右侧</AMenuItem>
                  <AMenuItem key="2" @click="closeOtherTabs(item)">关闭其他</AMenuItem>
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
               <AMenuItem key="1" @click="reloadPage">刷新</AMenuItem>
               <AMenuItem key="3" @click="closeLeftTabs($route)">关闭左侧</AMenuItem>
               <AMenuItem key="3" @click="closeRightTabs($route)">关闭右侧</AMenuItem>
               <AMenuItem key="2" @click="closeOtherTabs($route)">关闭其他</AMenuItem>
             </Menu>
           </template>
         </Dropdown>
       </template>
     </Tabs>
  </div>
</template>

<script lang='ts'>
import {defineComponent, computed,ref,watch,unref} from 'vue'
import {Tabs,Dropdown,Menu,Radio} from "ant-design-vue";
import {DownOutlined} from '@ant-design/icons-vue'
import {useRoute,useRouter} from "vue-router";
import {useTabsStore} from '@/store/modules/menuTabs'
import {deepCopy} from '@/utils'
import { message } from 'ant-design-vue';
export default defineComponent({
  name: "FTabs",
  components:{
    Tabs,
    ATabPane: Tabs.TabPane,
    ARadioGroup:Radio.Group,
    ARadioButton:Radio.Button,
    Dropdown,
    Menu,
    AMenuItem: Menu.Item,
    DownOutlined

  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const tabsStore = useTabsStore()

    const activeKey =computed(()=>{
      return tabsStore.activeKey
    })
    const tabsList = computed(()=>{
     return  tabsStore.getTabsList
    })
    // 刷新页面
    const reloadPage = () => {
      router.push({
        path:  unref(route).fullPath
      })
    }

    /** 删除标签*/
    const editTabItem =async function (Key, action) {

      let index = tabsList.value.findIndex(item=> item.fullPath == Key)
      console.log(Key,index)
      if(tabsList.value.length ===1){
        /** 提示当前最后一页，不让关闭*/
        return message.info('这已经是最后一个了')
      }

       await tabsStore.delTabs(index)
      if( Key == activeKey.value){
        /** 想前移动， 如果前面没有，向后移动， 如果最后一个提示*/
        let id = index == 0?index:index -1
        const url = tabsList.value[id].fullPath

        await tabsStore.sheActiveKey(url)
        console.log(url)
        await  router.push(url)
      }
      console.log(tabsList.value.length)

    }
    /** 点击标签*/
    let changePage = (key)=>{
      if(key == activeKey) return false
      const url = tabsList.value.find(item=> item.fullPath == key)
      // 路由跳转
      if (/http(s)?:/.test(url.fullPath)) {
        window.open(key)
      } else {
        router.push(url.fullPath)
      }
    }
    /** 左右切换按钮*/
    function callback(val: string) {
      console.log(val)
    }


    /** 监听路由*/
    watch(
        ()=>route.fullPath,
        (to,from)=>{
          console.log(to,from,tabsList,route)
          const newRoute = deepCopy(route) // 需要深拷贝
          /** 过滤不存在的路由，和不需要添加的路由*/
          tabsStore.addTabs(newRoute)
        }
    )



    return {
      tabsList,
      editTabItem,
      activeKey,
      changePage,
      callback,
      reloadPage,
      closeLeftTabs:tabsStore.delLeftTabs,
      closeRightTabs:tabsStore.delRightTabs,
      closeOtherTabs:tabsStore.defOtherTabs,

    }
  }
})
</script>

<style scoped lang='less'>
.free-tabs{
  border-top: 1px solid #eee;
  background-color: #fff;
  //border-bottom: 1px solid #eee;

  ::v-deep(.tabs) {
    .ant-tabs-bar {
      padding: 2px 0;
      margin: 0;
      background-color: white;
      user-select: none;
    }

    .ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab{
      height: 35px;
      line-height: 35px;
    }


    .ant-tabs-tabpane {
      display: none;
    }


    /** 图标的宽度， */
    .ant-tabs-tab:not(.ant-tabs-tab-active) {
      .anticon-close {
        width: 0;
        transition: width 0.3s;
      }
      /** 显示x*/
      &:hover .anticon-close {
        width: 16px;
      }
    }
  }


}





</style>
