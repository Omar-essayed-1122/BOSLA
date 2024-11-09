<template>
  <Contact />
</template>

<script>
// استخدام التحميل الكسول للمكون Contact
export default {
  name: "ContactV",
  components: {
    Contact: () => import("../components/Contact.vue")  // تحميل الكسول للمكون
  }
}
</script>