<template>
  <button @click="goBack" class="back-btn">
    ← {{ text }}
  </button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

interface Props {
  text?: string
}

withDefaults(defineProps<Props>(), {
  text: 'Back'
})

const router = useRouter()

const goBack = () => {
  router.go(-1)
}
</script>

<style scoped>
@import './BackButton.css';
</style>
