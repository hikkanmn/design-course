<script setup>
import CompositionIntroSection from '/src/components/composition/CompositionIntroSection.vue'
import MainComposition from '/src/components/composition/MainComposition.vue'
import ScrollToTop from '/src/components/ScrollToTop.vue'

import { ref } from 'vue'
const showIntro = ref(true)
const showMain = ref(true)
</script>

<template>
  <main class="my-0 mx-auto box-border">
    <ScrollToTop />
    <!-- Плавное появление CompositionIntroSection -->
    <transition name="fade" mode="out-in">
      <CompositionIntroSection v-if="showIntro" />
    </transition>

    <!-- Плавное появление MainComposition -->
    <transition name="fade" mode="out-in">
      <MainComposition v-if="showMain" />
    </transition>
  </main>
</template>

<script>
export default {
  name: 'CompositionPage'
}
</script>

<style scoped></style>
