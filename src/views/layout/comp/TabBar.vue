<template>
  <van-tabbar route active-color="#0c7df2" inactive-color="#9aa5b1">
    <van-tabbar-item replace to="/shop" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/classify" icon="label-o">分类</van-tabbar-item>
    <van-tabbar-item replace to="/cart" icon="cart-o">购物车</van-tabbar-item>
    <van-tabbar-item replace to="/my" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
</script>

<style scoped>
:deep(.van-tabbar) {
  border-top: 1px solid #e6ebf0;
}
</style>
