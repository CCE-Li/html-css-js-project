import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/layout',
    },
    {
      path: '/shop',
      redirect: '/layout/shop'
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import('../views/layout/index.vue'),
      children: [
        {
          path: '/shop',
          name: 'shop',
          component: () => import('../views/layout/comp/shoppingComp.vue'),
        },
        {
          path: '/cart',
          name: 'cart',
          component: () => import('../views/layout/comp/CartComp.vue'),
        },
        {
          path: '/my',
          name: 'my',
          component: () => import('../views/comp/MyComp.vue'),
        },
        {
          path: '/classify',
          name: 'classify',
          component: () => import('../views/layout/comp/ClassifyComp.vue'),
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/search/index.vue'),
    },
  ],
})

export default router