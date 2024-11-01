<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-black text-white">
    <!-- Header -->
    <header class="w-full p-5 text-center bg-black">
      <h1 class="text-4xl font-bold neon" data-aos="fade-down">خدمات البرمجة</h1>
      <p class="mt-2 text-xl" data-aos="fade-down">نقدم مجموعة شاملة من خدمات البرمجة لتلبية احتياجاتكم الرقمية.</p>
    </header>

    <!-- Main Content -->
    <main class="flex flex-col items-center p-5">
      <section class="mt-10" data-aos="fade-up">
        <h2 class="text-2xl font-bold">ما هي خدمات البرمجة التي نقدمها؟</h2>
        <p class="mt-2">نحن نقدم جميع خدمات تطوير الويب بدءًا من تصميم المواقع إلى تطوير التطبيقات.</p>
      </section>

      <!-- Services Offered -->
      <section class="mt-10" data-aos="fade-up">
        <h2 class="text-2xl font-bold">خدمات تطوير الويب</h2>
        <ul class="mt-5 list-disc list-inside">
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>تطوير مواقع الويب الديناميكية (Dynamic Websites)</li>
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>تطوير تطبيقات الويب (Web Applications)</li>
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>تقديم خدمات بناء chatbots لخدمة العملاء (Chatbot Development)</li>
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>تطوير واجهات المستخدم (UI Development)</li>
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>تحسين محركات البحث (SEO Optimization)</li>
        </ul>
      </section>

      <!-- Technologies Used -->
      <section class="mt-10" data-aos="fade-up">
        <h2 class="text-2xl font-bold">التقنيات التي نستخدمها</h2>
        <p class="mt-2">نستخدم أحدث التقنيات لبناء حلول برمجية مميزة:</p>
        <ul class="mt-5 list-disc list-inside">
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>Vue.js</li>
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>Express.js</li>
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>Node.js</li>
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>Multer</li>
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>Animate.css</li>
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>Bootstrap</li>
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>Tailwind CSS</li>
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>AOS Library</li>
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>Font Awesome</li>
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>MySQL DB</li>
        </ul>
      </section>

      <!-- Call to Action -->
      <section class="mt-10">
        <router-link to="/contact" class="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300" data-aos="zoom-in">
          تواصل معنا الآن
        </router-link>
      </section>
    </main>

    <hr class="my-10 border-purple-500" />

    <!-- Footer -->
     <Media />
  </div>
</template>

<script>
 import Media from "./Media.vue";
export default {
components:{
 Media
},
  data() {
    return {
      // Add any relevant data if needed
    };
  },
}
</script>

<style scoped>
.neon {
  text-shadow: 0 0 5px #4b006e, 0 0 10px #4b006e, 0 0 15px #4b006e, 0 0 20px #4b006e;
}
*{
  color:#fff;
}
</style>