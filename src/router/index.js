import { createRouter, createWebHashHistory } from 'vue-router'
import HomeV from '../views/HomeView.vue'

import ContactV from '../views/ContactV.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeV
  },
    {
    path: '/contact',
    name: 'contact',
    component: ContactV,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
