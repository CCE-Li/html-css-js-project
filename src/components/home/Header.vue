<template>
  <section class="home-header">
    <div class="text">
      <p class="eyebrow">你好，欢迎回来</p>
      <h2>发现今日好物</h2>
    </div>
    <button class="service-btn">
      <van-icon name="service-o" />
      客服
    </button>
  </section>
</template>

<script setup>
</script>

<style scoped>
.home-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #f3f7ff, #eef5ff);
  border-radius: 16px;
  padding: 18px 24px;
  border: 1px solid #e0e7ff;
}

.text h2 {
  font-size: 20px;
  color: #1f2d3d;
  margin: 4px 0 0;
}

.text .eyebrow {
  font-size: 12px;
  color: #6c7a89;
  letter-spacing: 0.2em;
}

.service-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  border: none;
  border-radius: 999px;
  padding: 8px 16px;
  font-size: 13px;
  color: #0c7df2;
  background: rgba(12, 125, 242, 0.08);
}
</style>
