<template>
  <div dir="rtl" class="body">
    <div dir="rtl" class="text-center">
      <header class="py-4 animate__animated animate__fadeInDown"></header>

      <div class="bg-white carousel">
        <div class="bg-white carousel-container overflow-hidden swiper-container">
          <div class="swiper-wrapper carousel-images">
            <div class="swiper-slide"><img src="@/assets/res/img/icons/5.png" alt="صورة 1"></div>
            <div class="swiper-slide"><img src="@/assets/res/img/icons/4.png" alt="صورة 2"></div>
            <div class="swiper-slide"><img src="@/assets/res/img/icons/تسويق.png" alt="صورة 3"></div>
          </div>
          <div class="swiper-pagination points"></div>
        </div>
      </div>

      <!-- محتوى الأقسام الأخرى هنا -->
      <div class="about_us">
        <section class="py-8" data-aos="fade-up">
          <div class="about-co">
            <h2 class="font-thin mb-4 about">عن الشركة</h2>
            <p class="px-4"> نقدم خدمات التسويق الإلكتروني وتصميم و إنشاء وتطوير المواقع، حيث نعمل كشريكك الاستراتيجي لتحقيق النجاح عبر الإنترنت. مع فريق من الخبراء، نحرص على تقديم حلول مبتكرة ومخصصة لعملائنا. نحن نسعى دائمًا لتمكين الشركات من تحقيق النمو الرقمي وزيادة تواجدها الإلكتروني..٠</p>
          </div>
        </section>
        <hr>
        <section class="py-8" data-aos="fade-up">
          <h2 class="font-thin mb-4">نقدم العديد من الخدمات</h2>
          <div class="px-4">
            <div class="mb-8" data-aos="fade-up">
              <img alt="design" class="mx-auto mb-2" src="@/assets/res/img/icons2/1000518776-removebg-preview.png" width="200" />
              <h3 class="font-thin">تصميم الهوية البصرية</h3>
              <p> نقدم خدمات تصميم هويات تجارية فريدة تعكس شخصية علامتك التجارية وتجذب العملاء المستهدفين.</p>
            </div>
            <div class="mb-8" data-aos="fade-up">
              <img alt="google-ads" class="mx-auto mb-2" height="50" src="@/assets/res/img/icons2/1000518850-removebg-preview.png" width="250" />
              <h3 class="font-thin">تصميمات سوشيال ميديا</h3>
              <p> نقدم تصاميم سوشيال ميديا احترافية تعكس جاذبية علامتك وتزيد من تفاعل جمهورك. نحرص على إبراز رسالتك بوضوح وإبداع، مما يضمن لك حضوراً مميزاً يجذب العملاء ويعزز ثقتهم بعلامتك التجارية.</p>
            </div>
            <div class="mb-8" data-aos="fade-up">
              <img alt="development-websites" class="mx-auto mb-2" height="50" src="@/assets/res/img/icons2/1000518641-ai-brush-removebg-16a1z4n.png" width="250" />
              <h3 class="font-thin">تصميم وبرمجة المواقع</h3>
              <p> نصمم ونبرمج المواقع بأحدث التقنيات لضمان تجربة مستخدم مميزة وفعالة، تلبي احتياجات عملك وتعزز من تواجدك الرقمي.</p>
            </div>
            <div class="mb-8" data-aos="fade-up">
              <img alt="social-media" class="mx-auto mb-2" height="50" src="@/assets/res/img/icons2/1000518778-removebg-preview.png" width="300" />
              <h3 class="font-thin">إدارة صفحات التواصل الاجتماعي</h3>
              <p> نوفر خدمات إدارة حسابات التواصل الاجتماعي باحترافية تامة، مع وضع استراتيجيات تسويقية فعّالة تعزز من تواجدك على منصات التواصل المختلفة.</p>
            </div>
            <div class="mb-8" data-aos="fade-up">
              <img alt="ads" class="mx-auto mb-2" height="50" src="@/assets/res/img/icons2/1000518637-removebg-preview.png" width="250" />
              <h3 class="font-thin">إدارة الإعلانات على وسائل التواصل الاجتماعي</h3>
              <p> ننظم وننفذ حملات إعلانية متقنة على منصات التواصل الاجتماعي، مستهدفين الجمهور الأنسب لعملك، لضمان تحقيق أقصى قيمة من استثمارك الإعلاني.</p>
            </div>
            <div class="mb-8" data-aos="fade-up">
              <img alt="seo" class="mx-auto mb-2" height="50" src="@/assets/res/img/icons2/1000518804-removebg-preview.png" width="250" />
              <h3 class="font-thin">كتابة المحتوى وتحسين محركات البحث (SEO)</h3>
              <p> نكتب محتوى جذابًا ومفيدًا يستهدف الجمهور المناسب، مع تحسينه لمحركات البحث للوصول إلى أفضل النتائج وزيادة ظهور موقعك في نتائج البحث.</p>
            </div>
          </div>
        </section>
      </div>

      <section class="bg-black py-8" data-aos="fade-up">
        <h2 class="font-thin mb-4">تواصل معنا</h2>
        <div class="px-4">
          <button class="bg-blue text-white py-2 px-4 rounded-full mb-4">اتصل بنا</button>
          <button class="bg-blue text-white py-2 px-4 rounded-full mb-4">طلب استشارة</button>
          <button class="bg-blue text-white py-2 px-4 rounded-full mb-4">عرض خدماتنا</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fontsource/cairo';
export default {
  mounted() {
    // تهيئة AOS مع الخيارات المحدثة
    AOS.init({
      once: false,  // تشغيل الأنيميشن عدة مرات عند التمرير
      duration: 1000, // مدة الأنيميشن
      offset: 200, // المسافة التي يجب أن يتحرك فيها العنصر لبدء الأنيميشن
    });

  const swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  effect: 'fade',
  autoplay: {
    delay: 2000,  // التبديل كل 2 ثانية
  },
});
    // تحديث AOS بعد تحميل الصفحة
    window.addEventListener('load', () => {
      AOS.refresh();  // تحديث الأنيميشن
    });

    // تحديث AOS عند التمرير
    window.addEventListener('scroll', () => {
      AOS.refresh();
    });
  },
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
@import '../assets/css/Home.css';
*{
  font-family: 'Cairo', sans-serif;
}
/* إضافة تأثيرات على الأزرار */
button:hover {
  background-color: #ff6f61;
  transform: scale(1.1);
  transition: transform 0.3s ease, background-color 0.3s ease;
}
</style>