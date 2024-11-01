<!-- Navbar.vue -->
<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" class="custom-navbar">
    <b-navbar-brand to="/" class="text-white fs-4"><img class="img" src="../assets/Bosla.jpg"><span>Bosla</span></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse">
      <i class="fa fa-bars text-white fs-4"></i>
    </b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/" exact active-class="active-link" class="text-light fs-5">الرئيسية</b-nav-item>
        <b-nav-item to="/services/marketing" active-class="active-link" class="text-light fs-5">
          <i class="fa fa-bullhorn mr-2"></i> التسويق
        </b-nav-item>
        <b-nav-item to="/services/design" active-class="active-link" class="text-light fs-5">
          <i class="fa fa-palette mr-2"></i> التصميم
        </b-nav-item>
        <b-nav-item to="/services/content" active-class="active-link" class="text-light fs-5">
          <i class="fa fa-file-alt mr-2"></i> المحتوى
        </b-nav-item>
        <b-nav-item to="/services/Programming" active-class="active-link" class="text-light fs-5">
          <i class="fa fa-code mr-2"></i> البرمجة
        </b-nav-item>
        <b-nav-item to="/contact" active-class="active-link" class="text-light fs-5">اتصل بنا</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
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
  color: #ffffff !important; /* لون النص للرابط النشط */
}
.img{
   border-radius:30px;
   height:60px;
   width:60px;
   display:inline-block;
   margin-right:5px;
}
</style>