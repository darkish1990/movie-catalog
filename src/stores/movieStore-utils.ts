import {
  movies,
  searchQuery,
  currentPage,
  totalResults,
  totalPages,
  currentMovie,
  movieDetails,
  searchMode,
  genreFilter,
  yearFilter,
  ratingFilter
} from './movieStore-state'
import { clearError } from './movieStore-actions'
import { SEARCH_MODES } from '../constants'

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
  searchMode.value = SEARCH_MODES.SEARCH
  genreFilter.value = undefined
  yearFilter.value = ''
  ratingFilter.value = ''
}
