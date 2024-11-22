import { createRouter, createWebHistory } from 'vue-router';

// استخدام التحميل الكسول للمكونات
const HomeV = () => import('../views/HomeView.vue');
const ContactV = () => import('../views/ContactV.vue');
const MarketingV = () => import('../views/MarketingV.vue');
const DesignV = () => import('../views/DesignV.vue');
const ProgrammingV = () => import('../views/ProgrammingV.vue');
const Deals = () => import('../views/Deals.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeV,
    meta: {
      title: 'البوصلة | الصفحة الرئيسية',
      description: 'مرحبًا بكم في البوصلة! نهدف إلى تقديم أفضل الخدمات الرقمية والحلول للشركات الناشئة والصغيرة. اكتشف كيف يمكننا مساعدتك في تطوير عملك وزيادة تواجدك الرقمي.'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactV,
    meta: {
      title: 'البوصلة | اتصل بنا',
      description: 'تواصل معنا للحصول على أفضل العروض والخدمات من فريق البوصلة. نحن هنا لمساعدتك في أي استفسار أو طلب خاص بشركتك.'
    }
  },
  {
    path: '/services/marketing',
    name: 'marketing',
    component: MarketingV,
    meta: {
      title: 'البوصلة | خدمات التسويق',
      description: 'اكتشف خدمات التسويق الإلكتروني التي نقدمها لزيادة تواجدك الرقمي وتعزيز علامتك التجارية. نساعدك في الوصول إلى جمهور أكبر وتحقيق نتائج ملموسة في عالم التسويق الرقمي.'
    }
  },
  {
    path: '/services/Design',
    name: 'Design',
    component: DesignV,
    meta: {
      title: 'البوصلة | خدمات التصميم',
      description: 'نقدم خدمات تصميم إبداعية تبرز هوية علامتك التجارية وتجذب انتباه العملاء المحتملين. تصاميم مبتكرة ومتميزة تتماشى مع أحدث الاتجاهات في التصميم.'
    }
  },
  {
    path: '/services/dev',
    name: 'Programming',
    component: ProgrammingV,
    meta: {
      title: 'البوصلة | خدمات البرمجة',
      description: 'تطوير حلول برمجية احترافية تلبي احتياجات عملك وتساعدك على التفوق في السوق الرقمي. خدماتنا تشمل تصميم وتطوير تطبيقات وبرمجيات مبتكرة تواكب التغيرات التكنولوجية.'
    }
  },
  {
    path: '/deals',
    name: 'Deals',
    component: Deals,
    meta: {
      title: 'البوصلة | عروض مميزة',
      description: 'اكتشف العروض المميزة التي نقدمها في خدماتنا المتنوعة، واستفد من خصومات خاصة على خدماتنا في التسويق، التصميم، والبرمجة.'
    }
  },
];

const router = createRouter({
  history: createWebHistory(), // استخدم history بدلاً من hash للحصول على URL نظيف
  routes
});

// تحديث العنوان والوصف بعد كل تنقل
router.afterEach((to) => {
  // تحديث عنوان الصفحة
  document.title = to.meta.title || 'البوصلة';

  // تحديث الوصف لـ SEO
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute('content', to.meta.description || 'مرحبًا بكم في البوصلة، أفضل الخدمات الرقمية للشركات الصغيرة والمتوسطة.');
  }
});

export default router;
