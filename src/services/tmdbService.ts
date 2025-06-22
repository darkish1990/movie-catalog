import axios from 'axios'
import type { MovieSearchResponse, TMDBSearchFilters, MovieDetail, Genre } from '../types/movie'
import { API_ENDPOINTS, JOB_TITLES, TRENDING_PERIODS } from '../constants'
import type { TrendingPeriod } from '../constants'

const TMDB_ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN 
const TMDB_BASE_URL = 'https://api.themoviedb.org/3'
const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p'

const tmdbApi = axios.create({
  baseURL: TMDB_BASE_URL,
  headers: {
    'Authorization': `Bearer ${TMDB_ACCESS_TOKEN}`,
    'Content-Type': 'application/json'
  }
})

class TMDBService {
  async searchMovies(query: string, page = 1): Promise<MovieSearchResponse> {
    try {
      const response = await tmdbApi.get(API_ENDPOINTS.SEARCH_MOVIE, {
        params: {
          query,
          page,
          include_adult: false
        }
      })
      return response.data
    } catch (error: any) {
      console.error('TMDB Search Error:', error.response?.data || error.message)
      throw new Error(`Failed to search movies: ${error.response?.data?.status_message || error.message}`)    }
  }
  
  async discoverMovies(filters: TMDBSearchFilters): Promise<MovieSearchResponse> {
    const params: any = {
      page: filters.page || 1,
      include_adult: false,
      'vote_count.gte': 50 // Ensure movies have enough votes
    }

    if (filters.genre) {
      params.with_genres = filters.genre
    }
    
    if (filters.year) {
      params.year = filters.year
    }
    
    if (filters.minRating) {
      params['vote_average.gte'] = filters.minRating
    }
    
    if (filters.maxRating) {
      params['vote_average.lte'] = filters.maxRating
    }
    
    if (filters.sortBy) {
      params.sort_by = filters.sortBy
    }

    try {
      const response = await tmdbApi.get(API_ENDPOINTS.DISCOVER_MOVIE, { params })
      return response.data
    } catch (error: any) {
      console.error('TMDB Discover Error:', error.response?.data || error.message)
      throw new Error(`Failed to discover movies: ${error.response?.data?.status_message || error.message}`)
    }  }

  async getGenres(): Promise<Genre[]> {
    try {
      const response = await tmdbApi.get(API_ENDPOINTS.GENRES)
      return response.data.genres
    } catch (error: any) {
      console.error('TMDB Genres Error:', error.response?.data || error.message)
      throw new Error(`Failed to get genres: ${error.response?.data?.status_message || error.message}`)
    }  }

  async getMovieDetails(movieId: number): Promise<MovieDetail> {
    try {
      const response = await tmdbApi.get(`${API_ENDPOINTS.MOVIE_DETAILS}/${movieId}`, {
        params: {
          append_to_response: 'credits,videos,similar'
        }
      })
      return response.data
    } catch (error: any) {
      console.error('TMDB Movie Details Error:', error.response?.data || error.message)
      throw new Error(`Failed to get movie details: ${error.response?.data?.status_message || error.message}`)
    }
  }  async getTrending(timeWindow: TrendingPeriod = TRENDING_PERIODS.WEEK, page = 1): Promise<MovieSearchResponse> {
    try {
      const response = await tmdbApi.get(`${API_ENDPOINTS.TRENDING_MOVIE}/${timeWindow}`, {
        params: { page }
      })
      return response.data
    } catch (error: any) {
      console.error('TMDB Trending Error:', error.response?.data || error.message)
      throw new Error(`Failed to get trending movies: ${error.response?.data?.status_message || error.message}`)
    }  }

  async getPopular(page = 1): Promise<MovieSearchResponse> {
    try {
      const response = await tmdbApi.get(API_ENDPOINTS.POPULAR_MOVIES, {
        params: { page }
      })
      return response.data
    } catch (error: any) {
      console.error('TMDB Popular Error:', error.response?.data || error.message)
      throw new Error(`Failed to get popular movies: ${error.response?.data?.status_message || error.message}`)
    }  }

  getImageURL(path: string | null, size: 'w200' | 'w300' | 'w500' | 'w780' | 'original' = 'w500'): string | null {
    return path ? `${TMDB_IMAGE_BASE}/${size}${path}` : null
  }

  getBackdropURL(path: string | null, size: 'w300' | 'w780' | 'w1280' | 'original' = 'w1280'): string | null {
    return path ? `${TMDB_IMAGE_BASE}/${size}${path}` : null
  }
  
  formatReleaseDate(dateString: string | null | undefined): string {
    if (!dateString || dateString.trim() === '') {
      return 'Unknown'
    }
    
    try {
      const date = new Date(dateString)
      const year = date.getFullYear()      
      if (isNaN(year) || year < 1800 || year > 2100) {
        return 'Unknown'
      }
      
      return year.toString()
    } catch {
      return 'Unknown'
    }
  }

  getDirector(credits?: any): string {
    if (!credits || !credits.crew) return 'Unknown'
    const director = credits.crew.find((person: any) => person.job === JOB_TITLES.DIRECTOR)
    return director ? director.name : 'Unknown'
  }

  getMainCast(credits?: any): string {
    if (!credits || !credits.cast) return 'Unknown'
    return credits.cast
      .slice(0, 5)
      .map((actor: any) => actor.name)
      .join(', ')
  }
}

export const tmdbService = new TMDBService()
