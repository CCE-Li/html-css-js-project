import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/layout',
      name: 'layout',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/layout/index.vue'),
      children:[
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
    }, {
            
      path: '/classify',
      name: 'classify',
     
      component: () => import('../views/layout/comp/ClassifyComp.vue'),
    }
      ]
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/login/index.vue'),
    },
    {
      path: '/search',
      name: 'search',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/search/index.vue'),
    },
  ],
})

export default router
