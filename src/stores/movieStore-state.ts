import { ref, computed } from 'vue'
import type { Movie, MovieDetail, Genre } from '../types'
import { tmdbService } from '../services/tmdbService'
import { SEARCH_MODES, TRENDING_PERIODS, SORT_OPTIONS } from '../constants'
import type { SearchMode, TrendingPeriod, SortOption } from '../types'

export const movies = ref<Movie[]>([])
export const movieDetails = ref<Map<number, MovieDetail>>(new Map())
export const currentMovie = ref<MovieDetail | null>(null)
export const loading = ref(false)
export const error = ref<string | null>(null)
export const searchQuery = ref('')
export const totalResults = ref(0)
export const totalPages = ref(0)
export const currentPage = ref(1)
export const genres = ref<Genre[]>([])

export const searchMode = ref<SearchMode>(SEARCH_MODES.SEARCH)
export const trendingPeriod = ref<TrendingPeriod>(TRENDING_PERIODS.WEEK)

export const yearFilter = ref('')
export const ratingFilter = ref('')
export const genreFilter = ref<number | undefined>(undefined)
export const sortBy = ref<SortOption>(SORT_OPTIONS.POPULARITY_DESC)

export const currentFilters = computed(() => ({
  query: searchQuery.value,
  genre: genreFilter.value,
  year: yearFilter.value ? parseInt(yearFilter.value) : undefined,
  minRating: ratingFilter.value ? parseFloat(ratingFilter.value) : undefined,
  sortBy: sortBy.value,
  page: currentPage.value
}))

export const hasMovies = computed(() => movies.value.length > 0)
export const isLoading = computed(() => loading.value)
export const hasError = computed(() => !!error.value)

export const filteredMovies = computed(() => {
  let filtered = movies.value

  // Only apply client-side filtering in search mode
  // In discover mode, the API already handles filtering
  if (searchMode.value === SEARCH_MODES.SEARCH) {
    if (yearFilter.value) {
      filtered = filtered.filter(movie => {
        const movieYear = tmdbService.formatReleaseDate(movie.release_date)
        return movieYear === yearFilter.value
      })
    }
    if (genreFilter.value) {
      const genreId = genreFilter.value
      filtered = filtered.filter(movie => {
        if (movie.genre_ids.includes(genreId)) return true

        const details = movieDetails.value.get(movie.id)
        if (details && details.genres) {
          return details.genres.some(genre => genre.id === genreId)
        }
        return false
      })
    }

    if (ratingFilter.value) {
      const filterRating = parseFloat(ratingFilter.value)
      filtered = filtered.filter(movie => movie.vote_average >= filterRating)
    }
    
    // Apply sorting only in search mode
    return filtered.sort((a, b) => {
      let comparison = 0

      const sortType = sortBy.value.split('.')[0]
      switch (sortType) {
        case 'title':
          comparison = a.title.localeCompare(b.title)
          break
        case 'release_date':
          const dateA = a.release_date ? new Date(a.release_date).getTime() : 0
          const dateB = b.release_date ? new Date(b.release_date).getTime() : 0
          comparison = dateA - dateB
          break
        case 'vote_average':
          comparison = a.vote_average - b.vote_average
          break
        case 'popularity':
          comparison = a.popularity - b.popularity
          break
      }

      const isDesc = sortBy.value.includes('.desc')
      return isDesc ? -comparison : comparison
    })
  }

  // In discover/trending mode, return movies as-is (API already filtered/sorted)
  return filtered
})

export const availableGenres = computed(() => {
  return genres.value
})
