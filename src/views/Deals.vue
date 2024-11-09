<template>
  <div class="body">
    <header class="text-center py-4">
      <h1 class="text-3xl font-bold text-white">عروضنا الخاصة</h1>
      <p class="text-lg text-white">اختر من بين افضل العروض لتطوير عملك او نشاطك الخاص</p>
    </header>

    <!-- قسم العروض -->
    <section class="offers-section text-center py-8 px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- كارت عرض باستخدام Array -->
        <div 
          v-for="(offer, index) in offers" 
          :key="index" 
          class="offer-card bg-white text-black rounded-lg shadow-md p-4"
        >
          <img 
            :src="offer.image" 
            :alt="offer.title" 
            class="w-full h-56 object-cover mb-4" 
            loading="lazy"  <!-- استخدام التحميل الكسول -->
          />
          <h3 class="text-xl font-bold mb-2">{{ offer.title }}</h3>
          <p class="text-gray-700 mb-4">{{ offer.description }}</p>
          <ul class="text-sm text-gray-600 mb-4">
            <li v-for="(feature, index) in offer.features" :key="index">- {{ feature }}</li>
          </ul>
          <p class="text-lg font-bold text-green-600 mb-4">السعر: {{ offer.price }}</p>
          <router-link 
            to="/contact" 
            class="mt-4 px-4 py-2 bg-blue text-white rounded hover:bg-blue-700 transition"
          >
            اطلب الآن
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offers: [
        {
          title: "إنشاء موقع كامل + 10 تصاميم سوشيال مجانية",
          description: "احصل على موقع إلكتروني شامل مع تصاميم سوشيال ميديا مجانية.",
          features: [
            "تصميم متكامل وعصري",
            "متجاوب لجميع الأجهزة",
            "دعم فني لمدة شهر"
          ],
          price: "1500 ج.م",
          image: require("@/assets/res/img/Deals/Game.png") // استخدام require لتحميل الصور بشكل ديناميكي
        },
        {
          title: "تحسين تجربة المستخدم لموقعك",
          description: "تحليل وتطوير تجربة المستخدم لزيادة التفاعل والفعالية.",
          features: [
            "تحليل شامل للتجربة",
            "تطوير واجهة سلسة",
            "زيادة ولاء العملاء"
          ],
          price: "800 ج.م",
          image: require("@/assets/res/img/offers/offer2.jpg")
        },
        {
          title: "تصميم واجهة موقع جذابة",
          description: "توفير تصميم واجهة عصرية ومتناسقة تلبي احتياجاتك.",
          features: [
            "تصميم عصري وجذاب",
            "سهولة التصفح والاستخدام",
            "متوافق مع محركات البحث"
          ],
          price: "1200 ج.م",
          image: require("@/assets/res/img/offers/offer3.jpg")
        }
      ]
    };
  }
};
</script>

<style scoped>
.body {
  font-family: 'Cairo', sans-serif;
  background: linear-gradient(90deg, #3333cc, #330099);
  user-select: none;
  color: white;
}

.offers-section {
  padding: 2rem;
}

.offer-card {
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.offer-card:hover {
  transform: translateY(-10px);
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
}

button {
  transition: background-color 0.3s;
}
</style>