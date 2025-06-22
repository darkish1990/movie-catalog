<template>
  <div class="home">
    <EnhancedSearchSection :loading="loading" :genres="genres" :mode="storeSearchMode" @search="handleSearch"
      @discover="handleDiscover" @trending="handleTrending" @modeChanged="handleModeChanged" />
    <LoadingSpinner v-if="loading" message="Loading movies..." />
    <ErrorMessage v-if="error" :message="error" @retry="movieStore.clearError" />
    <Pagination v-if="!loading && filteredMovies.length > 0 && totalPages > 1" :currentPage="currentPage"
      :totalPages="totalPages" :visiblePageCount="3" @pageChange="handlePageChange" class="pagination-top" />

    <MovieGrid v-if="!loading && filteredMovies.length > 0" :movies="filteredMovies" :title="getResultsTitle()"
      :totalResults="totalResults" @movieClick="goToMovieDetails" />

    <Pagination v-if="!loading && filteredMovies.length > 0 && totalPages > 1" :currentPage="currentPage"
      :totalPages="totalPages" @pageChange="handlePageChange" class="pagination-bottom" />
    <NoResults v-if="!loading && !error && !hasMovies && (searchQuery || storeSearchMode !== 'search')"
      :searchQuery="searchQuery" />

    <WelcomeSection v-if="!loading && !error && !hasMovies && !searchQuery && storeSearchMode === 'search'"
      @navigateToSearch="handleNavigateToSearch" @navigateToDiscover="handleNavigateToDiscover"
      @navigateToTrending="handleNavigateToTrending" />
    <ScrollToTop />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useMovieStore } from '../stores/movieStore'
import type { TMDBSearchFilters } from '../types'

import { EnhancedSearchSection } from '../components/search'
import { MovieGrid } from '../components/movie'
import { LoadingSpinner, ErrorMessage, NoResults, Pagination, WelcomeSection, ScrollToTop } from '../components/common'

const router = useRouter()
const movieStore = useMovieStore()

onMounted(async () => {
  await movieStore.initializeGenres()
})

const searchQuery = ref('')
const searchMode = ref<'search' | 'discover' | 'trending'>('search')

const filteredMovies = computed(() => movieStore.filteredMovies)
const loading = computed(() => movieStore.loading)
const error = computed(() => movieStore.error)
const hasMovies = computed(() => movieStore.hasMovies)
const totalResults = computed(() => movieStore.totalResults)
const totalPages = computed(() => movieStore.totalPages)
const currentPage = computed(() => movieStore.currentPage)
const genres = computed(() => movieStore.genres)
const trendingPeriod = computed(() => movieStore.trendingPeriod)
const storeSearchMode = computed(() => movieStore.searchMode)

const handleSearch = async (query: string, page = 1) => {
  searchQuery.value = query
  await movieStore.searchMovies(query.trim(), page)
}

const handleDiscover = async (filters: TMDBSearchFilters) => {
  await movieStore.discoverMovies(filters)
}

const handleTrending = async (period: 'day' | 'week', page = 1) => {
  await movieStore.getTrendingMovies(period, page)
}

const handleModeChanged = (mode: 'search' | 'discover' | 'trending') => {
  searchMode.value = mode
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

const handleNavigateToSearch = () => {
  searchMode.value = 'search'
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleNavigateToDiscover = () => {
  searchMode.value = 'discover'
  searchQuery.value = '' // Clear search query when switching to discover mode
  handleDiscover({
    sortBy: 'popularity.desc',
    page: 1
  })
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleNavigateToTrending = () => {
  searchMode.value = 'trending'
  searchQuery.value = '' // Clear search query when switching to trending mode
  handleTrending('week', 1)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handlePageChange = (page: number) => {
  if (storeSearchMode.value === 'search' && searchQuery.value) {
    movieStore.searchMovies(searchQuery.value, page)
  } else if (storeSearchMode.value === 'discover') {
    movieStore.discoverMovies({
      ...movieStore.currentFilters,
      page
    })
  } else if (storeSearchMode.value === 'trending') {
    movieStore.getTrendingMovies(trendingPeriod.value, page)
  }
}
</script>

<style scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
  min-height: 100vh;
  position: relative;
}

/* Smooth transitions between different content states */
.home>* {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

/* Top pagination styling */
.pagination-top {
  margin-bottom: 1rem;
  transform: scale(0.9);
}

/* Bottom pagination styling */
.pagination-bottom {
  margin-top: 1rem;
}
</style>
