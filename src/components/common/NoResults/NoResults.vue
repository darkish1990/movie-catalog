<template>  <div class="no-results">
    <h2 v-if="searchQuery">No movies found for "{{ searchQuery }}"</h2>
    <h2 v-else>No movies found</h2>
    <div class="suggestions">
      <p v-if="searchQuery">Try:</p>
      <p v-else>Try:</p>
      <ul>
        <li v-if="searchQuery">Different keywords or movie titles</li>
        <li v-if="searchQuery">Checking the spelling</li>
        <li v-if="searchQuery">More general terms</li>
        <li v-if="!searchQuery">Adjusting your filters</li>
        <li v-if="!searchQuery">Selecting different genres or years</li>
        <li v-if="!searchQuery">Lowering the minimum rating</li>
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
