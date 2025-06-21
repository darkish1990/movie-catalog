<template>
  <div id="app">
    <header class="app-header">
      <nav class="nav">
        <router-link to="/" class="nav-brand">
          🎬 Movie Catalog
        </router-link>
      </nav>
    </header>
    
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  router.afterEach((_to, _from) => {
    nextTick(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  })
})
</script>

<style>
@import './styles/variables.css';
@import './assets/animations.css';
@import './styles/global.css';
@import './styles/header.css';
@import './styles/utilities.css';
</style>
