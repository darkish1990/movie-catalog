<template>
  <div class="movie-details">
    <h3>🎬 Movie Details</h3>    <div class="details-grid">
      <DetailItem label="🎭 Director:" :value="director" />
      <DetailItem label="🎪 Main Cast:" :value="mainCast" />
      <DetailItem label="📅 Released:" :value="movie.release_date ? formatDate(movie.release_date) : null" />
      <DetailItem label="🌍 Original Language:" :value="movie.original_language ? getLanguageName(movie.original_language) : null" />
      <DetailItem label="🏝️ Countries:" :value="movie.production_countries && movie.production_countries.length > 0 ? movie.production_countries.map(c => c.name).join(', ') : null" />
      <DetailItem label="🏢 Production:" :value="movie.production_companies && movie.production_companies.length > 0 ? movie.production_companies.slice(0, 3).map(c => c.name).join(', ') : null" />
      <DetailItem label="🗣️ Spoken Languages:" :value="movie.spoken_languages && movie.spoken_languages.length > 0 ? movie.spoken_languages.map(l => l.english_name).join(', ') : null" />
      <DetailItem label="📝 Original Title:" :value="movie.original_title !== movie.title ? movie.original_title : null" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { MovieDetail } from '../../../types/movie'
import { tmdbService } from '../../../services/tmdbService'
import { DetailItem } from '../../common'
import { getLanguageName } from '../../../constants'
import type { LanguageCode } from '../../../constants'

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
    return 'Unknown'  }
}
</script>

<style scoped>
@import './MovieDetails.css';
</style>
