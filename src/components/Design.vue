<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-black text-white">
    <!-- Header -->
    <header class="w-full p-5 text-center bg-black">
      <h1 class="text-4xl font-bold neon" data-aos="fade-down">خدمات التصميم والجرافيك</h1>
      <p class="mt-2 text-xl" data-aos="fade-down">نحن نقدم تصميمات مبتكرة وجذابة تلبي احتياجات عملائنا.</p>
    </header>

    <!-- Main Content -->
    <main class="flex flex-col items-center p-5">
      <section class="mt-10" data-aos="fade-up">
        <h2 class="text-2xl font-bold">لماذا تختار تصميمات EL BOSLA؟</h2>
        <p class="mt-2">نحن نقدم حلول تصميم إبداعية تساهم في تحسين الهوية البصرية لمشاريعك وتجعلها تبرز في سوق العمل.</p>
      </section>

      <!-- Services Offered -->
      <section class="mt-10" data-aos="fade-up">
        <h2 class="text-2xl font-bold">خدمات التصميم والجرافيك</h2>
        <ul class="mt-5 list-disc list-inside">
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>تصميم الشعار (Logo Design)</li>
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>تصميم المواد الدعائية (Brochures, Flyers)</li>
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>تصميمات الوسائط الاجتماعية (Social Media Graphics)</li>
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>تصميم واجهات المواقع (Web UI Design)</li>
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>خدمة الفيديوهات باستخدام تقنية Whiteboard</li>
        </ul>
      </section>

      <!-- Creative Process -->
      <section class="mt-10" data-aos="fade-up">
        <h2 class="text-2xl font-bold">عملية التصميم</h2>
        <p class="mt-2">نستخدم منهجية مرنة تبدأ من فهم احتياجات العميل، مروراً بتقديم الأفكار، وحتى تنفيذ التصميم بشكل احترافي.</p>
      </section>

      <!-- AI Integration -->
      <section class="mt-10" data-aos="fade-up">
        <h2 class="text-2xl font-bold">استخدام الذكاء الاصطناعي في التصميم</h2>
        <p class="mt-2">نستفيد من أنظمة الذكاء الاصطناعي لتحليل اتجاهات التصميم وتقديم اقتراحات مبتكرة تساهم في تحسين جودة التصاميم.</p>
      </section>

      <!-- Video Service -->
      <section class="mt-10" data-aos="fade-up">
        <h2 class="text-2xl font-bold">خدمة الفيديوهات Whiteboard</h2>
        <p class="mt-2">نقدم خدمة إنتاج الفيديوهات باستخدام تقنية Whiteboard التي تساعد على توضيح الأفكار بطريقة مرئية وجذابة. هذه الخدمة مثالية للشرائح التعليمية والعروض الترويجية.</p>
      </section>

      <!-- Portfolio Section -->
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

.portfolio-item {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
*{
color:#fff
}
</style>