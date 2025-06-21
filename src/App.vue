<template>
  <div id="app">
    <header class="app-header">
      <nav class="nav">
        <button @click="goToHomeAndClear" class="nav-brand">
          🎬 Movie Catalog
        </button>
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
import { useMovieStore } from './stores/movieStore'

const router = useRouter()
const movieStore = useMovieStore()

const goToHomeAndClear = () => {
  // Clear all store data and go to fresh home
  movieStore.reset()
  router.push('/')
}

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
