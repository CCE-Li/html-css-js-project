<template>
  <div class="shopping-page">
    <!-- 搜索框 -->
    <van-search placeholder="在千万海外商品中搜索" />

    <!-- 倒计时 -->
    <div class="countdown">
      硬核补贴 <span>01:31:14</span> 大牌低价补贴 >
    </div>

    <!-- 商品展示 -->
    <div class="product-list">
      <van-grid :column-num="2">
        <van-grid-item v-for="(item, index) in products" :key="index">
          <van-image :src="item.image" />
          <div class="product-info">
            <p>{{ item.title }}</p>
            <p>硬核价 ¥{{ item.price }}</p>
            <p>原价 ¥{{ item.originalPrice }}</p>
          </div>
        </van-grid-item>
      </van-grid>
    </div>

    <!-- 分类导航 -->
    <div class="category-nav">
      <van-tabs>
        <van-tab title="精选">
          <div class="tab-content">猜你喜欢</div>
        </van-tab>
        <van-tab title="美妆">魅力妆扮</van-tab>
        <van-tab title="母婴">家有萌宝</van-tab>
        <van-tab title="数码">酷玩科技</van-tab>
        <van-tab title="保健">健康养生</van-tab>
      </van-tabs>
    </div>

    <!-- 底部标签栏 -->
    <van-tabbar route>
      <van-tabbar-item replace to="/shop" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/classify" icon="search">分类</van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          image: 'https://placehold.co/150x150',
          title: '产品名称1',
          price: 199,
          originalPrice: 660
        },
        {
          image: 'https://placehold.co/150x150',
          title: '产品名称2',
          price: 335,
          originalPrice: 780
        },
        // 更多产品...
      ]
    };
  }
};
</script>

<style scoped>
.shopping-page {
  padding: 10px;
}

.countdown {
  margin: 10px 0;
  font-size: 16px;
  color: #ff5722;
}

.product-list {
  margin-top: 10px;
}

.product-info {
  text-align: center;
}

.category-nav {
  margin-top: 20px;
}
</style>