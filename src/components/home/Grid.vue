<template>
  <section class="category-grid">
    <h3>精选分类</h3>
    <div class="grid">
      <article
        v-for="item in formattedItems"
        :key="item.id"
        class="grid-card"
      >
        <div class="thumb">
          <van-image
            width="48"
            height="48"
            fit="cover"
            :src="item.image"
            :alt="item.name"
          />
        </div>
        <p class="name">{{ item.name }}</p>
        <p class="desc">{{ item.description }}</p>
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
      id: 'default-1',
      name: '简约家居',
      description: '为日常注入自然质感',
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=60'
    },
    {
      id: 'default-2',
      name: '舒适办公',
      description: '打造高效桌面伙伴',
      image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=400&q=60'
    },
    {
      id: 'default-3',
      name: '旅行出行',
      description: '灵感随行，轻装上阵',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=400&q=60'
    }
  ];

const formattedItems = computed(() => (props.items.length ? props.items : fallback));
</script>

<style scoped>
.category-grid {
  margin-top: 28px;
}

.category-grid h3 {
  font-size: 18px;
  color: #172134;
  margin-bottom: 16px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
}

.grid-card {
  border-radius: 18px;
  padding: 18px;
  border: 1px solid #e6ecf5;
  background: #fff;
  transition: transform 0.2s ease;
}

.grid-card:hover {
  transform: translateY(-4px);
}

.thumb {
  width: 58px;
  height: 58px;
  border-radius: 16px;
  background: #f5f7fb;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
}

.name {
  font-weight: 600;
  color: #111b2b;
  margin-bottom: 4px;
}

.desc {
  color: #74809a;
  font-size: 13px;
  line-height: 1.4;
}
</style>
