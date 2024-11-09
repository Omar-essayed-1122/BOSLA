import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// استيراد Tailwind CSS
import './assets/css/tailwind.css';

// استيراد Font Awesome
import '@fortawesome/fontawesome-free/css/all.css';
// استيراد animate.css
import 'animate.css';

// استيراد BootstrapVue 3
import { BootstrapVue3 } from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css';

// استيراد Vuetify
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

// استيراد Element Plus
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';

// Cairo font

const app = createApp(App);

// استخدام المكتبات
app.use(store);
app.use(router);
app.use(BootstrapVue3); // استخدام BootstrapVue 3
app.use(Vuetify);       // استخدام Vuetify
app.use(ElementPlus);   // استخدام Element Plus

// تركيب التطبيق
app.mount('#app');