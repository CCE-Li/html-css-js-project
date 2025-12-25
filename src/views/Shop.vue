<template>
  <div class="shop-shell">
    <main class="content">
      <RouterView />
    </main>
    <TabBar />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import TabBar from '../components/TabBar.vue';
</script>

<style scoped>
.shop-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #eef3ff 0%, #f8fafc 100%);
}

.content {
  flex: 1;
  padding: 16px;
}
</style>
