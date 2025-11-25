<script setup>
import GlobalHeader from './components/GlobalHeader.vue'
</script>

<template>
  <div class="app-wrapper">
    <GlobalHeader />
    <div class="page-content">
      <router-view />
    </div>
  </div>
</template>

<style>
.app-wrapper {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.page-content {
  width: 100%;
  height: 100%;
  padding-top: 60px; /* Header height */
  overflow: hidden;
}
</style>
