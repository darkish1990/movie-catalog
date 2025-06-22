<template>  <div class="no-results">
    <h2 v-if="searchQuery">No movies found for "{{ searchQuery }}"</h2>
    <h2 v-else>No movies found</h2>    <div class="suggestions">
      <p>Try:</p>
      <ul v-if="searchQuery">
        <li>Different keywords or movie titles</li>
        <li>Checking the spelling</li>
        <li>More general terms</li>
      </ul>
      <ul v-else>
        <li>Adjusting your filters</li>
        <li>Selecting different genres or years</li>
        <li>Lowering the minimum rating</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  searchQuery?: string
}

defineProps<Props>()
</script>

<style scoped>
@import './NoResults.css';
</style>
