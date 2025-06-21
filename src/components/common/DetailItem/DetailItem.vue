<template>
  <div class="detail-item" v-if="value">
    <strong>{{ label }}</strong>
    <span>{{ value }}</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string
  value: string | null | undefined
}

defineProps<Props>()
</script>

<style scoped>
@import './DetailItem.css';
</style>
