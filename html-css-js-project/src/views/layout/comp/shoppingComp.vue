<template>
  <div class="carousel-container">
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="#1989fa"
      lazy-render
    >
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" class="swipe-image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const images = ref([
      '/images/banner1.jpg',
      '/images/banner2.jpg',
      '/images/banner3.jpg',
    ]);

    return {
      images,
    };
  },
};
</script>

<style scoped>
.carousel-container {
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  overflow: hidden;
}

.my-swipe {
  height: 208px;
}

.my-swipe .van-swipe-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swipe-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>