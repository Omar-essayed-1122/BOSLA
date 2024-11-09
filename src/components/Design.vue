<template>
  <div class="body">
    <!-- Header with Logo -->
    <header class="text-center py-4">
      <img :src="logoImage" :alt="logoAltText" class="logo-image" />
    </header>

    <!-- Page Title and Description -->
    <header class="text-center py-4">
      <h1 class="text-3xl font-bold">{{ pageTitle }}</h1>
      <p>{{ pageDescription }}</p>
    </header>

    <!-- Introduction Section -->
    <section class="text-center py-8 px-4">
      <h2 class="text-2xl font-bold mb-4">لماذا تحتاج إلى هوية بصرية قوية وتصاميم سوشيال ميديا احترافية؟</h2>
      <p class="mb-4">
        الهوية البصرية هي عامل رئيسي في بناء العلامة التجارية، وهي ما يميز نشاطك التجاري عن المنافسين.
        من خلال تصاميم مبتكرة وجذابة، نساعدك على الوصول لجمهورك المستهدف وبناء تواصل أقوى معهم.
      </p>
    </section>

    <!-- Services Section -->
    <section class="text-center py-8 px-4">
      <h2 class="text-2xl font-bold mb-4">خدماتنا في الجرافيك ديزاين</h2>
      <div class="flex flex-col md:flex-row md:space-x-8 items-center space-y-4 md:space-y-0">
        <div class="service-card" v-for="(service, index) in services" :key="index">
          <img :src="service.image" :alt="service.alt" :width="service.width" class="service-image" />
          <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="text-center py-8 px-4">
      <h2 class="text-2xl font-bold mb-4">لماذا اختيار البوصلة؟</h2>
      <div class="space-y-4">
        <div class="bg-white text-black py-2 px-4 rounded">فريق ذو خبرة طويلة في تصميم الهوية البصرية</div>
        <div class="bg-white text-black py-2 px-4 rounded">ابتكار وحلول مخصصة لكل عميل</div>
        <div class="bg-white text-black py-2 px-4 rounded">نتائج احترافية تعكس هوية علامتك بدقة</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Dynamic Images and Text
      logoImage: "@/assets/res/img/icons2/1000519005-removebg-preview.png",
      logoAltText: "شعار البوصلة",
      pageTitle: "البوصلة - الجرافيك ديزاين",
      pageDescription: "نقدم لك حلولاً إبداعية لتطوير هوية بصرية قوية وتصاميم سوشيال ميديا مبتكرة",
      services: [
        {
          image: "@/assets/res/img/icons2/1000518773-removebg-preview.png",
          alt: "تصميم الهوية",
          width: "260",
          title: "تطوير الهوية البصرية",
          description: "إنشاء هوية بصرية متكاملة تشمل الألوان والخطوط والتصاميم التي تعبر عن علامتك."
        },
        {
          image: "@/assets/res/img/icons2/1000519015-removebg-preview.png",
          alt: "تصاميم السوشيال ميديا",
          width: "260",
          title: "تصاميم السوشيال ميديا",
          description: "تصاميم جذابة ومخصصة لمنصات التواصل الاجتماعي، مصممة لتجذب التفاعل."
        },
        {
          image: "@/assets/res/img/icons2/1000519011-removebg-preview.png",
          alt: "تصميم الشعار",
          width: "230",
          title: "تصميم الشعار (Logo)",
          description: "تصاميم شعارات فريدة تعكس هوية العلامة التجارية وتكون عالقة في أذهان الجمهور."
        }
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
  max-width: 200px;
  border-radius: 7px;
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
</style>