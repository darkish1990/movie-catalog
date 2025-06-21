<template>
  <div class="movie-detail">
    <LoadingSpinner v-if="loading" message="Loading movie details..." />
    <ErrorMessage v-if="error" :message="error">
      <template #actions>
        <BackButton text="Go Back" />
      </template>
    </ErrorMessage>   
    <div v-if="currentMovie && !loading" class="movie-content">
      <BackButton text="Back to Search" />
      <MovieHeader :movie="currentMovie" />
      <MoviePlot :plot="currentMovie.overview" />
      <MovieDetails :movie="currentMovie" />
      <MovieRatings :movie="currentMovie" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useMovieStore } from '../stores/movieStore'

import { LoadingSpinner, ErrorMessage, BackButton } from '../components/common'
import { MovieHeader, MoviePlot, MovieDetails, MovieRatings } from '../components/movie'

const route = useRoute()
const movieStore = useMovieStore()

const movieId = computed(() => parseInt(route.params.id as string))

const currentMovie = computed(() => movieStore.currentMovie)
const loading = computed(() => movieStore.loading)
const error = computed(() => movieStore.error)

onMounted(async () => {
  if (movieId.value && !isNaN(movieId.value)) {
    await movieStore.fetchMovieDetails(movieId.value)
  }
})
</script>

<style scoped>
.movie-detail {
  max-width: 1200px;
  margin: 0 auto;
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.movie-content {
  padding: 1rem;
}

@media (max-width: 768px) {
  .movie-content {
    padding: 0.5rem;
  }
}
</style>
