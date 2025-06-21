<template>
  <div class="enhanced-search-section">
    <h1 class="title">🎬 Movie Discovery</h1>
    <p class="subtitle">Search by title, discover by genre, or explore trending movies</p>
    
    <SearchModeToggle 
      :searchMode="searchMode"
      @modeChanged="searchMode = $event"
    />

    <SearchInput 
      v-if="searchMode === 'search'"
      :loading="loading"
      @search="$emit('search', $event)"
    />

    <DiscoverFilters 
      v-if="searchMode === 'discover'"
      :loading="loading"
      :genres="genres"
      @discover="$emit('discover', $event)"
    />

    <TrendingControls 
      v-if="searchMode === 'trending'"
      @trending="$emit('trending', $event)"
    />

    <QuickSuggestions 
      @quickAction="handleQuickAction"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Genre, TMDBSearchFilters } from '../../../types/movie'

import SearchModeToggle from '../SearchModeToggle/SearchModeToggle.vue'
import SearchInput from '../SearchInput/SearchInput.vue'
import DiscoverFilters from '../DiscoverFilters/DiscoverFilters.vue'
import TrendingControls from '../TrendingControls/TrendingControls.vue'
import QuickSuggestions from '../QuickSuggestions/QuickSuggestions.vue'

interface Props {
  loading: boolean
  genres: Genre[]
}

defineProps<Props>()

const emits = defineEmits<{
  search: [query: string]
  discover: [filters: TMDBSearchFilters]
  trending: [period: 'day' | 'week']
}>()

const searchMode = ref<'search' | 'discover' | 'trending'>('search')

watch(searchMode, (newMode, oldMode) => {
  if (newMode === 'trending' && oldMode !== 'trending') {
    emits('trending', 'week')
  }
})

const handleQuickAction = (suggestion: any) => {
  if (suggestion.action === 'genre') {
    searchMode.value = 'discover'
    emits('discover', { 
      genre: suggestion.value, 
      sortBy: 'popularity.desc', 
      page: 1 
    })
  } else if (suggestion.action === 'rating') {
    searchMode.value = 'discover'
    emits('discover', { 
      minRating: parseFloat(suggestion.value), 
      sortBy: 'popularity.desc', 
      page: 1 
    })
  } else if (suggestion.action === 'year') {
    searchMode.value = 'discover'
    emits('discover', { 
      year: parseInt(suggestion.value), 
      sortBy: 'popularity.desc', 
      page: 1 
    })
  } else if (suggestion.action === 'decade') {
    searchMode.value = 'discover'
    let year = 1995 // default
    if (suggestion.value === '1990s') {
      year = 1995 
    } else if (suggestion.value === '1980s') {
      year = 1985 
    }
    emits('discover', {      year, 
      sortBy: 'popularity.desc', 
      page: 1 
    })
  } else if (suggestion.action === 'search') {
    searchMode.value = 'search'
    emits('search', suggestion.value)
  }
}
</script>

<style scoped>
@import './EnhancedSearchSection.css';
</style>
