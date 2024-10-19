<script setup>
import ResourcesIntroSection from '/src/components/resources/ResourcesIntroSection.vue'
import MainResources from '/src/components/resources/MainResources.vue'
import ScrollToTop from '/src/components/ScrollToTop.vue'
</script>

<template>
  <main class="my-0 mx-auto box-border">
    <ScrollToTop />
    <!-- Вступительный раздел -->
    <ResourcesIntroSection />
    <!-- Основной контент -->
    <MainResources />
  </main>
</template>

<script>
export default {
  name: 'ResourcesPage'
}
</script>

<style scoped></style>
