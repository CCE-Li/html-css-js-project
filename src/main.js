import './assets/main.css'

// 开发环境下启用 Mock 服务
if (import.meta.env.DEV) {
  import('./api/mock').then(mock => {
    console.log('Mock 服务已启用');
  }).catch(error => {
    console.error('Mock 服务启动失败:', error);
  });
}

const app = createApp(App);

// 全局挂载 API
import api from './api';
app.config.globalProperties.$api = api;

app.mount('#app');
