<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const navItems = [
  { name: 'TinyVue', path: '/' },
  { name: 'NEXT-SDKs', path: '/next-sdks' },
  { name: 'TinyRobot', path: '/tiny-robot' },
  { name: 'AI-Extension', path: '/ai-extension' }
]

const navigateTo = (path) => {
  router.push(path)
}

const isActive = (path) => {
  return route.path === path
}
</script>

<template>
  <header class="global-header">
    <div class="header-content">
      <div class="logo">
        <a href="/" class="logo-link">
          <span class="logo-text">OpenTiny NEXT</span>
        </a>
      </div>
      <nav class="nav-menu">
        <a
          v-for="item in navItems"
          :key="item.path"
          :class="['nav-item', { active: isActive(item.path) }]"
          @click.prevent="navigateTo(item.path)"
          :href="item.path"
        >
          {{ item.name }}
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.global-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.header-content {
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-link {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-text {
  font-size: 1.4rem;
  font-weight: 700;
  background: linear-gradient(120deg, #333 30%, #5e7ce2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-item {
  padding: 8px 20px;
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
}

.nav-item:hover {
  color: var(--primary-color);
  background: rgba(94, 124, 226, 0.08);
}

.nav-item.active {
  color: var(--primary-color);
  background: rgba(94, 124, 226, 0.12);
  font-weight: 600;
}

.nav-item.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 2px;
  background: var(--primary-color);
  border-radius: 2px;
}

@media (max-width: 768px) {
  .header-content {
    padding: 0 20px;
  }
  
  .logo-text {
    font-size: 1.2rem;
  }
  
  .nav-menu {
    gap: 4px;
  }
  
  .nav-item {
    padding: 6px 12px;
    font-size: 0.9rem;
  }
}
</style>
