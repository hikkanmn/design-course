<script setup>
import IntroSection from '/src/components/home/IntroSection.vue'
import MainHome from '/src/components/home/MainHome.vue'
import ScrollToTop from '/src/components/ScrollToTop.vue'
import { ref } from 'vue'

const showIntro = ref(true)
const showMain = ref(true)
</script>

<template>
  <main class="my-0 mx-auto box-border">
    <ScrollToTop />
    <!-- Плавное появление IntroSection -->
    <transition name="fade" mode="out-in">
      <IntroSection v-if="showIntro" />
    </transition>

    <!-- Плавное появление MainHome -->
    <transition name="fade" mode="out-in">
      <MainHome v-if="showMain" />
    </transition>
  </main>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
/* Классы для анимации плавного появления */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from, .fade-leave-to /* Начальные и конечные состояния */ {
  opacity: 0;
}
</style>
