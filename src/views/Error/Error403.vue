<!--github： https://github.com/YouAge-->
<template>
  <div class="error-content">
    <a-result status="403" title="403" sub-title="Sorry, you are not authorized to access this page.">
      <template #extra>
        <a-button type="primary">Back Home</a-button>
      </template>
    </a-result>
  </div>
</template>

<script lang='ts'>
import {defineComponent, computed} from 'vue'

export default defineComponent({
  name: "Error401",
  setup() {

  }
})
</script>

<style scoped lang='less'>

</style>
