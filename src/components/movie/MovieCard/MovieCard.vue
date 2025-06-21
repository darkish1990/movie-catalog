<template>
  <div class="movie-card" @click="$emit('click', movie.id)" @keyup.enter="$emit('click', movie.id)" tabindex="0"
    role="button" :aria-label="`View details for ${movie.title}`">
    <div class="movie-poster">
      <img v-if="posterUrl" :src="posterUrl" :alt="movie.title" class="poster-image" @error="handleImageError" />
      <div v-else class="poster-placeholder">
        🎬
      </div>
    </div>

    <div class="movie-info">
      <h3 class="movie-title">{{ movie.title }}</h3>
      <p class="movie-year">{{ releaseYear }}</p>
      <div class="movie-rating" v-if="movie.vote_average > 0">
        <span class="star">⭐</span>
        <span class="rating">{{ movie.vote_average.toFixed(1) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Movie } from '../../../types/movie'
import { tmdbService } from '../../../services/tmdbService'

interface Props {
  movie: Movie
}

const props = defineProps<Props>()

defineEmits<{ click: [movieId: number] }>()

const posterUrl = computed(() =>
  tmdbService.getImageURL(props.movie.poster_path, 'w300')
)

const releaseYear = computed(() =>
  tmdbService.formatReleaseDate(props.movie.release_date)
)

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.style.display = 'none'
}
</script>

<style scoped>
@import './MovieCard.css';
</style>
