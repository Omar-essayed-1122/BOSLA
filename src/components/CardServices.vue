<template class="body">
  <div class="service-cards grid gap-6 mt-10">
    <div v-for="service in services" :key="service.id" class="service-card p-6 rounded-lg shadow-lg">
      <img src="../assets/img/cart.jpg" :alt="service.title" class="service-img mb-4 rounded-md" />
      <h3 class="text-2xl font-bold mb-2">{{ service.title }}</h3>
      <p class="text-sm text-gray-300 mb-4">{{ service.description }}</p>
      <div class="flex justify-between mt-4">
        <router-link :to="`/services/${service.id}`" class="btn details-btn">
          <i class="fas fa-info-circle mr-2"></i>التفاصيل
        </router-link>
        <button @click="requestService(service.id)" class="btn request-btn">
          <i class="fas fa-paper-plane mr-2"></i>طلب الخدمة
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardServices",
  data() {
    return {
      services: [
        {
          id: 1,
          title: 'خدمة الجرافيك ديزاين',
          description: 'تصاميم إبداعية تناسب احتياجات عملك وتحقق أهدافك التسويقية.',
          image: '../assets/img/cart.jpg'
        },
        {
          id: 2,
          title: 'التسويق الإلكتروني',
          description: 'خطة تسويقية شاملة لزيادة الوعي بعلامتك التجارية وزيادة المبيعات.',
          image: '../assets/img/cart.jpg'
        },
        // إضافة المزيد من الخدمات هنا
      ]
    };
  },
  methods: {
    requestService(id) {
      console.log(`طلب خدمة: ${id}`);
    }
  }
};
</script>

<style scoped>
.service-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  padding-right:7px;
  padding-left:7px;
  direction:rtl;
}
i{ 
 margin:5px
}
.service-card {
  background-color: #222266;
  color: white;
  transition: transform 0.3s ease;
  margin-top:8px;
  margin-bottom:8px;
  padding:5px
}

.service-card:hover {
  transform: scale(1.00);
}

.service-img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  height: auto;
  border-radius: 8px;
}

.btn {
  padding: 8px 12px;
  border-radius: 4px;
  font-weight: bold;
  display: flex;
  align-items: center;
  transition: background 0.3s;
}

.details-btn {
  background: #fff;
  margin:5px;
}

.details-btn:hover {
  background: #8100ff;
}

.request-btn {
  background: #fff;
  margin:5px;
}

.request-btn:hover {
  background: #8000ff;
}
.body{
  padding-right:7px;
  padding-left:7px;
}
</style>