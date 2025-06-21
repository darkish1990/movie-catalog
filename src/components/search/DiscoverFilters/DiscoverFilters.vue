<template>
  <div class="discover-filters">
    <div class="filter-grid">
      <div class="filter-group">
        <label>🎭 Genre:</label>
        <select v-model="localFilters.genre" class="filter-select">
          <option value="">All Genres</option>
          <option v-for="genre in genres" :key="genre.id" :value="genre.id">
            {{ genre.name }}
          </option>
        </select>
      </div>

      <div class="filter-group">
        <label>📅 Year:</label>
        <select v-model="localFilters.year" class="filter-select">
          <option value="">Any Year</option>
          <option v-for="year in years" :key="year" :value="year">
            {{ year }}
          </option>
        </select>
      </div>

      <div class="filter-group">
        <label>⭐ Min Rating:</label>
        <select v-model="localFilters.minRating" class="filter-select">
          <option value="">Any Rating</option>
          <option value="8">8.0+ (Excellent)</option>
          <option value="7">7.0+ (Very Good)</option>
          <option value="6">6.0+ (Good)</option>
          <option value="5">5.0+ (Average)</option>
        </select>
      </div>

      <div class="filter-group">
        <label>📊 Sort By:</label>
        <select v-model="localFilters.sortBy" class="filter-select">
          <option value="popularity.desc">Most Popular</option>
          <option value="release_date.desc">Newest First</option>
          <option value="vote_average.desc">Highest Rated</option>
          <option value="title.asc">Title A-Z</option>
        </select>
      </div>
    </div>

    <button @click="handleDiscover" class="discover-btn" :disabled="loading">
      🌟 {{ loading ? 'Discovering...' : 'Discover Movies' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Genre, TMDBSearchFilters } from '../../../types/movie'

interface Props {
  loading: boolean
  genres: Genre[]
}

defineProps<Props>()

const emits = defineEmits<{
  discover: [filters: TMDBSearchFilters]
}>()

const localFilters = ref<TMDBSearchFilters>({
  genre: '',
  year: undefined,
  minRating: undefined,
  maxRating: undefined,
  sortBy: 'popularity.desc',
  page: 1
})

const currentYear = new Date().getFullYear()
const years = Array.from({ length: currentYear - 1949 }, (_, i) => currentYear - i)

const handleDiscover = () => {
  emits('discover', { ...localFilters.value })
}
</script>

<style scoped>
@import './DiscoverFilters.css';
</style>
