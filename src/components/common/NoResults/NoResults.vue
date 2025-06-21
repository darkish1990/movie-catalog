<template>
  <div class="no-results">
    <h2>No movies found for "{{ searchQuery }}"</h2>
    <div class="suggestions">
      <p>Try:</p>
      <ul>
        <li>Different keywords or movie titles</li>
        <li>Checking the spelling</li>
        <li>More general terms</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  searchQuery: string
}

defineProps<Props>()
</script>

<style scoped>
@import './NoResults.css';
</style>
