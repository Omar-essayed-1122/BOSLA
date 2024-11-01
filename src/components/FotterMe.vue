<template>
<footer class="footer">
  <div class="footer-container">
    <!-- القسم الأول: معلومات عن الشركة -->
    <div class="footer-section">
      <h5>Bosla.Co</h5>
      <p>نحن نقدم خدمات التسويق، التصميم، كتابة المحتوى، والبرمجة بشكل احترافي.</p>
    </div>

    <!-- القسم الثالث: تواصل معنا -->
    <div class="footer-section">
      <h5>تواصل معنا</h5>
      <p><i class="fa fa-phone"></i> +20 1212540775</p>
      <p><i class="fa fa-envelope"></i> bosla.co.1@gmail.com</p>
      <p><i class="fa fa-map-marker-alt"></i> الإسكندرية، مصر</p>
    </div>
  </div>

  <!-- حقوق الطبع والنشر -->
  <div class="footer-copyright">
    <p>&copy; جميع الحقوق محفوظه بوصله للحلول الالكترونيه</p>
  </div>
</footer>
</template>

<style>
  /* تصميم الفوتر */
.footer {
  background-color: #4b006e; /* لون خلفية بنفسجي داكن */
  color: #ffffff; /* لون النص */
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
}

.footer-section {
  flex: 1;
  min-width: 250px;
  margin: 10px;
}

.footer-section h5 {
  color: #ffffff;
  font-size: 1.2em;
  margin-bottom: 10px;
}

.footer-section p {
  font-size: 0.9em;
  line-height: 1.5;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 8px;
}

.footer-links a {
  color: #d1d1d1;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #ffffff;
}

.footer-section i {
  margin-right: 8px;
}

.footer-copyright {
  margin-top: 20px;
  font-size: 0.9em;
  color: #d1d1d1;
}
</style>