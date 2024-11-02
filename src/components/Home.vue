<template>
  <div lang="ar" dir="rtl" class="flex flex-col items-center justify-center min-h-screen bg-black text-white">
    <!-- Header -->
    <header class="w-full p-5 text-center bg-black">
      <h1 class="text-4xl font-bold neon type" data-aos="fade-down">EL BOSLA _ Digital Marketing</h1>
      <p class="mt-2 text-xl" data-aos="fade-down">نحن نقدم حلول رقميه متميزه ولدينا خبره كبيره في المجال</p>
    </header>

    <!-- Main Content -->
    <main class="flex flex-col items-center p-5">
      <h2 class="mt-10 text-3xl font-semibold" data-aos="fade-up">CEO | YOUSEF ALaa</h2>
      <h3 class="mt-2 text-xl" data-aos="fade-up">صانع محتوي وهذه طريقتنا الأساسية في التسويق</h3>

      <section class="mt-10" data-aos="fade-up">
        <h2 class="text-2xl font-bold">نقدم خدمات التسويق الالكتروني</h2>
        <ul class="mt-5 list-disc list-inside">
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>الجرافيك ديزاين بجميع أنواعه</li>
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>التسويق</li>
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>إدارة المحتوي</li>
          <li class="flex items-center"><i class="fas fa-check-circle mr-2"></i>إنشاء المواقع</li>
        </ul>
      </section>

      <!-- Vision and Mission -->
      <section class="mt-10" data-aos="fade-up">
        <h2 class="text-2xl font-bold">رؤيتنا ورسالتنا</h2>
        <p class="mt-2">نحن نؤمن بقوة التسويق الرقمي في تحقيق الأهداف التجارية. نهدف إلى تقديم حلول مبتكرة تتناسب مع احتياجات عملائنا.</p>
      </section>

      <!-- Customer Testimonials -->
      <section class="mt-10" data-aos="fade-up">
        <h2 class="text-2xl font-bold">توصيات العملاء</h2>
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

      <!-- Additional Information -->
      <section class="mt-10" data-aos="fade-up">
        <h2 class="text-2xl font-bold">معلومات عنا</h2>
        <p class="mt-2">تأسست شركة EL BOSLA لتكون واحدة من الشركات الرائدة في مجال التسويق الرقمي. نسعى دائمًا لتقديم أفضل الخدمات لعملائنا من خلال فريق محترف وخبرات متراكمة.</p>
        <p class="mt-2">نحن هنا لدعمك في تحقيق أهدافك التجارية، سواء كنت تحتاج إلى تحسين وجودك على الإنترنت أو إدارة حملات تسويقية فعالة.</p>
      </section>

      <!-- Call to Action Button -->
      <section class="mt-10">
        <router-link to="/contact" class="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300" data-aos="zoom-in">
          ابدأ معنا الآن
        </router-link>
      </section>
    </main>

    <hr class="my-10 border-purple-500" />

    <!-- Footer -->
   <Media />
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from 'typed.js';
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
        { id: 1, name: 'أحمد محمد', feedback: 'خدمات مميزة وفريق عمل محترف!' },
        { id: 2, name: 'سارة علي', feedback: 'لقد ساعدوني في تحسين مبيعات متجري بشكل ملحوظ.' },
        { id: 3, name: 'كريم يوسف', feedback: 'تجربة رائعة، أنصح الجميع بالتعامل معهم.' },
      ],
      swiper: null,
    };
  },
  mounted() {
    AOS.init();
    this.initTyped();
  },
  methods: {
    initTyped() {
      const options = {
        strings: ["نحن هنا لدعمك!", "حقق أهدافك معنا!", "تسويق رقمي مبتكر"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
      };
      new Typed('.neon', options);
    },
    onSwiper(swiper) {
      this.swiper = swiper; // تعيين swiper بعد تحميله
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
.neon {
  text-shadow: 0 0 5px #4b006e, 0 0 10px #4b006e, 0 0 15px #4b006e, 0 0 20px #4b006e;
  
}

.testimonial-box {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* إضافة ارتفاع ثابت للقسم */
.main-content {
  min-height: 300px; /* أو أي قيمة تناسبك */
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }
}
.type{
  min-height:70px;
}
</style>
