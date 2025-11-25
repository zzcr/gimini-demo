import { createRouter, createWebHistory } from 'vue-router'
import TinyVue from '../components/tinyVue.vue'
import NextSdks from '../components/nextSdks.vue'
import TinyRobot from '../components/tinyRobot.vue'
import AiExtension from '../components/aiExtension.vue'

const routes = [
    {
    path: '/',
    name: 'Home',
    component: TinyVue
  },
  {
    path: '/tiny-vue',
    name: 'TinyVue',
    component: TinyVue
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
  history: createWebHistory('/gimini-demo/'),
  routes,
})

export default router
