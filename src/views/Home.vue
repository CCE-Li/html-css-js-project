<template>
  <div class="home-view">
    <HomeHeader />
    <HeroSwiper :items="slides" />
    <CategoryGrid :items="categories" />
    <ProductList :items="goods" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import HomeHeader from '../components/home/Header.vue';
import HeroSwiper from '../components/home/Swiper.vue';
import CategoryGrid from '../components/home/Grid.vue';
import ProductList from '../components/home/ProductList.vue';
import api from '../api';

const slides = ref([]);
const categories = ref([]);
const goods = ref([]);

const fetchData = async () => {
  const [categoryData, goodsData] = await Promise.all([
    api.catalog.getCategories(),
    api.catalog.getGoods(),
  ]);
  categories.value = categoryData;
  goods.value = goodsData.slice(0, 4);

  slides.value = [
    {
      id: 'slide-1',
      tag: '今日推荐',
      title: '小而美的生活器物',
      description: '让日常多一些温度与质感',
    },
    {
      id: 'slide-2',
      tag: '热门上新',
      title: '科技感桌面搭配',
      description: '效率与灵感相伴的理想工作台',
    },
  ];
};

onMounted(fetchData);
</script>

<style scoped>
.home-view {
  min-height: 100vh;
}
</style>
