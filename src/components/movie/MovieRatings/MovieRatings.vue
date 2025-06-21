<template>
  <div class="movie-ratings">
    <h3>⭐ Ratings & Stats</h3>
    <div class="ratings-grid">
      <div class="rating-item" v-if="movie.vote_average > 0">
        <strong>🎬 TMDB Rating:</strong>
        <span>{{ movie.vote_average.toFixed(1) }}/10 ({{ movie.vote_count }} votes)</span>
      </div>
      
      <div class="rating-item" v-if="movie.popularity">
        <strong>📊 Popularity:</strong>
        <span>{{ Math.round(movie.popularity) }}</span>
      </div>
      
      <div class="rating-item" v-if="movie.status">
        <strong>📺 Status:</strong>
        <span>{{ movie.status }}</span>
      </div>
      
      <div class="rating-item" v-if="movie.budget && movie.budget > 0">
        <strong>💰 Budget:</strong>
        <span>${{ formatCurrency(movie.budget) }}</span>
      </div>
      
      <div class="rating-item" v-if="movie.revenue && movie.revenue > 0">
        <strong>💵 Revenue:</strong>
        <span>${{ formatCurrency(movie.revenue) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MovieDetail } from '../../../types/movie'

interface Props {
  movie: MovieDetail
}

defineProps<Props>()

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short'
  }).format(amount)
}
</script>

<style scoped>
@import './MovieRatings.css';
</style>
