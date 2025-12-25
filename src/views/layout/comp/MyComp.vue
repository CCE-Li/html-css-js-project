<template>
  <div class="mine-view">
    <section class="profile-card">
      <div class="avatar-wrap">
        <img :src="user.avatar" alt="用户头像" />
      </div>
      <div class="info" style="display: flex; align-items: center;">
        <h2 style="margin: auto 0;">{{ user.name }}</h2>
      </div>
    </section>

    <van-cell-group inset class="menu-group">
      <van-cell :title="menus[0].title" :icon="menus[0].icon" is-link />
    </van-cell-group>

    <van-cell-group inset class="menu-group">
      <van-cell
        v-for="item in menus.filter(menu => menu.id !== 1 && menu.id !== 6)"
        :key="item.id"
        :title="item.title"
        :icon="item.icon"
        is-link
      />
    </van-cell-group>

    <van-cell-group inset class="menu-group">
      <van-cell :title="menus[5].title" :icon="menus[5].icon" is-link />
    </van-cell-group>
  </div>
</template>

<script setup>
const user = {
  name: '小程序用户',
  avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=160&q=60',
};

const menus = [
  { id: 1, title: '服务', icon: 'service-o' },
  { id: 2, title: '收藏', icon: 'star-o' },
  { id: 3, title: '朋友圈', icon: 'friends-o' },
  { id: 4, title: '订单与卡包', icon: 'orders-o' },
  { id: 5, title: '表情', icon: 'smile-o' },
  { id: 6, title: '设置', icon: 'setting-o' },
];
</script>

<style scoped>
.mine-view {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  box-sizing: border-box;
  min-height: calc(100vh - 60px);
}

.profile-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 24px 20px;
  border-radius: 24px;
  background: linear-gradient(135deg, #fdfefe, #f2f7ff);
  border: 1px solid #e3eaf8;
  text-align: center;
}

.avatar-wrap {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #fff;
  box-shadow: 0 8px 24px rgba(20, 62, 145, 0.12);
}

.avatar-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info h2 {
  margin: 8px 0 0;
  font-size: 20px;
  color: #172134;
  word-break: break-all;
  text-align: center;
}

.service-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px;
  border-radius: 20px;
  background: #fff;
  border: 1px solid #e6ecf5;
}

.service-item {
  display: flex;
  gap: 12px;
  align-items: center;
}

.service-item p {
  margin: 0;
  font-weight: 600;
  color: #172134;
}

.service-item span {
  font-size: 12px;
  color: #95a0b6;
}

.service-item .van-icon {
  font-size: 28px;
  color: #0c7df2;
}

.menu-group {
  margin: 0 !important;
}

.menu-group :deep(.van-cell) {
  font-size: 16px;
  color: #111b2b;
  padding: 14px 16px;
  border-radius: 12px;
  margin-bottom: 8px;
}

.menu-group :deep(.van-cell):last-child {
  margin-bottom: 0;
}

/* 响应式设计 */
@media (max-width: 480px) {
  .profile-card {
    padding: 20px 16px;
  }
  
  .avatar-wrap {
    width: 70px;
    height: 70px;
  }
  
  .info h2 {
    font-size: 18px;
  }
  
  .menu-group :deep(.van-cell) {
    font-size: 15px;
    padding: 12px 14px;
  }
  
  .mine-view {
    padding: 12px;
  }
}
</style>
