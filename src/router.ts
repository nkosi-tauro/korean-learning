import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HangulAlphabet from './Hangul/views/HangulAlphabet.vue'
import HeroSection from './core/HeroSection.vue'
import MainLayout from './core/views/MainLayout.vue'

const routes = [
  { path: '/', name: 'landing',  component: HeroSection },
  {
    path: "/dashboard/",
    component: MainLayout,
    children : [
      { path: '', redirect: { name: 'hangulAlphabet' } },
      { path: 'hangul-alphabet', name: 'hangulAlphabet',  component: HangulAlphabet },
      { path: 'test', name: 'test', component: HelloWorld },
    ]

  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})