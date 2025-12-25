import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/shop/home',
    },
    {
      path: '/shop',
      component: () => import('../views/Shop.vue'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('../views/Home.vue'),
        },
        {
          path: 'category',
          name: 'category',
          component: () => import('../views/Category.vue'),
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('../views/layout/comp/CartComp.vue'),
        },
        {
          path: 'mine',
          name: 'mine',
          component: () => import('../views/Mine.vue'),
        },
        {
          path: '',
          redirect: 'home',
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/shop/home',
    },
  ],
});

export default router;
