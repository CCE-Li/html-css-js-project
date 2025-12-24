<script>
import { defineComponent } from 'vue';
import Example from './components/Example.vue';

export default defineComponent({
  name: 'App',
  components: {
    Example
  }
});
</script>

<template>
  
  <div id="app">
    <header class="app-header">
      <h1>Vue 3 + Axios + Mock.js 示例</h1>
      <p>这是一个使用 Vue 3、Axios 和 Mock.js 的示例应用</p>
    </header>
    <main class="app-main">
      <Example />
    </main>
    <footer class="app-footer">
      <p>© 2025 Vue Mock 示例. 所有权利保留.</p>
    </footer>
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
