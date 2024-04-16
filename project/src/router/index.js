// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    children: [
      {
        path: '/',
        name: 'Login',
        component: () => import('@/views/loginPage.vue'),
      },
    ],
  },
  {
    path: '/home',
    children: [
      {
        path: '/home',
        name: 'homePage',
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/groupPage',
    children: [
      {
        path: '/groupPage',
        name: 'groupPage',
        component: () => import('@/views/groupPage.vue'),
      },
    ],
  },
  {
    path: '/register',
    children: [
      {
        path: '/register',
        name: 'registerPage',
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/userConfig',
    children: [
      {
        path: '/userConfig',
        name: 'userConfig',
        component: () => import('@/views/userPage.vue'),
      },
    ],
  },
  {
    path: '/settingsPage',
    children: [
      {
        path: '/settingsPage',
        name: 'SettingsPage',
        component: () => import('@/views/settingsPage.vue'),
      },
    ],
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
