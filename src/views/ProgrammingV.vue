<template>
  <Programming />
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: "ProgrammingV",
  components: {
    Programming: defineAsyncComponent(() => import("../components/Programming.vue"))
  }
}
</script>