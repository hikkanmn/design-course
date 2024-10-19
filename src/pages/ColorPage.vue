<script setup>
import ColorIntroSection from '/src/components/color/ColorIntroSection.vue'
import MainColor from '/src/components/color/MainColor.vue'
import ScrollToTop from '/src/components/ScrollToTop.vue'
</script>

<template>
  <main class="my-0 mx-auto box-border">
    <ScrollToTop />
    <!-- Вступительный раздел -->
    <ColorIntroSection />
    <!-- Основной контент -->
    <MainColor />
  </main>
</template>

<script>
export default {
  name: 'CompositionPage'
}
</script>

<style scoped>
</style>