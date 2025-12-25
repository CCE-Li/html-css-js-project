<template>
  <van-tabbar route placeholder active-color="#0c7df2" inactive-color="#9aa5b1">
    <van-tabbar-item replace to="/shop/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/shop/category" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item replace to="/shop/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
    <van-tabbar-item replace to="/shop/mine" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
</script>

<style scoped>
:deep(.van-tabbar) {
  border-top: 1px solid #e6ebf0;
  background-color: #fff;
}
</style>
