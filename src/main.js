import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// استيراد Tailwind CSS
import './assets/css/tailwind.css';

// استيراد Font Awesome
import '@fortawesome/fontawesome-free/css/all.css';
// استيراد animate.css
import 'animate.css';

// تحميل BootstrapVue 3 بشكل كسول
const app = createApp(App);


app.use(router);

import BootstrapVue3 from 'bootstrap-vue-3';
app.use(BootstrapVue3);


  // تحميل Google Analytics بشكل كسول
  import('vue-gtag').then((VueGtag) => {
    app.use(VueGtag, {
      config: { id: 'G-ZRWXVV69P4' }
    }, router);
  });
}

// تركيب التطبيق
app.mount('#app');
