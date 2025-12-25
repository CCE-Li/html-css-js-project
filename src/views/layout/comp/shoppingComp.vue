<template>
   <div class="shopping-page">
     <!-- 顶部搜索栏和登录/注册 -->
    <div class="header">
      <div class="search-bar">
        <van-icon name="search" class="search-icon" />
        <span>在千万海外商品中搜索</span>
      </div>
      <div class="auth-buttons">
        <span>登录/注册</span>
      </div>
    </div>
    <!-- 轮播图 -->
  <div class="carousel-container">
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="#1989fa"
      lazy-render
    >
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" class="swipe-image" @error="handleImageError" />
      </van-swipe-item>
    </van-swipe>

  </div>
   <!-- 底部导航栏 -->
    <van-tabbar v-model:active="activeBottomBar" class="bottom-tabbar">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
    <!-- 精选内容 -->
        <div class="product-list">
          <div class="product-item" v-for="(product, index) in featuredProducts" :key="index">
            <img :src="product.image" alt="商品" class="product-image" />
            <span class="product-name">{{ product.name }}</span>
            <span class="product-price">¥{{ product.price }}</span>
          </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'ShoppingComp',
  setup() {
    // 轮播图图片数组
    const images = ref([
        '/images/banner1.jpg', 
        '/images/banner2.jpg', 
        '/images/banner3.jpg'
    ]);

    const handleImageError = (e) => {
      console.error('图片加载失败:', e.target.src);
    }
// 精选商品数据
    const featuredProducts = ref([
      { image: '/images/product1.jpg', name: 'CLARINS 娇韵诗 双萃赋活精华露 50ml 黄金双瓶', price: '765' },
      { image: '/images/product2.jpg', name: 'LANCOME 兰蔻 玫瑰清滢柔肤粉水 400毫升', price: '229' },
      { image: '/images/product3.jpg', name: '商品名称3', price: '399' },
      { image: '/images/product4.jpg', name: '商品名称4', price: '199' },
      { image: '/images/product5.jpg', name: '商品名称5', price: '299' },
      { image: '/images/product6.jpg', name: '商品名称6', price: '499' },
      { image: '/images/product7.jpg', name: '商品名称7', price: '159' },
      { image: '/images/product8.jpg', name: '商品名称8', price: '239' },
      { image: '/images/product9.jpg', name: '商品名称9', price: '329' },
      { image: '/images/product10.jpg', name: '商品名称10', price: '449' },
      { image: '/images/product11.jpg', name: '商品名称11', price: '179' },
      { image: '/images/product12.jpg', name: '商品名称12', price: '389' },
    ]);
    return {
      images,
      handleImageError,
      featuredProducts
    };
  },
};
</script>

<style scoped>
.shopping-page {
  padding: 10px;
  padding-bottom: 60px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}

.search-bar {
  flex: 1;
  display: flex;
  align-items: center;
  background: #f4f4f4;
  padding: 8px 15px;
  border-radius: 20px;
  margin-right: 10px;
}

.search-icon {
  margin-right: 8px;
}

.auth-buttons {
  white-space: nowrap;
}

.carousel-container {
  width: 100%;
  max-width: 580px; /* 限制最大宽度为图片宽度 */
  margin: 0 auto;
  overflow: hidden;
}

.my-swipe {
  height: 208px; /* 固定高度为图片高度 */
}

.my-swipe .van-swipe-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swipe-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 保持图片比例并覆盖整个容器 */
  display: block;
}

.bottom-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-top: 20px;
}

.product-item {
  text-align: center;
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.product-name {
  display: block;
  margin: 10px 0 5px;
  font-size: 14px;
  line-height: 1.4;
  height: 40px;
  overflow: hidden;
}

.product-price {
  display: block;
  color: #ff5722;
  font-weight: bold;
  font-size: 16px;
  margin-top: 5px;
}
</style>