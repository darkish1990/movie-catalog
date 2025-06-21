import { tmdbService } from '../services/tmdbService'
import { 
  currentMovie, 
  movieDetails, 
  genres
} from './movieStore-state'
import { setLoading, setError, clearError } from './movieStore-actions'

export const initializeGenres = async () => {
  try {
    genres.value = await tmdbService.getGenres()
  } catch (err) {
    console.warn('Failed to load genres:', err)
  }
}

export const fetchMovieDetails = async (movieId: number) => {
  setLoading(true)
  clearError()
  try {
    const movie = await tmdbService.getMovieDetails(movieId)
    currentMovie.value = movie
    
    movieDetails.value.set(movieId, movie)
  } catch (err) {
    setError(err instanceof Error ? err.message : 'Failed to get movie details')
  } finally {
    setLoading(false)
  }
}
