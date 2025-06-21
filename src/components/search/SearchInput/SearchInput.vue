<template>
  <div class="search-container">
    <input
      v-model="searchQuery"
      @input="handleInput"
      @keyup.enter="handleSearch"
      type="text"
      placeholder="Search movies by title, actor, or keywords..."
      class="search-input"
    />    <button 
      v-if="searchQuery.trim()"
      @click="clearSearch"
      @keydown.enter="clearSearch"
      @keydown.space.prevent="clearSearch"
      class="clear-btn"
      type="button"
      aria-label="Clear search"
      title="Clear search"
      tabindex="0"
    >
      ✕
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { debounce } from '../../../utils'

interface Props {
  loading: boolean
}

defineProps<Props>()

const searchQuery = ref('')

const emits = defineEmits<{
  search: [query: string]
  clear: []
}>()

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    emits('search', searchQuery.value.trim())
  }
}

const debouncedSearch = debounce((query: string) => {
  if (query.trim() && query.length >= 2) {
    emits('search', query.trim())
  }
}, 500)

const handleInput = () => {
  debouncedSearch(searchQuery.value)
}

const clearSearch = () => {
  searchQuery.value = ''
  emits('clear')
}
</script>

<style scoped>
@import './SearchInput.css';
</style>
