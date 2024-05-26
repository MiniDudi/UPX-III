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
    path: '/about',
    children: [
      {
        path: '/about',
        name: 'aboutPage',
        component: () => import('@/views/About.vue'),
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
    path: '/members',
    children: [
      {
        path: '/members',
        name: 'members',
        component: () => import('@/views/member/memberPage.vue'),
      },
    ],
  },
  {
    path: '/members/create',
    children: [
      {
        path: '/members/create',
        name: 'memeberCreate',
        component: () => import('@/views/member/newMember.vue'),
      },
    ],
  },
  {
    path: '/participants',
    children: [
      {
        path: '/participants',
        name: 'participants',
        component: () => import('@/views/participant/participantPage.vue'),
      },
    ],
  },
  {
    path: '/participant/create',
    children: [
      {
        path: '/participant/create',
        name: 'participantCreate',
        component: () => import('@/views/participant/newParticipant.vue'),
      },
    ],
  },
  {
    path: '/participant/update/:id',
    children: [
      {
        path: '/participant/update/:id',
        name: 'participantUpdate',
        component: () => import('@/views/participant/newParticipant.vue'),
      },
    ],
  },
  {
    path: '/donation',
    children: [
      {
        path: '/donation',
        name: 'donation',
        component: () => import('@/views/donation/donationPage.vue'),
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
  {
    path: '/donation/create',
    children: [
      {
        path: '/donation/create',
        name: 'donationCreate',
        component: () => import('@/views/donation/newDonation.vue'),
      },
    ],
  },
  {
    path: '/donation/update/:id',
    children: [
      {
        path: '/donation/update/:id',
        name: 'donationUpdate',
        component: () => import('@/views/donation/newDonation.vue'),
      },
    ],
  },
  {
    path: '/link',
    children: [
      {
        path: '/link',
        name: 'link',
        component: () => import('@/views/linkPage.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
