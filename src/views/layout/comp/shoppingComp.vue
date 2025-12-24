<template lang="">
  <div>
    首页
      
  </div>
  <router-view />

<van-tabbar route>
  <van-tabbar-item replace to="/shop" icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item replace to="/classify" icon="search">分类</van-tabbar-item>
   <van-tabbar-item replace to="/cart" icon="cart-o">购物车</van-tabbar-item>
   <van-tabbar-item replace to="/my" icon="user-o">我的</van-tabbar-item>
</van-tabbar>
</template>


<script>
export default {
  
  
}
</script>
<style scoped>
  
</style>