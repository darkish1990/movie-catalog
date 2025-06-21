import { 
  movies, 
  searchQuery, 
  currentPage, 
  totalResults, 
  totalPages, 
  currentMovie, 
  movieDetails, 
  searchMode,
  yearFilter,
  ratingFilter,
  genreFilter,
  sortBy,
  sortOrder
} from './movieStore-state'
import { clearError, searchMovies } from './movieStore-actions'

export const applyFilters = async () => {
  if (searchQuery.value) {
    await searchMovies(searchQuery.value, currentPage.value)
  }
}

export const clearFilters = () => {
  yearFilter.value = ''
  ratingFilter.value = ''
  genreFilter.value = ''
  sortBy.value = 'popularity.desc'
  sortOrder.value = 'desc'
}

export const clearSearch = () => {
  movies.value = []
  searchQuery.value = ''
  currentPage.value = 1
  totalResults.value = 0
  totalPages.value = 0
  clearError()
}

export const reset = () => {
  clearSearch()
  clearFilters()
  currentMovie.value = null
  movieDetails.value.clear()
  searchMode.value = 'search'
}
