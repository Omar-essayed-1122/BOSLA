import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// استيراد Tailwind CSS
import './assets/css/tailwind.css';

// استيراد Font Awesome
import '@fortawesome/fontawesome-free/css/all.css';

// استيراد animate.css
import 'animate.css';

// تحميل BootstrapVue 3 قبل أي شيء
import BootstrapVue3 from 'bootstrap-vue-3';

import VueGtag from 'vue-gtag';

const app = createApp(App);

// تثبيت المكتبات قبل التركيب
app.use(BootstrapVue3);
app.use(router);

// تحميل Google Analytics مباشرةً
app.use(VueGtag, {
  config: { id: 'G-ZRWXVV69P4' }
}, router);

// تركيب التطبيق بعد التأكد من تحميل كل شيء
app.mount('#app');
