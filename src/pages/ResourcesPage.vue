<script setup>
import ResourcesIntroSection from '/src/components/resources/ResourcesIntroSection.vue'
import MainResources from '/src/components/resources/MainResources.vue'
import ScrollToTop from '/src/components/ScrollToTop.vue'

import { ref } from 'vue'
const showIntro = ref(true)
const showMain = ref(true)
</script>

<template>
  <main class="my-0 mx-auto box-border">
    <ScrollToTop />
    <!-- Плавное появление ResourcesIntroSection -->
    <transition name="fade" mode="out-in">
      <ResourcesIntroSection v-if="showIntro" />
    </transition>

    <!-- Плавное появление MainResources -->
    <transition name="fade" mode="out-in">
      <MainResources v-if="showMain" />
    </transition>
  </main>
</template>

<script>
export default {
  name: 'ResourcesPage'
}
</script>

<style scoped></style>
