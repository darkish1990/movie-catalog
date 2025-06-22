import { defineStore } from 'pinia'

import {
  movies,
  movieDetails,
  currentMovie,
  loading,
  error,
  searchQuery,
  totalResults,
  totalPages,
  currentPage,
  genres,
  searchMode,
  trendingPeriod,
  yearFilter,
  ratingFilter,  genreFilter,
  sortBy,
  sortOrder,
  currentFilters,
  hasMovies,
  isLoading,
  hasError,
  filteredMovies,
  availableYears,
  availableGenres,
  availableRatingRanges
} from './movieStore-state'

import {
  setError,
  clearError,
  searchMovies,
  discoverMovies,
  getTrendingMovies
} from './movieStore-actions'

import {
  initializeGenres,
  fetchMovieDetails
} from './movieStore-details'

import {
  applyFilters,
  clearFilters,
  clearSearch,
  reset
} from './movieStore-utils'

export const useMovieStore = defineStore('movie', () => {
  return {
    movies,
    movieDetails,
    currentMovie,
    loading,
    error,
    searchQuery,
    totalResults,
    totalPages,
    currentPage,
    genres,
    searchMode,
    trendingPeriod,
    yearFilter,
    ratingFilter,
    genreFilter,    sortBy,
    sortOrder,
    currentFilters,
    
    hasMovies,
    isLoading,
    hasError,
    filteredMovies,
    availableYears,
    availableGenres,
    availableRatingRanges,
    
    initializeGenres,
    searchMovies,
    discoverMovies,
    getTrendingMovies,
    fetchMovieDetails,
    applyFilters,
    clearFilters,
    clearSearch,
    reset,
    setError,
    clearError
  }
})
