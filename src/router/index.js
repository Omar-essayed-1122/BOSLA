import { createRouter, createWebHashHistory } from 'vue-router'
import HomeV from '../views/HomeView.vue'

import ContactV from '../views/ContactV.vue'

import MarketingV from '../views/MarketingV.vue'

import DesignV from '../views/DesignV.vue'

import ContentV from '../views/ContentV.vue'

import ProgrammingV from '../views/ProgrammingV.vue'


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
      {
    path: '/services/marketing',
    name: 'marketing',
    component: MarketingV,
  },
        {
    path: '/services/Design',
    name: 'Design',
    component: DesignV,
  },
          {
    path: '/services/Content',
    name: 'Content',
    component: ContentV,
  },
            {
    path: '/services/Programming',
    name: 'Programming',
    component: ProgrammingV,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
