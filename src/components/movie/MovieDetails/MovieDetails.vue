<template>
  <div class="movie-details">
    <h3>🎬 Movie Details</h3>
    <div class="details-grid">
      <div class="detail-item" v-if="director">
        <strong>🎭 Director:</strong>
        <span>{{ director }}</span>
      </div>
      
      <div class="detail-item" v-if="mainCast">
        <strong>🎪 Main Cast:</strong>
        <span>{{ mainCast }}</span>
      </div>
      
      <div class="detail-item" v-if="movie.release_date">
        <strong>📅 Released:</strong>
        <span>{{ formatDate(movie.release_date) }}</span>
      </div>
      
      <div class="detail-item" v-if="movie.original_language">
        <strong>🌍 Original Language:</strong>
        <span>{{ getLanguageName(movie.original_language) }}</span>
      </div>
      
      <div class="detail-item" v-if="movie.production_countries && movie.production_countries.length > 0">
        <strong>�️ Countries:</strong>
        <span>{{ movie.production_countries.map(c => c.name).join(', ') }}</span>
      </div>
      
      <div class="detail-item" v-if="movie.production_companies && movie.production_companies.length > 0">
        <strong>� Production:</strong>
        <span>{{ movie.production_companies.slice(0, 3).map(c => c.name).join(', ') }}</span>
      </div>
      
      <div class="detail-item" v-if="movie.spoken_languages && movie.spoken_languages.length > 0">
        <strong>� Spoken Languages:</strong>
        <span>{{ movie.spoken_languages.map(l => l.english_name).join(', ') }}</span>
      </div>
      
      <div class="detail-item" v-if="movie.original_title !== movie.title">
        <strong>📝 Original Title:</strong>
        <span>{{ movie.original_title }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { MovieDetail } from '../../../types/movie'
import { tmdbService } from '../../../services/tmdbService'

interface Props {
  movie: MovieDetail
}

const props = defineProps<Props>()

const director = computed(() => tmdbService.getDirector(props.movie.credits))
const mainCast = computed(() => tmdbService.getMainCast(props.movie.credits))

const formatDate = (dateString: string | null | undefined) => {
  if (!dateString || dateString.trim() === '') {
    return 'Unknown'
  }
  
  try {
    const date = new Date(dateString)
    if (isNaN(date.getTime())) {
      return 'Unknown'
    }
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch {
    return 'Unknown'
  }
}

const getLanguageName = (code: string) => {
  const languageNames: Record<string, string> = {
    'en': 'English',
    'es': 'Spanish',
    'fr': 'French',
    'de': 'German',
    'it': 'Italian',
    'ja': 'Japanese',
    'ko': 'Korean',
    'zh': 'Chinese',
    'ru': 'Russian',
    'pt': 'Portuguese',
    'hi': 'Hindi',
    'ar': 'Arabic'
  }
  return languageNames[code] || code.toUpperCase()
}
</script>

<style scoped>
@import './MovieDetails.css';
</style>
