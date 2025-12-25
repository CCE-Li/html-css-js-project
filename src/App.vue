<script setup>
import TabBar from './views/TabBar.vue';
</script>

<template>
  <router-view />
  <TabBar />
</template>

<style scoped>
:global(body) {
  margin: 0;
  font-family: 'HarmonyOS Sans', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  background: #ffffff;
}
</style>
