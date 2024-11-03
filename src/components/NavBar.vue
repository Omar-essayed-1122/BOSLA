<template>
  <b-navbar type="dark" variant="dark" class="custom-navbar">
    <b-navbar-brand to="/" class="text-white fs-4">
      <img class="img" src="../assets/Bosla.jpg" alt="Bosla Logo">
      <span>Bosla</span>
    </b-navbar-brand>
   <div class="nav" dir="rtl">
    <b-navbar-nav class="ml-auto d-flex align-items-center">
      <b-nav-item to="/" exact active-class="active-link" class="text-white fs-5"><span class="text">الرئيسيه</span></b-nav-item>
      <b-nav-item to="/services" active-class="active-link" class="text-white fs-5">
           <span class="text">خدمات</span>
      </b-nav-item>
      <b-nav-item to="/contact" active-class="active-link" class="text-white fs-5"><span class="text">اتصل بنا</span></b-nav-item>
    </b-navbar-nav>
    </div>
  </b-navbar>
</template>

<script>
export default {
  
};
</script>

<style scoped>
/* تخصيص لون الخلفية */
.custom-navbar {
  background-color: #4b006e !important; /* لون خلفية بنفسجي داكن */
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
}
</style>