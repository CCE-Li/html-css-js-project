import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/layout/shop', // 添加重定向到首页
    },
    
    {
      path: '/layout',
      component: () => import('../views/layout/index.vue'),
      children: [
        {
          path: 'shop',
          name: 'shop',
          component: () => import('../views/layout/comp/shoppingComp.vue'), // 确保路径正确
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('../views/layout/comp/CartComp.vue'),
        },
        {
          path: 'my',
          name: 'my',
          component: () => import('../views/layout/comp/MyComp.vue'), // 修复路径错误
        },
        {
          path: 'classify',
          name: 'classify',
          component: () => import('../views/layout/comp/ClassifyComp.vue'),
        }
      ]
    }
  ],
});

export default router;
