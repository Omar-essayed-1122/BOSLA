<template>
  <div class="body">
    <!-- Header -->
    <header class="text-center py-4">
      <img :src="logoImage" :alt="logoAlt" :width="logoWidth" class="logo-image" />
      <h1 class="text-3xl font-bold mt-4">{{ pageTitle }}</h1>
    </header>

    <!-- مقدمة -->
    <section class="text-center py-8 px-4">
      <p class="mb-4">{{ introText }}</p>
    </section>

    <!-- لماذا تحتاج موقع إلكتروني؟ -->
    <section class="bg-white text-black text-center py-8 px-4 rounded-lg mb-4">
      <h2 class="text-2xl font-bold mb-4">{{ whyWebsiteTitle }}</h2>
      <p class="mb-4">{{ whyWebsiteText1 }}</p>
      <p class="mb-4">{{ whyWebsiteText2 }}</p>
      <img :src="storeImage" alt="صورة متجر إلكتروني" class="mx-auto mt-4" width="300" style="border-radius: 10px" />
    </section>

    <!-- خدماتنا -->
    <section class="text-center py-8 px-4">
      <h2 class="text-2xl font-bold mb-4">{{ servicesTitle }}</h2>
      <div class="flex flex-col md:flex-row md:space-x-8 items-center space-y-4 md:space-y-0">
        <div class="service-card" v-for="(service, index) in services" :key="index">
          <img :src="service.image" :alt="service.alt" :width="service.width" class="service-image" />
          <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </section>

    <!-- لماذا نحن -->
    <section class="text-center py-8 px-4">
      <h2 class="text-2xl font-bold mb-4">{{ whyUsTitle }}</h2>
      <div class="space-y-4">
        <div class="bg-white text-black py-2 px-4 rounded" v-for="(reason, index) in reasons" :key="index">
          {{ reason }}
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "WebDevelopment",
  data() {
    return {
      // Header and Intro Section
      logoImage: "@/assets/res/img/icons/Web Developer.png",
      logoAlt: "خدمات تصميم وبرمجة المواقع",
      logoWidth: 200,
      pageTitle: "البوصلة - تصميم وبرمجة المواقع الإلكترونية",
      introText: "نحن نقدم حلول مبتكرة وفعالة لتطوير مواقع إلكترونية عصرية وجذابة، تناسب احتياجات عملك وتساعدك على التواصل مع عملائك بشكل أفضل.",

      // Why Website Section
      whyWebsiteTitle: "لماذا تحتاج إلى موقع إلكتروني أو متجر إلكتروني؟",
      whyWebsiteText1: "في عالم اليوم، يعتبر الموقع الإلكتروني واجهة أساسية لأي شركة أو نشاط تجاري. فهو يساعدك على الوصول إلى جمهور أوسع ويعزز من مصداقيتك المهنية ويزيد من فرص التفاعل مع عملائك.",
      whyWebsiteText2: "كما يسهل عملية البيع والتواصل ويقدم تجربة فريدة للعملاء، مما يرفع من ولائهم لعلامتك التجارية.",
      storeImage: "@/assets/res/img/icons/8.jpg",

      // Services Section
      servicesTitle: "خدماتنا",
      services: [
        {
          image: "@/assets/res/img/icons2/1000518859-removebg-preview.png",
          alt: "تصميم واجهات مستخدم",
          width: 370,
          title: "تصميم واجهات مستخدم",
          description: "تصميمات عصرية وجذابة تضمن تجربة مستخدم سلسة وسهلة التنقل."
        },
        {
          image: "@/assets/res/img/icons2/Custom-software-development-it-magnet-soft.png",
          alt: "برمجة مواقع",
          width: 240,
          title: "برمجة مواقع متكاملة",
          description: "تطوير مواقع إلكترونية باستخدام أحدث التقنيات لتلبية كافة احتياجات عملك."
        },
        {
          image: "@/assets/res/img/icons2/1_FUgSi8RZKjq5rAGbKzATqw-removebg-preview.png",
          alt: "تحسين تجربة المستخدم",
          width: 240,
          title: "تحسين تجربة المستخدم",
          description: "تحليل وتطوير التجربة لتحسين فعالية الموقع وزيادة التفاعل مع العملاء."
        }
      ],

      // Why Us Section
      whyUsTitle: "لماذا البوصلة؟",
      reasons: [
        "خبرة تمتد لأكثر من 2 سنوات",
        "نتائج احترافية بأقل تكلفة",
        "دعم فني على مدار الساعة",
        "تجربة مستخدم مميزة"
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
}

.logo-image {
  max-width: 100%;
  border-radius: 7px;
  object-fit: cover;
}

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

footer {
  font-size: 0.875rem;
}
</style>