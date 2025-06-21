<template>
  <div class="search-mode-toggle">
    <button 
      :class="{ active: searchMode === 'search' }"
      @click="$emit('modeChanged', 'search')"
      class="mode-btn"
    >
      🔍 Search Movies
    </button>
    <button 
      :class="{ active: searchMode === 'discover' }"
      @click="$emit('modeChanged', 'discover')"
      class="mode-btn"
    >
      🌟 Discover Movies
    </button>
    <button 
      :class="{ active: searchMode === 'trending' }"
      @click="$emit('modeChanged', 'trending')"
      class="mode-btn"
    >
      🔥 Trending Now
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  searchMode: 'search' | 'discover' | 'trending'
}

defineProps<Props>()

defineEmits<{
  modeChanged: [mode: 'search' | 'discover' | 'trending']
}>()
</script>

<style scoped>
@import './SearchModeToggle.css';
</style>
