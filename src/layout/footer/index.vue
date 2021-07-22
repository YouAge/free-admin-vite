<!--github： https://github.com/YouAge-->
<template>
  <Footer>
    <div>
      这个底部
    </div>
  </Footer>
</template>

<script lang='ts'>
import {defineComponent, computed} from 'vue'
import {Layout} from "ant-design-vue";

export default defineComponent({
  name: "FFooter",
  components:{Footer:Layout.Footer},
  setup() {
    return {}
  }
})
</script>

<style scoped lang='less'>

</style>
