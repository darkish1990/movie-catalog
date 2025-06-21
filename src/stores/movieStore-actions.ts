import type { TMDBSearchFilters } from '../types/movie'
import { tmdbService } from '../services/tmdbService'
import { SEARCH_MODES, TRENDING_PERIODS } from '../constants'
import type { TrendingPeriod } from '../constants'
import { 
  loading, 
  error, 
  movies, 
  searchQuery, 
  totalResults, 
  totalPages, 
  currentPage, 
  searchMode,
  trendingPeriod,
  genreFilter,
  yearFilter,
  ratingFilter,
  sortBy
} from './movieStore-state'

let lastSearchQuery = ''
let lastDiscoverFilters = ''

export const setLoading = (value: boolean) => {
  loading.value = value
}

export const setError = (message: string | null) => {
  error.value = message
}

export const clearError = () => {
  error.value = null
}

export const searchMovies = async (query: string, page = 1) => {
  if (!query.trim()) {
    setError('Please enter a search term')
    return
  }

  const searchKey = `${query.trim()}-${page}`
  if (lastSearchQuery === searchKey) {
    return
  }
  lastSearchQuery = searchKey
  setLoading(true)
  clearError()
  searchMode.value = SEARCH_MODES.SEARCH

  try {
    const response = await tmdbService.searchMovies(query, page)
    
    movies.value = response.results || []
    searchQuery.value = query
    totalResults.value = response.total_results || 0
    totalPages.value = response.total_pages || 0
    currentPage.value = page
    
  } catch (err) {
    setError(err instanceof Error ? err.message : 'Failed to search movies')
    movies.value = []
  } finally {
    setLoading(false)
  }
}

export const discoverMovies = async (filters: TMDBSearchFilters) => {
  const filtersKey = JSON.stringify(filters)
  if (lastDiscoverFilters === filtersKey) {
    return
  }
  lastDiscoverFilters = filtersKey
  setLoading(true)
  clearError()
  searchMode.value = SEARCH_MODES.DISCOVER

  try {
    const response = await tmdbService.discoverMovies(filters)
    
    movies.value = response.results || []
    totalResults.value = response.total_results || 0
    totalPages.value = response.total_pages || 0
    currentPage.value = filters.page || 1
    
    if (filters.genre) genreFilter.value = filters.genre
    if (filters.year) yearFilter.value = filters.year.toString()
    if (filters.minRating) ratingFilter.value = filters.minRating.toString()
    if (filters.sortBy) sortBy.value = filters.sortBy
    
  } catch (err) {
    setError(err instanceof Error ? err.message : 'Failed to discover movies')
    movies.value = []
  } finally {
    setLoading(false)
  }
}

export const getTrendingMovies = async (timeWindow: TrendingPeriod = TRENDING_PERIODS.WEEK) => {  setLoading(true)
  clearError()
  searchMode.value = SEARCH_MODES.TRENDING
  trendingPeriod.value = timeWindow

  try {
    const response = await tmdbService.getTrending(timeWindow)
    
    movies.value = response.results || []
    totalResults.value = response.total_results || 0
    totalPages.value = response.total_pages || 0
    currentPage.value = 1
    
  } catch (err) {
    setError(err instanceof Error ? err.message : 'Failed to get trending movies')
    movies.value = []
  } finally {
    setLoading(false)
  }
}
