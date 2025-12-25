<template>
  <section class="product-section">
    <header class="section-head">
      <h3>热销好物</h3>
      <button class="more-btn">查看全部</button>
    </header>
    <div class="product-list">
      <article
        v-for="item in displayItems"
        :key="item.id"
        class="product-card"
      >
        <div class="cover">
          <img :src="item.image" :alt="item.title" loading="lazy" />
        </div>
        <div>
          <h4>{{ item.title }}</h4>
          <p>{{ item.description }}</p>
          <strong>￥{{ item.price }}</strong>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
});

const fallback = [
  {
    id: 'fallback-1',
    title: '云感抱枕',
    description: '柔软填充，伴随你的午后',
    price: 129,
    image: 'https://images.unsplash.com/photo-1484100356142-db6ab6244067?auto=format&fit=crop&w=400&q=60'
  },
  {
    id: 'fallback-2',
    title: '治愈香薰灯',
    description: '一盏灯点亮夜晚温度',
    price: 199,
    image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=400&q=60'
  }
];

const displayItems = computed(() => (props.items.length ? props.items : fallback));
</script>

<style scoped>
.product-section {
  margin-top: 32px;
}

.section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.section-head h3 {
  font-size: 18px;
  color: #172134;
}

.more-btn {
  background: transparent;
  border: none;
  color: #6c7a89;
  font-size: 13px;
}

.product-list {
  display: grid;
  gap: 16px;
}

.product-card {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 16px;
  border-radius: 20px;
  padding: 16px;
  background: #fff;
  border: 1px solid #e6ecf5;
}

.cover {
  width: 120px;
  height: 120px;
  border-radius: 16px;
  overflow: hidden;
}

.cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-card h4 {
  font-size: 16px;
  color: #111b2b;
}

.product-card p {
  color: #74809a;
  font-size: 13px;
  margin: 8px 0 12px;
  line-height: 1.5;
}

.product-card strong {
  color: #ff5f5f;
  font-size: 18px;
}

@media (max-width: 640px) {
  .product-card {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .cover {
    margin: 0 auto;
  }
}
</style>
