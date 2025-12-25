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

  <!-- 新增分类界面 -->
  <div class="category-grid">
    <div class="category-row" v-for="(row, rowIndex) in categoryRows" :key="rowIndex">
      <div class="category-cell" v-for="(category, cellIndex) in row" :key="cellIndex">
        <img :src="category.image" alt="分类图标" class="category-image" />
        <span class="category-name">{{ category.name }}</span>
      </div>
    </div>
  </div>
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
import { ref, computed } from 'vue';

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
    // 分类图标数据
    const categories = ref([
      { image: '/images/category1.jpg', name: '分类1' },
      { image: '/images/category2.jpg', name: '分类2' },
      { image: '/images/category3.jpg', name: '分类3' },
      { image: '/images/category4.jpg', name: '分类4' },
      { image: '/images/category5.jpg', name: '分类5' },
      { image: '/images/category6.jpg', name: '分类6' },
      { image: '/images/category7.jpg', name: '分类7' },
      { image: '/images/category8.jpg', name: '分类8' },
      
    ]);
    
    // 计算属性，将分类图标按两行四列排列
    const categoryRows = computed(() => {
      const rows = [];
      const categoriesArray = categories.value;
      for (let i = 0; i < categoriesArray.length; i += 4) {
        rows.push(categoriesArray.slice(i, i + 4));
      }
      return rows;
    });

    return {
      images,
      handleImageError,
      featuredProducts,
      categories,
      categoryRows
    };
  },
};
</script>

<style scoped>
.shopping-page {
  padding: 10px;
  padding-bottom: 60px;
  max-width: 100%;
  box-sizing: border-box;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  flex-wrap: wrap;
}

.search-bar {
  flex: 1;
  display: flex;
  align-items: center;
  background: #f4f4f4;
  padding: 8px 15px;
  border-radius: 20px;
  margin-right: 10px;
  min-width: 0; /* 允许flex元素收缩 */
}

.search-icon {
  margin-right: 8px;
}

.auth-buttons {
  white-space: nowrap;
}

.carousel-container {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 12px;
}

.my-swipe {
  height: 180px; /* 适配移动端的高度 */
  width: 100%;
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
  padding-bottom: env(safe-area-inset-bottom); /* 适配iPhone X等安全区域 */
}

.product-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 20px;
}

.product-item {
  text-align: center;
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  box-sizing: border-box;
}

.product-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.product-name {
  display: block;
  margin: 8px 0 5px;
  font-size: 13px;
  line-height: 1.3;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.product-price {
  display: block;
  color: #ff5722;
  font-weight: bold;
  font-size: 15px;
  margin-top: 5px;
}

/* 新增分类图标样式 */
.category-grid {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  padding: 10px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.category-row {
  display: flex;
  flex: 1;
  justify-content: space-around;
}

.category-cell {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 5px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.category-cell:hover {
  transform: scale(1.05);
}

.category-image {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px; /* 改为正方形，保留一点圆角 */
  margin-bottom: 8px;
}

.category-name {
  font-size: 12px;
  color: #333;
  text-align: center;
}

/* 响应式设计 */
@media (max-width: 480px) {
  .my-swipe {
    height: 160px;
  }
  
  .product-image {
    height: 140px;
  }
  
  .product-name {
    font-size: 12px;
  }
  
  .product-price {
    font-size: 14px;
  }
  
  .header {
    flex-direction: column;
    align-items: stretch;
  }
  
  .search-bar {
    margin-right: 0;
    margin-bottom: 10px;
  }
  
  .auth-buttons {
    text-align: center;
  }
}
</style>