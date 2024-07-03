import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/style/main.less';
import BurgerUI from '$/index.js';

const app = createApp(App);
app.use(router).use(BurgerUI);
app.mount('#app');
