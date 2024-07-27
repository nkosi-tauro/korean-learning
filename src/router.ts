import { createMemoryHistory, createRouter } from 'vue-router'


import HelloWorld from './components/HelloWorld.vue'
import Check from './components/Check.vue'

const routes = [
  { path: '/hangul-alphabet', name: 'hangulAlphabet',  component: Check },
  { path: '/test', name: 'test', component: HelloWorld },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})