<script setup>
import TabBar from './views/TabBar.vue';
</script>

<template>
  <div class="mobile-container">
    <div class="content-wrapper">
      <router-view />
    </div>
    <TabBar class="fixed-tabbar" />
  </div>
</template>

<style scoped>
:global(html, body, #app) {
  background: #f5f5f5;
  margin: 0;
  padding: 0;
  height: 100%;
}

:global(body) {
  margin: 0;
  font-family: 'HarmonyOS Sans', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.mobile-container {
  width: 50vw;
  min-width: 300px;
  max-width: 500px;
  height: 100vh;
  margin: 0 auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  position: relative;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.content-wrapper {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 50px; /* 为底部导航栏留出空间 */
}

.fixed-tabbar {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
}
</style>