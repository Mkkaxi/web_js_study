import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/plan',
    name: 'plan',
    component: () => import('@/views/plan')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
