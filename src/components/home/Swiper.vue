<template>
  <section class="hero-swiper">
    <div class="track">
      <article
        v-for="item in slides"
        :key="item.id"
        class="slide"
      >
        <p class="tag">{{ item.tag }}</p>
        <h3>{{ item.title }}</h3>
        <p class="description">{{ item.description }}</p>
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

const slides = computed(() => {
  if (props.items.length) {
    return props.items;
  }
  return [
    {
      id: 'default-1',
      tag: '今日推荐',
      title: '小而美的生活器物',
      description: '让日常多一些温度与质感'
    },
    {
      id: 'default-2',
      tag: '热门上新',
      title: '科技感十足的办公桌面',
      description: '效率与灵感相伴的理想工作台'
    }
  ];
});
</script>

<style scoped>
.hero-swiper {
  margin-top: 20px;
  overflow: hidden;
}

.track {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(240px, 1fr);
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 6px;
  scroll-snap-type: x mandatory;
}

.track::-webkit-scrollbar {
  height: 6px;
}

.track::-webkit-scrollbar-thumb {
  background: rgba(12, 125, 242, 0.3);
  border-radius: 999px;
}

.slide {
  background: radial-gradient(circle at top left, rgba(12, 125, 242, 0.1), #fff);
  border: 1px solid #e0e7ff;
  border-radius: 20px;
  padding: 20px;
  min-height: 160px;
  scroll-snap-align: start;
  box-shadow: 0 10px 30px rgba(10, 40, 120, 0.08);
}

.tag {
  font-size: 12px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #8a97b5;
}

.slide h3 {
  font-size: 18px;
  margin: 10px 0;
  color: #132240;
}

.description {
  color: #5a647c;
  font-size: 14px;
  line-height: 1.5;
}
</style>
