<script>
import { defineComponent } from 'vue';
import router from './router';

export default defineComponent({
  name: 'App',
  setup() {
    // 确保路由已正确初始化
    return {};
  }
});
</script>

<template>
  <div id="app">
    <router-view />
    <TabBar />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f5f7fa;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-header {
  background-color: #409eff;
  color: white;
  text-align: center;
  padding: 20px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.app-header h1 {
  margin-bottom: 10px;
  font-size: 24px;
}

.app-main {
  flex: 1;
  padding: 20px;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
}

.app-footer {
  text-align: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
  font-size: 14px;
}

/* 全局样式 */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .data-grid {
    grid-template-columns: 1fr !important;
  }
  
  .app-main {
    padding: 10px;
  }
}
</style>
