import { createRouter, createWebHistory } from 'vue-router'
import Parser from '../views/ResumeParser/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Parser
    }
  ]
})

export default router
