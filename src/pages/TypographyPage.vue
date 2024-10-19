<script setup>
import TypographyIntroSection from '/src/components/typography/TypographyIntroSection.vue'
import MainTypography from '/src/components/typography/MainTypography.vue'
import ScrollToTop from '/src/components/ScrollToTop.vue'
</script>

<template>
  <main class="my-0 mx-auto box-border">
    <ScrollToTop />
    <!-- Вступительный раздел -->
    <TypographyIntroSection />
    <!-- Основной контент -->
    <MainTypography />
  </main>
</template>

<script>
export default {
  name: 'TypographyPage'
}
</script>

<style scoped></style>
