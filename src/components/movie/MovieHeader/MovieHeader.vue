<template>
  <div class="movie-header">
    <div class="movie-poster">
      <img
        v-if="posterUrl"
        :src="posterUrl"
        :alt="movie.title"
        class="poster-image"
      />
      <div v-else class="poster-placeholder">
        🎬
      </div>
    </div>

    <div class="movie-info">
      <h1 class="movie-title">{{ movie.title }}</h1>
      
      <div class="movie-meta">
        <span class="year">{{ releaseYear }}</span>
        <span class="runtime" v-if="movie.runtime">{{ movie.runtime }} min</span>
        <span class="rating" v-if="movie.vote_average > 0">
          ⭐ {{ movie.vote_average.toFixed(1) }}/10 ({{ movie.vote_count }} votes)
        </span>
      </div>

      <p class="tagline" v-if="movie.tagline">{{ movie.tagline }}</p>

      <div class="genres" v-if="movie.genres && movie.genres.length > 0">
        <span 
          v-for="genre in movie.genres" 
          :key="genre.id"
          class="genre-tag"
        >
          {{ genre.name }}
        </span>
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

const posterUrl = computed(() => 
  tmdbService.getImageURL(props.movie.poster_path, 'w500')
)

const releaseYear = computed(() => 
  tmdbService.formatReleaseDate(props.movie.release_date)
)
</script>

<style scoped>
@import './MovieHeader.css';
</style>
