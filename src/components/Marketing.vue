<template>
  <div class="body">
    <!-- Header -->
    <header class="text-center py-4">
      <img :src="logoImage" :alt="logoAltText" :width="logoWidth" class="logo-image" />
      <h1 class="text-3xl font-bold mt-4">{{ pageTitle }}</h1>
    </header>

    <!-- مقدمة -->
    <section class="text-center py-8 px-4">
      <p class="mb-4">{{ introductionText }}</p>
    </section>

    <!-- خدماتنا في التسويق -->
    <section class="text-center py-8 px-4">
      <h2 class="text-2xl font-bold mb-4">{{ servicesTitle }}</h2>
      <div class="flex flex-col md:flex-row md:space-x-8 items-center space-y-4 md:space-y-0">
        <!-- Campaign Management -->
        <div class="service-card" v-for="(service, index) in services" :key="index">
          <img :src="service.image" :alt="service.alt" :width="service.width" class="service-image" />
          <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="text-center py-8 px-4">
      <h2 class="text-2xl font-bold mb-4">لماذا تختار البوصلة؟</h2>
      <div class="space-y-4">
        <div class="bg-white text-black py-2 px-4 rounded" v-for="(reason, index) in reasons" :key="index">
          {{ reason }}
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="text-center py-4 bg-black text-white mt-8">
      <p>© 2024 البوصلة - جميع الحقوق محفوظة</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Marketing",
  data() {
    return {
      logoImage: "@/assets/res/img/icons2/[removal.ai]_2f248bcb-2133-4f0b-b6f0-d34f7b4d7e65-1000519083.png",
      logoAltText: "خدمات التسويق",
      logoWidth: 400,
      pageTitle: "البوصلة - خدمات التسويق الرقمي",
      introductionText: "نحن نقدم حلولاً متكاملة للتسويق الرقمي، تشمل إدارة الحملات الإعلانية على وسائل التواصل الاجتماعي، تحسين الوجود الرقمي، وإدارة صفحات التواصل الاجتماعي لتحقيق أكبر فائدة ممكنة لعلامتك التجارية.",
      servicesTitle: "خدمات التسويق وإدارة الحملات",
      services: [
        {
          image: "@/assets/res/img/icons2/[removal.ai]_996e6357-0282-4fdd-8402-78b0b87654c4-1000519098.png",
          alt: "إدارة الحملات الإعلانية",
          width: 400,
          title: "إدارة الحملات الإعلانية",
          description: "إنشاء وإدارة الحملات الإعلانية على وسائل التواصل الاجتماعي لضمان وصول واسع وتأثير إيجابي."
        },
        {
          image: "@/assets/res/img/icons2/1000519101-removebg-preview.png",
          alt: "إدارة صفحات التواصل الاجتماعي",
          width: 350,
          title: "إدارة صفحات التواصل الاجتماعي",
          description: "تقديم محتوى مبتكر، متابعة التعليقات، والتفاعل مع المتابعين لبناء علاقة قوية مع الجمهور."
        }
      ],
      reasons: [
        "خبرة طويلة في إدارة الحملات الرقمية",
        "استراتيجيات مخصصة لاحتياجات عملك",
        "إدارة الحملات بأنظمة ذكاء اصطناعي متقدمة",
        "دعم فني وإرشادي متواصل",
        "نتائج موثوقة بأفضل التكلفة"
      ]
    };
  }
};
</script>

<style scoped>
/* Styling for the body */
.body {
  font-family: 'Cairo', sans-serif;
  background: linear-gradient(90deg, #3333cc, #330099);
  user-select: none;
}

/* Styling for the logo */
.logo-image {
  max-width: 100%;
  border-radius: 7px;
  object-fit: cover;
}

/* Styling for the service cards */
.service-card {
  text-align: center;
  padding: 1rem;
  background-color: #000;
  border-radius: 0.5rem;
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: scale(1.05);
}

.service-image {
  border-radius: 7px;
}

/* General section styling */
section {
  padding: 2rem 0;
}

h1, h2 {
  font-weight: bold;
}

p {
  font-size: 1rem;
  line-height: 1.5;
  color: #fff;
}

/* Footer styling */
footer {
  font-size: 0.875rem;
}
</style>