<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-black text-white">
    <header class="w-full p-5 text-center bg-black">
      <h1 class="text-4xl font-bold neon" data-aos="fade-down">صفحة الاتصال</h1>
      <p class="mt-2 text-xl" data-aos="fade-down">استفساراتكم مهمة لنا!</p>
    </header>

    <main class="flex flex-col items-center p-5">
      <form @submit.prevent="submitForm" class="w-full max-w-md" aria-labelledby="contact-form">
        <div class="mt-4">
          <label for="service" class="block text-lg">اختر الخدمة:</label>
          <b-form-select
            v-model="selectedService"
            :options="services"
            required
            aria-required="true"
            class="mt-2"
          ></b-form-select>
        </div>

        <div class="mt-4">
          <label for="email" class="block text-lg">البريد الإلكتروني:</label>
          <b-form-input
            v-model="email"
            type="email"
            placeholder="أدخل بريدك الإلكتروني"
            required
            aria-required="true"
            class="mt-2"
          ></b-form-input>
        </div>

        <div class="mt-4">
          <label for="phone" class="block text-lg">رقم الهاتف:</label>
          <b-form-input
            v-model="phone"
            type="tel"
            placeholder="أدخل رقم هاتفك"
            required
            aria-required="true"
            class="mt-2"
          ></b-form-input>
        </div>

        <div class="mt-4">
          <label for="inquiry" class="block text-lg">استفسارك:</label>
          <b-form-textarea
            v-model="inquiry"
            placeholder="اكتب استفسارك هنا"
            rows="3"
            required
            aria-required="true"
            class="mt-2"
          ></b-form-textarea>
        </div>

        <div class="mt-4">
          <b-button type="submit" variant="primary" class="w-full">إرسال</b-button>
        </div>

        <b-alert
          v-if="successMessage"
          variant="success"
          class="mt-4"
          dismissible
          data-aos="fade-in"
        >
          {{ successMessage }}
        </b-alert>
      </form>
    </main>

  </div>
</template>

<script>
import { BAlert, BButton, BFormInput, BFormSelect, BFormTextarea } from 'bootstrap-vue-3';

export default {
  components: {
    BAlert,
    BButton,
    BFormInput,
    BFormSelect,
    BFormTextarea,
    
  },
  data() {
    return {
      services: [
        { value: null, text: 'اختر خدمة' },
        { value: 'digitalMarketing', text: 'التسويق الرقمي' },
        { value: 'contentManagement', text: 'إدارة المحتوى' },
        { value: 'graphicDesign', text: 'الجرافيك ديزاين' },
        { value: 'websiteCreation', text: 'إنشاء المواقع' }
      ],
      selectedService: null,
      email: '',
      phone: '',
      inquiry: '',
      successMessage: ''
    };
  },
  methods: {
    async submitForm() {
      const data = {
        service: this.selectedService,
        email: this.email,
        phone: this.phone,
        inquiry: this.inquiry
      };

      try {
        const response = await fetch('http://localhost:3000/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          this.successMessage = 'تم استلام طلبك بنجاح، سيتم الرد عليك في أقرب وقت ممكن.';
          setTimeout(() => {
            this.successMessage = '';
          }, 3000);
          this.resetForm();
        } else {
          console.error('فشل في إرسال البيانات:', response.statusText);
        }
      } catch (error) {
        console.error('خطأ في إرسال البيانات:', error);
      }
    },
    resetForm() {
      this.selectedService = null;
      this.email = '';
      this.phone = '';
      this.inquiry = '';
    }
  }
};
</script>

<style scoped>
.neon {
  text-shadow: 0 0 5px #4b006e, 0 0 10px #4b006e, 0 0 15px #4b006e, 0 0 20px #4b006e;
}
</style>
