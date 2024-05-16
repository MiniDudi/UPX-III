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
    path: '/organization',
    children: [
      {
        path: '/organization',
        name: 'organizationPage',
        component: () => import('@/views/organization/organizationPage.vue'),
      },
    ],
  },
  {
    path: '/group',
    children: [
      {
        path: '/group',
        name: 'groupPage',
        component: () => import('@/views/group/groupPage.vue'),
      },
    ],
  },
  {
    path: '/register',
    children: [
      {
        path: '/register',
        name: 'registerPage',
        component: () => import('@/views/registerPage.vue'),
      },
    ],
  },
  {
    path: '/settingsPage',
    children: [
      {
        path: '/settingsPage',
        name: 'settingsPage',
        component: () => import('@/views/settingsPage.vue'),
      },
    ],
  },
  {
    path: '/participantRegister',
    children: [
      {
        path: '/participantRegister',
        name: 'participantRegister',
        component: () => import('@/views/participantRegister.vue'),
      },
    ],
  },
  {
    path: '/donationRegister',
    children: [
      {
        path: '/donationRegister',
        name: 'donationRegister',
        component: () => import('@/views/donationRegister.vue'),
      },
    ],
  },
  {
    path: '/Donations',
    children: [
      {
        path: '/Donations',
        name: 'Donations',
        component: () => import('@/views/Donations.vue'),
      },
    ],
  },
  {
    path: '/donationDetail/:id',
    children: [
      {
        path: '/donationDetail/:id',
        name: 'donationDetail',
        component: () => import('@/views/donation/donationDetails.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
