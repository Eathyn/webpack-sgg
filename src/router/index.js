import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/main',
    component: () => import('../views/MainView.vue'),
  },
  {
    path: '/home',
    component: () => import('../views/HomeView.vue'),
  }
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
