<template>
  <div class="welcome">
    <h2>Welcome to Movie Catalog!</h2>
    <p>Discover amazing movies through search, trending content, or personalized recommendations using the movie discovery area above.</p>
    
    <div class="features">
      <h3>🎬 What You Can Do:</h3>
      <div class="features-grid">
        <FeatureCard
          v-for="feature in featureData"
          :key="feature.id"
          :title="feature.title"
          :features="feature.features"
          :isClickable="feature.isClickable"
          @click="handleFeatureClick(feature.id)"
        />
      </div>
    </div>

    <div class="get-started">
      <p><strong>🚀 Get Started:</strong> Use the movie discovery section above to search, discover, or explore trending movies!</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FeatureCard } from '../FeatureCard'

interface FeatureData {
  id: string
  title: string
  features: string[]
  isClickable: boolean
}

const emits = defineEmits<{
  navigateToSearch: []
  navigateToDiscover: []
  navigateToTrending: []
}>()

const featureData: FeatureData[] = [
  {
    id: 'search',
    title: '🔍 Search Movies',
    features: [
      'Search by movie title, actor, or keywords',
      'Find specific movies quickly and easily',
      'Get instant search results'
    ],
    isClickable: true
  },
  {
    id: 'discover',
    title: '🌟 Discover Movies',
    features: [
      '🎭 Filter by genre (Action, Comedy, Drama, Horror, etc.)',
      '📅 Browse movies by year or decade',
      '⭐ Find highly-rated movies (8.0+, 7.0+, etc.)',
      '📊 Sort by popularity, rating, or release date'
    ],
    isClickable: true
  },
  {
    id: 'trending',
    title: '🔥 Trending Now',
    features: [
      '📈 See what\'s trending this week',
      '📅 Check today\'s most popular movies',
      '🌟 Stay updated with current movie trends'
    ],
    isClickable: true
  },
  {
    id: 'suggestions',
    title: '🎯 Quick Suggestions',
    features: [
      '🦸 Popular franchises (Marvel, DC, Star Wars)',
      '🏆 Award-winning movies and classics',
      '📺 90s and 80s nostalgic favorites',
      '🎪 One-click access to popular genres'
    ],
    isClickable: true
  },
  {
    id: 'details',
    title: '📝 Movie Details',
    features: [
      '🎬 View detailed movie information',
      '⭐ Check ratings and reviews',
      '🖼️ Browse high-quality movie posters',
      '📖 Read plot summaries and cast info'
    ],
    isClickable: false
  }
]

const handleFeatureClick = (featureId: string) => {
  switch (featureId) {
    case 'search':
      emits('navigateToSearch')
      break
    case 'discover':
      emits('navigateToDiscover')
      break
    case 'trending':
      emits('navigateToTrending')
      break
    case 'suggestions':
      window.scrollTo({ top: 0, behavior: 'smooth' })
      break
  }
}
</script>

<style scoped>
@import './WelcomeSection.css';
</style>
