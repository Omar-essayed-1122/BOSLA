<template>
  <Design />
</template>

<script>
// Lazy loading for the Design component for better performance
export default {
  name: "DesignV",
  components: {
    Design: () => import("../components/Design.vue"), // Lazy loading of the Design component
  },
};
</script>

<style scoped>
/* You can add some scoped styles here if necessary */
</style>