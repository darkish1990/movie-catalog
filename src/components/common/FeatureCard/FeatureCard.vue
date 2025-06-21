<template>
  <div 
    :class="['feature-card', { clickable: isClickable }]"
    @click="handleClick"
    :role="isClickable ? 'button' : undefined"
    :tabindex="isClickable ? '0' : undefined"
    @keyup.enter="handleClick"
    @keyup.space.prevent="handleClick"
  >
    <h4>{{ title }}</h4>
    <ul>
      <li v-for="feature in features" :key="feature">{{ feature }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  features: string[]
  isClickable?: boolean
}

interface Emits {
  click: []
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()

const handleClick = () => {
  if (props.isClickable) {
    emits('click')
  }
}
</script>

<style scoped>
@import './FeatureCard.css';
</style>
