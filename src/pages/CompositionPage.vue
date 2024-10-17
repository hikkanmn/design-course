<script setup>
import CompositionIntroSection from '/src/components/composition/CompositionIntroSection.vue'
import MainComposition from '/src/components/composition/MainComposition.vue'
import ScrollToTop from '/src/components/ScrollToTop.vue'
</script>

<template>
  <main class="my-0 mx-auto box-border">
    <ScrollToTop />
    <!-- Вступительный раздел -->
    <CompositionIntroSection />
    <!-- Основной контент -->
    <MainComposition />
  </main>
</template>

<script>
export default {
  name: 'CompositionPage'
}
</script>

<style scoped>
/* Стили для страницы "Композиция" */
</style>
