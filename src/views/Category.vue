<template>
  <div class="category-view">
    <section class="hero">
      <div>
        <p class="eyebrow">品类探索</p>
        <h1>找到此刻的心动灵感</h1>
        <p class="subtitle">覆盖 7 大生活场景，持续更新中</p>
      </div>
      <van-icon name="search" class="hero-icon" />
    </section>

    <div v-if="loading" class="placeholder">
      <van-loading size="28px" color="#0c7df2">加载中...</van-loading>
    </div>

    <div v-else class="category-list">
      <article
        v-for="item in categories"
        :key="item.id"
        class="category-card"
      >
        <img :src="item.image" :alt="item.name" loading="lazy" />
        <div>
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
        </div>
        <van-icon name="arrow" class="arrow" />
      </article>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import api from '../api';

const categories = ref([]);
const loading = ref(true);

const fetchCategories = async () => {
  try {
    const list = await api.catalog.getCategories();
    categories.value = list;
  } catch (error) {
    console.error('分类数据拉取失败', error);
  } finally {
    loading.value = false;
  }
};

onMounted(fetchCategories);
</script>

<style scoped>
.category-view {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-radius: 24px;
  background: linear-gradient(135deg, #e9f0ff, #fefefe);
  border: 1px solid #e0e7ff;
}

.eyebrow {
  letter-spacing: 0.4em;
  text-transform: uppercase;
  font-size: 12px;
  color: #8a97b5;
}

.hero h1 {
  margin: 12px 0 6px;
  font-size: 24px;
  color: #172134;
}

.subtitle {
  color: #5d657a;
  font-size: 14px;
}

.hero-icon {
  font-size: 28px;
  color: #0c7df2;
}

.placeholder {
  display: flex;
  justify-content: center;
  padding: 40px 0;
}

.category-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.category-card {
  display: grid;
  grid-template-columns: 88px 1fr 24px;
  gap: 16px;
  padding: 16px;
  border-radius: 20px;
  background: #fff;
  border: 1px solid #e7ecf5;
  align-items: center;
}

.category-card img {
  width: 88px;
  height: 88px;
  object-fit: cover;
  border-radius: 16px;
}

.category-card h3 {
  margin: 0;
  font-size: 17px;
  color: #111b2b;
}

.category-card p {
  margin-top: 6px;
  color: #74809a;
  font-size: 13px;
  line-height: 1.5;
}

.arrow {
  color: #c2c9d6;
}

@media (max-width: 600px) {
  .category-card {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .category-card img {
    margin: 0 auto;
  }
}
</style>
