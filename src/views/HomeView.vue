<template>
  <Home />
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: "HomeV",
  components: {
    Home: defineAsyncComponent(() => import('../components/Home.vue'))
  }
}
</script>