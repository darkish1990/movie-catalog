<template>
  <div class="error">
    <h3>❌ Error</h3>
    <p>{{ message }}</p>
    <button @click="$emit('retry')" class="btn">
      <slot name="button-text">Try Again</slot>
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  message: string
}

defineProps<Props>()
defineEmits<{
  retry: []
}>()
</script>

<style scoped>
@import './ErrorMessage.css';
</style>
