<template>
  <div dir="rtl" class="body">
    <header class="py-4 animate__animated animate__fadeInDown"></header>

    <!-- Carousel with Dynamic Image Links -->
    <div class="bg-white carousel">
      <div class="bg-white carousel-container overflow-hidden swiper-container">
        <div class="swiper-wrapper carousel-images">
          <div class="swiper-slide">
            <img :src="carouselImages[0]" alt="صورة 1" loading="lazy">
          </div>
          <div class="swiper-slide">
            <img :src="carouselImages[1]" alt="صورة 2" loading="lazy">
          </div>
          <div class="swiper-slide">
            <img :src="carouselImages[2]" alt="صورة 3" loading="lazy">
          </div>
        </div>
        <div class="swiper-pagination points"></div>
      </div>
    </div>

    <div class="about_us">
      <!-- About Us Section -->
      <section class="py-8" data-aos="fade-up">
        <div class="about-co">
          <h2 class="font-thin mb-4 about">عن الشركة</h2>
          <p class="px-4">{{ aboutUsText }}</p>
        </div>
      </section>
      <hr>
      <!-- Services Section -->
      <section class="py-8" data-aos="fade-up">
        <h2 class="font-thin mb-4">نقدم العديد من الخدمات</h2>
        <div class="px-4">
          <div v-for="(service, index) in services" :key="index" class="mb-8" data-aos="fade-up">
            <img :alt="service.alt" class="mx-auto mb-2" :src="service.image" :width="service.width" :height="service.height" loading="lazy">
            <h3 class="font-thin">{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </section>
    </div>

    <!-- Contact Section -->
    <section class="bg-black py-8" data-aos="fade-up">
      <h2 class="font-thin mb-4">تواصل معنا</h2>
      <div class="px-4">
        <button class="bg-blue text-white py-2 px-4 rounded-full mb-4" @click="contactUs">اتصل بنا</button>
        <button class="bg-blue text-white py-2 px-4 rounded-full mb-4" @click="requestConsultation">طلب استشارة</button>
        <button class="bg-blue text-white py-2 px-4 rounded-full mb-4" @click="viewServices">عرض خدماتنا</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Dynamic Links for Carousel and Services
      carouselImages: [
        "@/assets/res/img/icons/5.png",
        "@/assets/res/img/icons/4.png",
        "@/assets/res/img/icons/تسويق.png",
      ],
      aboutUsText: "نحن نقدم خدمات التسويق الإلكتروني وتصميم وإنشاء وتطوير المواقع، حيث نعمل كشريكك الاستراتيجي لتحقيق النجاح عبر الإنترنت. مع فريق من الخبراء، نحرص على تقديم حلول مبتكرة ومخصصة لعملائنا. نحن نسعى دائمًا لتمكين الشركات من تحقيق النمو الرقمي وزيادة تواجدها الإلكتروني.",
      services: [
        {
          title: "تصميم الهوية البصرية",
          image: "@/assets/res/img/icons2/1000518776-removebg-preview.png",
          width: 200,
          height: 200,
          alt: "تصميم الهوية البصرية",
          description: " نقدم خدمات تصميم هويات تجارية فريدة تعكس شخصية علامتك التجارية وتجذب العملاء المستهدفين."
        },
        {
          title: "تصميمات سوشيال ميديا",
          image: "@/assets/res/img/icons2/1000518850-removebg-preview.png",
          width: 250,
          height: 50,
          alt: "تصميمات سوشيال ميديا",
          description: " نقدم تصاميم سوشيال ميديا احترافية تعكس جاذبية علامتك وتزيد من تفاعل جمهورك."
        },
        {
          title: "تصميم وبرمجة المواقع",
          image: "@/assets/res/img/icons2/1000518641-ai-brush-removebg-16a1z4n.png",
          width: 250,
          height: 50,
          alt: "تصميم وبرمجة المواقع",
          description: " نصمم ونبرمج المواقع بأحدث التقنيات لضمان تجربة مستخدم مميزة."
        },
        {
          title: "إدارة صفحات التواصل الاجتماعي",
          image: "@/assets/res/img/icons2/1000518778-removebg-preview.png",
          width: 300,
          height: 50,
          alt: "إدارة صفحات التواصل الاجتماعي",
          description: " نوفر خدمات إدارة حسابات التواصل الاجتماعي باحترافية تامة."
        },
        {
          title: "إدارة الإعلانات على وسائل التواصل الاجتماعي",
          image: "@/assets/res/img/icons2/1000518637-removebg-preview.png",
          width: 250,
          height: 50,
          alt: "إدارة الإعلانات على وسائل التواصل الاجتماعي",
          description: " ننظم حملات إعلانية متقنة على منصات التواصل الاجتماعي."
        },
        {
          title: "كتابة المحتوى وتحسين محركات البحث (SEO)",
          image: "@/assets/res/img/icons2/1000518804-removebg-preview.png",
          width: 250,
          height: 50,
          alt: "كتابة المحتوى وتحسين محركات البحث",
          description: " نكتب محتوى جذابًا ومفيدًا مع تحسينه لمحركات البحث."
        }
      ]
    };
  },
  methods: {
    contactUs() {
      console.log("اتصل بنا");
    },
    requestConsultation() {
      console.log("طلب استشارة");
    },
    viewServices() {
      console.log("عرض خدماتنا");
    }
  },
  mounted() {
    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      effect: 'fade',
      autoplay: {
        delay: 2000,
      },
    });

    // Initialize AOS
    AOS.init({
      once: false,
      duration: 1000,
      offset: 200,
    });

    // Refresh AOS after page load
    window.addEventListener('load', () => {
      AOS.refresh();
    });

    // Refresh AOS on scroll
    window.addEventListener('scroll', () => {
      AOS.refresh();
    });
  }
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');

* {
  font-family: 'Cairo', sans-serif;
}

/* Add hover effects to buttons */
button:hover {
  background-color: #ff6f61;
  transform: scale(1.1);
  transition: transform 0.3s ease, background-color 0.3s ease;
}
</style>