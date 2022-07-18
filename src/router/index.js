import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(''),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../components/AllCard.vue'),
          },
          {
            path: '/myCard',
            name: 'your-card',
            component: () => import('../components/YourCard.vue'),
          },
          {
            path: '/blocked',
            name: 'blocked-card',
            component: () => import('../components/BlockedCard.vue'),
          },
    ]
})

export default router