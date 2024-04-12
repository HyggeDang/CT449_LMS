import './assets/main.css';

import { createApp } from 'vue';
import { createPinia, setActivePinia } from 'pinia';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import App from './App.vue';
import router from './router';

const pinia = createPinia();
setActivePinia(pinia);
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.use(ElementPlus);
app.use(pinia);
app.use(router);
app.mount('#app');
