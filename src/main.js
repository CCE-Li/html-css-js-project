import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import Vant from 'vant';
import 'vant/lib/index.css';
import api from './api';

if (import.meta.env.DEV) {
  import('./mock/mockServer')
    .then(() => console.log('Mock 服务已启用'))
    .catch(error => console.error('Mock 服务启动失败:', error));
}

const app = createApp(App);
app.use(router);
app.use(Vant);
app.config.globalProperties.$api = api;
app.mount('#app');
