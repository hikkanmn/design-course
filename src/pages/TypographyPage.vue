<script setup>
import TypographyIntroSection from '/src/components/typography/TypographyIntroSection.vue'
import MainTypography from '/src/components/typography/MainTypography.vue'
import ScrollToTop from '/src/components/ScrollToTop.vue'

import { ref } from 'vue'
const showIntro = ref(true)
const showMain = ref(true)
</script>

<template>
  <main class="my-0 mx-auto box-border">
    <ScrollToTop />
    <!-- Плавное появление TypographyIntroSection -->
    <transition name="fade" mode="out-in">
      <TypographyIntroSection v-if="showIntro" />
    </transition>

    <!-- Плавное появление MainTypography -->
    <transition name="fade" mode="out-in">
      <MainTypography v-if="showMain" />
    </transition>
  </main>
</template>

<script>
export default {
  name: 'TypographyPage'
}
</script>

<style scoped></style>
