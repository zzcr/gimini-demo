import { createApp } from 'vue'
import './style.css'
import router from './router'
import RouterRoot from './RouterRoot.vue'

const app = createApp(RouterRoot)
app.use(router)
app.mount('#app')
