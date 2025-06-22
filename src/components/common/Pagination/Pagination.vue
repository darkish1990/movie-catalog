<template>
  <div class="pagination-container">
    <div class="pagination desktop-pagination">
      <button 
        class="page-btn prev-btn" 
        :disabled="currentPage <= 1"
        @click="handlePageChange(currentPage - 1)"
        aria-label="Previous page"
      >
        <span class="icon">&#9664;</span>
      </button>
      
      <button 
        v-if="showFirstPage" 
        class="page-btn" 
        :class="{ active: currentPage === 1 }"
        @click="handlePageChange(1)"
      >
        1
      </button>
      
      <span v-if="showLeftEllipsis" class="ellipsis">…</span>
      
      <button 
        v-for="page in visiblePageNumbers" 
        :key="page" 
        class="page-btn"
        :class="{ active: currentPage === page }"
        @click="handlePageChange(page)"
      >
        {{ page }}
      </button>
      
      <span v-if="showRightEllipsis" class="ellipsis">…</span>
      
      <button 
        v-if="showLastPage" 
        class="page-btn" 
        :class="{ active: currentPage === totalPages }"
        @click="handlePageChange(totalPages)"
      >
        {{ totalPages }}
      </button>
      
      <button 
        class="page-btn next-btn" 
        :disabled="currentPage >= totalPages"
        @click="handlePageChange(currentPage + 1)"
        aria-label="Next page"
      >
        <span class="icon">&#9654;</span>
      </button>
    </div>
    
    <div class="pagination mobile-pagination">
      <button 
        class="page-btn prev-btn" 
        :disabled="currentPage <= 1"
        @click="handlePageChange(currentPage - 1)"
        aria-label="Previous page"
      >
        <span class="icon">&#9664;</span>
      </button>
      
      <button class="page-btn active current-page">
        {{ currentPage }}/{{ totalPages }}
      </button>
      
      <button 
        class="page-btn next-btn" 
        :disabled="currentPage >= totalPages"
        @click="handlePageChange(currentPage + 1)"
        aria-label="Next page"
      >
        <span class="icon">&#9654;</span>
      </button>
    </div>
    
    <div class="page-info">
      Page {{ currentPage }} of {{ totalPages }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import './Pagination.css';

interface Props {
  currentPage: number;
  totalPages: number;
  visiblePageCount?: number;
}

const props = withDefaults(defineProps<Props>(), {
  visiblePageCount: 5
});

const emit = defineEmits<{
  (e: 'pageChange', page: number): void
}>();

const handlePageChange = (page: number) => {
  if (page < 1 || page > props.totalPages || page === props.currentPage) return;
  emit('pageChange', page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const visiblePageNumbers = computed(() => {
  const halfVisibleCount = Math.floor(props.visiblePageCount / 2);
  let start = Math.max(props.currentPage - halfVisibleCount, 2);
  let end = Math.min(start + props.visiblePageCount - 1, props.totalPages - 1);
  
  if (end === props.totalPages - 1) {
    start = Math.max(end - props.visiblePageCount + 1, 2);
  }
  
  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  
  return pages;
});

const showFirstPage = computed(() => props.totalPages > 1);

const showLastPage = computed(() => props.totalPages > 1 && props.totalPages !== 1);

const showLeftEllipsis = computed(() => {
  return visiblePageNumbers.value.length > 0 && visiblePageNumbers.value[0] > 2;
});

const showRightEllipsis = computed(() => {
  return visiblePageNumbers.value.length > 0 && 
         visiblePageNumbers.value[visiblePageNumbers.value.length - 1] < props.totalPages - 1;
});
</script>
