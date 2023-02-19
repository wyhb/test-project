<template>
  <div>{{ data }}</div>
</template>
<script>
import { inject } from 'vue';
export default {
  setup() {
    const data = inject('testInfo')
    return {
      data,
    }
  }
}
</script>
