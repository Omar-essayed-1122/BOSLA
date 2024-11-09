<template>
  <Suspense>
    <!-- استخدام Suspense لتحميل المكونات كسولاً -->
    <template #default>
      <NavBar />
      <router-view />
      <FotterMe />
    </template>
    <template #fallback>
      <!-- مكون مؤقت يظهر أثناء تحميل المكونات الأخرى -->
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script>
  // التحميل الكسول للمكونات
  const NavBar = () => import('./components/NavBar.vue');
  const FotterMe = () => import('./components/FotterMe.vue');
  
  export default {
    name: "App",
    components: {
      NavBar,
      FotterMe,
    }
  }
</script>

<style lang="scss">
  /* تحسين تحميل الخطوط: استخدام font-display: swap لتحميل النص فورًا */
  @font-face {
    font-family: 'Cairo'; 
    src: url('@/assets/Cairo/Cairo-VariableFont_slnt,wght.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap; /* تحسين التحميل */
  }

  * {
    font-family: 'Cairo', sans-serif;
    font-size: 13px;
    font-weight: 500;
    margin: 0; /* إزالة الهوامش غير الضرورية */
    padding: 0; /* إزالة الحشوات غير الضرورية */
  }

  body {
    background: #330099;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    padding: 30px;
  }

  a {
    font-weight: bold;
    color: #2c3e50;
  }

  .router-link-exact-active {
    color: #42b983;
  }

  /* تحسين CSS بحيث لا يتم تطبيق الخطوط على جميع العناصر إذا لم يكن ذلك ضرورياً */
  h1 {
    font-size: 18px;
  }

  /* إضافة تصميم بسيط للمحتوى ليظهر بشكل أسرع */
  .rounded, .rounded-lg {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  @media (min-width: 768px) {
    * {
      font-size: 16px; /* تقليل حجم الخط قليلاً لزيادة الأداء */
    }
  }
</style>