import {
  movies,
  searchQuery,
  currentPage,
  totalResults,
  totalPages,
  currentMovie,
  movieDetails,
  searchMode
} from './movieStore-state'
import { clearError } from './movieStore-actions'

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
  currentMovie.value = null
  movieDetails.value.clear()
  searchMode.value = 'search'
}
