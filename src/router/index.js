import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import NextSdks from '../components/nextSdks.vue'
import TinyRobot from '../components/tinyRobot.vue'
import AiExtension from '../components/aiExtension.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App
  },
  {
    path: '/next-sdks',
    name: 'NextSdks',
    component: NextSdks
  },
  {
    path: '/tiny-robot',
    name: 'TinyRobot',
    component: TinyRobot
  },
  {
    path: '/ai-extension',
    name: 'AiExtension',
    component: AiExtension
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
