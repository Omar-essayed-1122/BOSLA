<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-black text-white">
    <!-- Header -->
    <header class="w-full p-5 text-center bg-black">
      <h1 class="text-4xl font-bold neon" data-aos="fade-down">خدمات التسويق الإلكتروني</h1>
      <p class="mt-2 text-xl" data-aos="fade-down">نحن هنا لدعم نجاح مشاريعك التجارية من خلال التسويق الرقمي الفعال.</p>
    </header>

    <!-- Main Content -->
    <main class="flex flex-col items-center p-5">
      <section class="mt-10" data-aos="fade-up">
        <h2 class="text-2xl font-bold">لماذا تختار EL BOSLA؟</h2>
        <p class="mt-2">نقدم لك حلول تسويقية متكاملة تتناسب مع احتياجاتك، مع فريق محترف يمتلك خبرات واسعة في مجال التسويق الرقمي.</p>
      </section>

      <!-- Services Offered -->
      <section class="mt-10" data-aos="fade-up">
        <h2 class="text-2xl font-bold">خدماتنا</h2>
        <ul class="mt-5 list-disc list-inside">
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>الجرافيك ديزاين بجميع أنواعه</li>
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>التسويق عبر وسائل التواصل الاجتماعي</li>
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>إدارة المحتوى وتحسين محركات البحث (SEO)</li>
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>إنشاء المواقع الإلكترونية وتطويرها</li>
        </ul>
      </section>

      <!-- Marketing Strategies -->
      <section class="mt-10" data-aos="fade-up">
        <h2 class="text-2xl font-bold">استراتيجيات التسويق</h2>
        <p class="mt-2">نعتمد على استراتيجيات تسويق مبتكرة تضمن الوصول إلى جمهورك المستهدف وتحقيق نتائج ملموسة. نستخدم البيانات والتحليلات لفهم سلوك العملاء وتقديم الحلول المناسبة.</p>
      </section>

      <!-- AI Integration -->
      <section class="mt-10" data-aos="fade-up">
        <h2 class="text-2xl font-bold">تحليل الحملات الإعلانية باستخدام الذكاء الاصطناعي</h2>
        <p class="mt-2">نحن في EL BOSLA نستخدم أنظمة الذكاء الاصطناعي المتقدمة لتحليل الحملات الإعلانية وتقديم تقارير دقيقة تساعدك في فهم أداء حملاتك بشكل أفضل. يساعدك هذا على اتخاذ قرارات مستنيرة وتحقيق نتائج أعلى.</p>
      </section>

      <!-- Testimonials -->
      <section class="mt-10" data-aos="fade-up">
        <h2 class="text-2xl font-bold">شهادات عملائنا</h2>
        <swiper-container @swiper="onSwiper" class="my-5">
          <swiper-slide v-for="testimonial in testimonials" :key="testimonial.id">
            <div class="testimonial-box p-4 border border-purple-500 rounded-lg">
              <p class="font-semibold">"{{ testimonial.feedback }}"</p>
              <p class="mt-2 text-sm text-gray-400">- {{ testimonial.name }}</p>
            </div>
          </swiper-slide>
        </swiper-container>
        <div class="flex justify-center mt-2">
          <button @click="prevSlide" class="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300">السابق</button>
          <button @click="nextSlide" class="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300">التالي</button>
        </div>
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
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import Media from "./Media.vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
    Media
  },
  data() {
    return {
      testimonials: [
        { id: 1, name: 'أحمد محمد', feedback: 'تحسن ملحوظ في مبيعاتي بفضل خدماتهم!' },
        { id: 2, name: 'سارة علي', feedback: 'فريق محترف ومتفاني في العمل.' },
        { id: 3, name: 'كريم يوسف', feedback: 'أنصح الجميع بالتعاون معهم لتحقيق أهدافهم التسويقية.' },
      ],
      swiper: null,
    };
  },
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
    },
    prevSlide() {
      if (this.swiper) {
        this.swiper.slidePrev();
      }
    },
    nextSlide() {
      if (this.swiper) {
        this.swiper.slideNext();
      }
    }
  }
}
</script>

<style scoped>
*{
  color:#fff;
}
.neon {
  text-shadow: 0 0 5px #4b006e, 0 0 10px #4b006e, 0 0 15px #4b006e, 0 0 20px #4b006e;
}

.testimonial-box {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>