<script setup>
import ColorIntroSection from '/src/components/color/ColorIntroSection.vue'
import MainColor from '/src/components/color/MainColor.vue'
import ScrollToTop from '/src/components/ScrollToTop.vue'

import { ref } from 'vue'
const showIntro = ref(true)
const showMain = ref(true)
</script>

<template>
  <main class="my-0 mx-auto box-border">
    <ScrollToTop />
    <!-- Плавное появление ColorIntroSection -->
    <transition name="fade" mode="out-in">
      <ColorIntroSection v-if="showIntro" />
    </transition>

    <!-- Плавное появление MainColor -->
    <transition name="fade" mode="out-in">
      <MainColor v-if="showMain" />
    </transition>
  </main>
</template>

<script>
export default {
  name: 'ColorPage'
}
</script>

<style scoped></style>
