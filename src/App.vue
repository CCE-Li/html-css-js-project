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

<style scoped>
:global(body) {
  margin: 0;
  font-family: 'HarmonyOS Sans', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  background: #ffffff;
}
</style>
