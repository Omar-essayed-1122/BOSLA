<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-black text-white">
    <!-- Header -->
    <header class="w-full p-5 text-center bg-black">
      <h1 class="text-4xl font-bold neon" data-aos="fade-down">خدمات إدارة المحتوى وكتابته</h1>
      <p class="mt-2 text-xl" data-aos="fade-down">نحن نقدم خدمات كتابة محتوى احترافية تلبي احتياجات عملائنا.</p>
    </header>

    <!-- Main Content -->
    <main class="flex flex-col items-center p-5">
      <section class="mt-10" data-aos="fade-up">
        <h2 class="text-2xl font-bold">لماذا تختار خدمات إدارة المحتوى من EL BOSLA؟</h2>
        <p class="mt-2">نحن نتفهم أهمية المحتوى الجيد في جذب العملاء وزيادة التفاعل، لذلك نقدم خدمات كتابة محتوى تتماشى مع احتياجات عملائنا.</p>
      </section>

      <!-- Services Offered -->
      <section class="mt-10" data-aos="fade-up">
        <h2 class="text-2xl font-bold">خدمات إدارة المحتوى</h2>
        <ul class="mt-5 list-disc list-inside">
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>كتابة المقالات والمدونات (Article & Blog Writing)</li>
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>كتابة المحتوى لوسائل التواصل الاجتماعي (Social Media Content)</li>
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>تحرير ومراجعة المحتوى (Content Editing & Proofreading)</li>
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>إنشاء محتوى للويب (Web Content Creation)</li>
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>تخطيط استراتيجيات المحتوى (Content Strategy Planning)</li>
        </ul>
      </section>

      <!-- Creative Process -->
      <section class="mt-10" data-aos="fade-up">
        <h2 class="text-2xl font-bold">عملية إدارة المحتوى</h2>
        <p class="mt-2">نبدأ بفهم أهداف العميل ونقوم بتطوير محتوى يتناسب مع تلك الأهداف، مع التركيز على جودة المحتوى وجاذبيته.</p>
      </section>

      <!-- AI Integration -->
      <section class="mt-10" data-aos="fade-up">
        <h2 class="text-2xl font-bold">استخدام الذكاء الاصطناعي في إدارة المحتوى</h2>
        <p class="mt-2">نستفيد من أنظمة الذكاء الاصطناعي لتحليل بيانات الجمهور وتحديد الاتجاهات، مما يساعدنا على تحسين جودة وفاعلية المحتوى.</p>
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