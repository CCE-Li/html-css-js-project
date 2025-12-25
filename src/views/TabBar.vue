<template>
  <van-tabbar route placeholder active-color="#0c7df2" inactive-color="#9aa5b1">
    <van-tabbar-item replace to="/layout/shop" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/layout/classify" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item replace to="/layout/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
    <van-tabbar-item replace to="/layout/my" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
</script>

<style scoped>
:deep(.van-tabbar) {
  border-top: 1px solid #e2e2e2;
  background-color: #fff;
}
</style>
