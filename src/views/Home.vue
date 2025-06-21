<template>
  <div class="home">
    <EnhancedSearchSection
      :loading="loading"
      :genres="genres"
      @search="handleSearch"
      @discover="handleDiscover"
      @trending="handleTrending"
    />
    <LoadingSpinner v-if="loading" message="Loading movies..." />
    <ErrorMessage v-if="error" :message="error" @retry="movieStore.clearError" />
    <MovieGrid
      v-if="!loading && filteredMovies.length > 0"
      :movies="filteredMovies"
      :title="getResultsTitle()"
      :totalResults="totalResults"
      @movieClick="goToMovieDetails"
    />
    <NoResults
      v-if="!loading && !error && !hasMovies && searchQuery"
      :searchQuery="searchQuery"
    />
    <WelcomeSection
      v-if="!loading && !error && !hasMovies && !searchQuery"
    />
    <ScrollToTop />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useMovieStore } from '../stores/movieStore'
import type { TMDBSearchFilters } from '../types/movie'

import { EnhancedSearchSection } from '../components/search'
import { MovieGrid } from '../components/movie'
import { LoadingSpinner, ErrorMessage, NoResults, WelcomeSection, ScrollToTop } from '../components/common'

const router = useRouter()
const movieStore = useMovieStore()

onMounted(async () => {
  await movieStore.initializeGenres()
})

const searchQuery = ref('')

const filteredMovies = computed(() => movieStore.filteredMovies)
const loading = computed(() => movieStore.loading)
const error = computed(() => movieStore.error)
const hasMovies = computed(() => movieStore.hasMovies)
const totalResults = computed(() => movieStore.totalResults)
const genres = computed(() => movieStore.genres)

const handleSearch = async (query: string) => {
  searchQuery.value = query
  await movieStore.searchMovies(query.trim())
}

const handleDiscover = async (filters: TMDBSearchFilters) => {
  await movieStore.discoverMovies(filters)
}

const handleTrending = async (period: 'day' | 'week') => {
  await movieStore.getTrendingMovies(period)
}

const getResultsTitle = () => {
  const mode = movieStore.searchMode
  if (mode === 'search' && searchQuery.value) {
    return `Search Results for '${searchQuery.value}'`
  } else if (mode === 'discover') {
    return 'Discovered Movies'
  } else if (mode === 'trending') {
    return 'Trending Movies'
  }
  return 'Movies'
}

const goToMovieDetails = (movieId: number) => {
  router.push(`/movie/${movieId}`)
}
</script>

<style scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
