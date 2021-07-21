<!--github： https://github.com/YouAge-->
<template>
  <div>
     <Tabs type="editable-card" size="small">
       <a-tab-pane key="1" tab="Tab 1">Content of tab 1</a-tab-pane>
       <a-tab-pane key="2" tab="Tab 2">Content of tab 2</a-tab-pane>
       <a-tab-pane key="3" tab="Tab 3">Content of tab 3</a-tab-pane>

     </Tabs>
  </div>
</template>

<script lang='ts'>
import {defineComponent, computed} from 'vue'
import {Tabs} from "ant-design-vue";

export default defineComponent({
  name: "FTabs",
  components:{
    Tabs,
    ATabPane: Tabs.TabPane,
  },
  setup() {

  }
})
</script>

<style scoped lang='less'>

</style>
