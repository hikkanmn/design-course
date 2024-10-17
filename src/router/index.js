import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import CompositionPage from '../pages/CompositionPage.vue'
import ColorPage from '../pages/ColorPage.vue'
import TypographyPage from '../pages/TypographyPage.vue'
import ResourcesPage from '../pages/ResourcesPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/composition', name: 'Composition', component: CompositionPage },
  { path: '/color', name: 'Color', component: ColorPage },
  { path: '/typography', name: 'Typography', component: TypographyPage },
  { path: '/resources', name: 'Resources', component: ResourcesPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
