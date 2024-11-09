<template>
  <Marketing />
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: "MarketingV",
  components: {
    Marketing: defineAsyncComponent(() => import("../components/Marketing.vue"))
  }
}
</script>