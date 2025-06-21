<template>
  <div class="trending-section">
    <div class="trending-controls">
      <button 
        :class="{ active: trendingPeriod === 'day' }"
        @click="handlePeriodChange('day')"
        class="trending-btn"
      >
        📅 Today
      </button>
      <button 
        :class="{ active: trendingPeriod === 'week' }"
        @click="handlePeriodChange('week')"
        class="trending-btn"
      >
        📈 This Week
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emits = defineEmits<{
  trending: [period: 'day' | 'week']
}>()

const trendingPeriod = ref<'day' | 'week'>('week')

const handlePeriodChange = (period: 'day' | 'week') => {
  trendingPeriod.value = period
  emits('trending', period)
}
</script>

<style scoped>
@import './TrendingControls.css';
</style>
