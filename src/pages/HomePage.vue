<script setup>
import IntroSection from '/src/components/home/IntroSection.vue'
import MainHome from '/src/components/home/MainHome.vue'
</script>

<template>
  <main class="my-0 mx-auto box-border">
    <!-- Вступительный раздел -->
    <IntroSection />
    <!-- Основной контент -->
    <MainHome />
  </main>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
/* Стили для страницы "Композиция" */
</style>
