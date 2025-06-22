<template>
  <div class="loading">
    <div class="spinner">🎬 {{ message }}</div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  message?: string
}

withDefaults(defineProps<Props>(), {
  message: 'Loading...'
})
</script>

<style scoped>
@import './LoadingSpinner.css';
@import '../../../assets/animations.css';
</style>
