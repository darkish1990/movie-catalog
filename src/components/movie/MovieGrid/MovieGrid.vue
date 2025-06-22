<template>
  <div class="movies-section">
    <h2 class="section-title">
      {{ title }}
      <span class="results-count" v-if="showResultsCount">
        (showing {{ movies.length }} of {{ totalResults }} results)
      </span>
    </h2>
      <div class="movies-grid">
      <MovieCard
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
        @click="$emit('movieClick', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Movie } from '../../../types/movie'
import MovieCard from '../MovieCard/MovieCard.vue'

interface Props {
  movies: Movie[]
  title: string
  totalResults?: number
  showResultsCount?: boolean
}

withDefaults(defineProps<Props>(), {
  totalResults: 0,
  showResultsCount: true
})

defineEmits<{
  movieClick: [movieId: number]
}>()
</script>

<style scoped>
@import './MovieGrid.css';
@import '../../../assets/animations.css';
</style>
