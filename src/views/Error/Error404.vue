<!--github： https://github.com/YouAge-->
<template>
  <div class="error-content">
    <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
      <template #extra>
        <a-button type="primary" to="/">Back Home</a-button>
      </template>
    </a-result>
  </div>
</template>

<script lang='ts'>
import {defineComponent, computed} from 'vue'

export default defineComponent({
  name: "Error404",
  setup() {

  }
})
</script>

<style scoped lang='less'>

</style>
