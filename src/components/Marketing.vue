<template>
  <div class="body">
     <!-- Header -->
 <header class="text-center py-4">
  <img src="@/assets/res/img/icons2/[removal.ai]_2f248bcb-2133-4f0b-b6f0-d34f7b4d7e65-1000519083.png" alt="خدمات التسويق" width="400" />
  <h1 class="text-3xl font-bold mt-4">البوصلة - خدمات التسويق الرقمي</h1>
 </header>

 <!-- مقدمة -->
 <section class="text-center py-8 px-4">
  <p class="mb-4">نحن نقدم حلولاً متكاملة للتسويق الرقمي، تشمل إدارة الحملات الإعلانية على وسائل التواصل الاجتماعي، تحسين الوجود الرقمي، وإدارة صفحات التواصل الاجتماعي لتحقيق أكبر فائدة ممكنة لعلامتك التجارية.</p>
 </section>

 <!-- خدماتنا في التسويق -->
 <section class="text-center py-8 px-4">
  <h2 class="text-2xl font-bold mb-4">خدمات التسويق وإدارة الحملات</h2>
  <div class="flex flex-col md:flex-row md:space-x-8 items-center space-y-4 md:space-y-0">
   <!-- إدارة الحملات الإعلانية -->
   <div class="text-center p-4 bg-black rounded-lg">
    <img alt="إدارة الحملات الإعلانية" class="mx-auto mb-2" src="@/assets/res/img/icons2/[removal.ai]_996e6357-0282-4fdd-8402-78b0b87654c4-1000519098.png" width="400" />
    <h3 class="text-xl font-semibold mb-2">إدارة الحملات الإعلانية</h3>
    <p>إنشاء وإدارة الحملات الإعلانية على وسائل التواصل الاجتماعي لضمان وصول واسع وتأثير إيجابي.</p>
   </div>
   <!-- إدارة صفحات التواصل الاجتماعي -->
   <div class="text-center p-4 bg-black rounded-lg">
    <img alt="إدارة صفحات التواصل الاجتماعي" class="mx-auto mb-2" src="@/assets/res/img/icons2/1000519101-removebg-preview.png" width="350" />
    <h3 class="text-xl font-semibold mb-2">إدارة صفحات التواصل الاجتماعي</h3>
    <p>تقديم محتوى مبتكر، متابعة التعليقات، والتفاعل مع المتابعين لبناء علاقة قوية مع الجمهور.</p>
   </div>
  </div>
 </section>

 <!-- لماذا نحن -->
 <section class="text-center py-8 px-4">
  <h2 class="text-2xl font-bold mb-4">لماذا تختار البوصلة؟</h2>
  <div class="space-y-4">
   <div class="bg-white text-black py-2 px-4 rounded">خبرة طويلة في إدارة الحملات الرقمية</div>
   <div class="bg-white text-black py-2 px-4 rounded">استراتيجيات مخصصة لاحتياجات عملك</div>

   <div class="bg-white text-black py-2 px-4 rounded">إدارة الحملات بانظمة ذكاء اصطناعي متقدمه</div>

   <div class="bg-white text-black py-2 px-4 rounded">دعم فني وإرشادي متواصل</div>
   <div class="bg-white text-black py-2 px-4 rounded">نتائج موثوقة بأفضل التكلفة</div>
  </div>
 </section>

 <!-- Footer -->
 <footer class="text-center py-4 bg-black text-white mt-8">
  <p>© 2024 البوصلة - جميع الحقوق محفوظة</p>
 </footer>
  </div>
</template>
<script>
  export default{
     name:"Marketing",
     
  }
</script>
<style scoped>

.body {
  font-family: 'MyCustomFont';
  background: linear-gradient(90deg, #3333cc, #330099);
  user-select: none;
}

img {
  border-radius: 7px;
}

.rounded , .rounded-lg{
  margin:5px;
}
</style>