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
  ratingFilter,
  genreFilter,
  sortBy,
  currentFilters,
  hasMovies,
  isLoading,
  hasError,
  filteredMovies,
  availableGenres
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
  clearSearch,
  reset
} from './movieStore-utils'

export const useMovieStore = defineStore('movie', () => {
  return {    movies,
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
    genreFilter,
    sortBy,
    currentFilters,

    hasMovies,
    isLoading,
    hasError,
    filteredMovies,
    availableGenres,

    initializeGenres,
    searchMovies,
    discoverMovies,
    getTrendingMovies,
    fetchMovieDetails,
    clearSearch,
    reset,
    setError,
    clearError
  }
})
