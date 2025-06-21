<template>
  <div class="quick-suggestions">
    <h3>🎯 Popular Searches:</h3>
    <div class="suggestion-buttons">
      <button 
        v-for="suggestion in suggestions" 
        :key="suggestion.label"
        @click="$emit('quickAction', suggestion)"
        class="suggestion-btn"
      >
        {{ suggestion.icon }} {{ suggestion.label }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Suggestion {
  icon: string
  label: string
  action: string
  value: string
}

defineEmits<{
  quickAction: [suggestion: Suggestion]
}>()

const suggestions: Suggestion[] = [
  // Genre-based suggestions
  { icon: '🦸', label: 'Superhero Movies', action: 'genre', value: '28' },
  { icon: '😂', label: 'Comedy Films', action: 'genre', value: '35' },
  { icon: '💫', label: 'Sci-Fi Adventures', action: 'genre', value: '878' },
  { icon: '❤️', label: 'Romance Movies', action: 'genre', value: '10749' },
  { icon: '👻', label: 'Horror Thrills', action: 'genre', value: '27' },
  { icon: '🎭', label: 'Award Winners', action: 'rating', value: '8' },
  
  // Additional popular genres
  { icon: '🕵️', label: 'Mystery & Thriller', action: 'genre', value: '53' },
  { icon: '🏰', label: 'Fantasy Epics', action: 'genre', value: '14' },
  { icon: '🎬', label: 'Drama Classics', action: 'genre', value: '18' },
  { icon: '🌟', label: 'Animation & Family', action: 'genre', value: '16' },
  { icon: '🚀', label: 'Adventure Films', action: 'genre', value: '12' },
  
  // Rating-based suggestions
  { icon: '⭐', label: 'Top Rated (9+)', action: 'rating', value: '9' },
  
  // Popular search terms
  { icon: '🎪', label: 'Marvel Universe', action: 'search', value: 'Marvel' },
  { icon: '⚡', label: 'DC Comics', action: 'search', value: 'DC' },
  { icon: '🌌', label: 'Star Wars', action: 'search', value: 'Star Wars' },
  { icon: '🧙', label: 'Harry Potter', action: 'search', value: 'Harry Potter' },
]
</script>

<style scoped>
@import './QuickSuggestions.css';
</style>
