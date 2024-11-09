<template>
 <div class="body">
    
  <b-navbar type="dark" variant="dark" class="custom-navbar">
    <b-navbar-brand to="/" class="text-white fs-4">
      <img class="img" src="@/assets/res/Bosla2 .jpg" alt="Bosla Logo">
      <span class="logo_text">Bosla</span>
    </b-navbar-brand>
    <div class="nav" dir="rtl">
      <b-navbar-nav class="ml-auto d-flex align-items-center">
        <b-nav-item to="/" exact active-class="active-link" class="text-white fs-5">
          <span class="text">الرئيسيه</span>
        </b-nav-item>
        
        <!-- زر "خدمات" مع القائمة المنسدلة -->
        <div dir="rtl" class="dropdown" @click="toggleDropdown">
          <button class="text-white fs-5 bg-transparent border-0">
            <span class="text">خدمات</span>
          </button>
          <div dir="rtl" v-if="isDropdownVisible" class="dropdown-menu">
            <router-link dir="rtl" to="/services/marketing" class="dropdown-item">التسويق وادارة الحملات الاعلانيه</router-link>
            <router-link to="/services/Design" class="dropdown-item">الجرافيك ديزاين</router-link>
            <router-link to="/services/dev" class="dropdown-item">إنشاء المواقع الالكترونيه</router-link>
                    <router-link to="/deals" class="dropdown-item">عروض</router-link>
          </div>
        </div>

        <b-nav-item to="/contact" active-class="active-link" class="text-white fs-5">
          <span class="text">اتصل بنا</span>
        </b-nav-item>
      </b-navbar-nav>
    </div>
  </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDropdownVisible: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
  },
};
</script>

<style scoped>
/* تخصيص لون الخلفية */
.custom-navbar {
  background-color: #330099 !important; /* لون خلفية بنفسجي داكن */
  position: fixed; /* تثبيت الناف بار */
  top: 0; /* التثبيت في أعلى الصفحة */
  left: 0; /* التثبيت في الجهة اليسرى */
  width: 100%; /* عرض كامل للناف بار */
  z-index: 1000; /* تأكد من بقاء الناف بار فوق باقي العناصر */
}

/* كلاس لتأثير الرابط النشط */
.active-link {
  background-color: #3a0055 !important; /* لون الخلفية للرابط النشط */
  color: #000 !important; /* لون النص للرابط النشط */
}

.img {
  border-radius: 30px;
  height: 60px;
  width: 60px;
  display: inline-block;
  margin-right: 5px;
}

/* تخصيص لون النص للرابط */
.text {
  color: #ffffff !important; /* لون النص أبيض */
  padding: 5px;
  border-radius: 10px;
}

.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  right: 0;
  top: 100%;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  display: none;
  opacity: 0;
  transition: opacity 0.3s ease;
  min-width: 200px; /* تعيين الحد الأدنى لعرض القائمة */
}

.dropdown-menu .dropdown-item {
  padding: 15px 20px; /* زيادة المسافة الداخلية */
  text-decoration: none;
  display: block;
  color: #333;
  border-radius: 5px;
  transition: background-color 0.3s ease, padding 0.3s ease;
}

.dropdown-menu .dropdown-item:hover {
  background-color: #f1f1f1;
  padding-left: 30px;
}

.dropdown:hover .dropdown-menu {
  display: block;
  opacity: 1;
}

.body {
   padding-top:70px;
}

/* تخصيص للعرض الأكبر */
@media (min-width: 768px) {
  .text {
    font-size: 45px;
    margin-right: 20px;
    margin-left: 20px;
  }
  .img {
    border-radius: 55px;
    height: 110px;
    width: 110px;
    display: inline-block;
    margin-right: 5px;
  }
  .logo_text {
    font-size: 45px;
    position: relative;
    top: 10px;
  }

  /* تكبير القائمة المنسدلة في الشاشات الكبيرة */
  .dropdown-menu {
    min-width: 70vw; /* توسيع عرض القائمة المنسدلة */
  }

  .dropdown-menu .dropdown-item {
    font-size: 18px; /* زيادة حجم الخط في العناصر */
    padding: 20px 30px; /* زيادة المسافة الداخلية */
  }
}
</style>