import { createRouter, createWebHistory } from 'vue-router'
import Accueil from "../views/Accueil.vue"
import Skills from "../views/Skills.vue"
import Projets from "../views/Projets.vue"

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil,
  },
  {
    path: '/Skills',
    name: 'Skills',
    component: Skills,
  },
  {
    path: '/Projets',
    name: 'Projets',
    component: Projets,
  }
  
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
