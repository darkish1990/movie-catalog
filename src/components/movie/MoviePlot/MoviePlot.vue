<template>
  <div class="movie-plot">
    <h3>📖 Plot</h3>
    <p class="plot">{{ plot }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  plot: string
}

defineProps<Props>()
</script>

<style scoped>
@import './MoviePlot.css';
</style>
