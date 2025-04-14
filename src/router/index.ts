import MainPage from '@/views/MainPage.vue'
import TrendingNowPage from '@/views/TrendingNowPage.vue'
import AnimeDetails from '@/views/AnimeDetails.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage,
    },
    {
      path: '/trending-now',
      name: 'trending',
      component: TrendingNowPage,
    },
    {
      path: '/details/:id',
      name: 'details',
      component: AnimeDetails,
    },
  ],
})

export default router
