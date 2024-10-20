<script setup>
import TypographyContent from '/src/components/typography/TypographyContent.vue'
import TypefaceBlock from '/src/components/typography/TypefaceBlock.vue'
import SizeBlock from '/src/components/typography/SizeBlock.vue'
import ClassificationBlock from '/src/components/typography/ClassificationBlock.vue'
import CombinationBlock from '/src/components/typography/CombinationBlock.vue'
import QuizTypography from '/src/components/typography/QuizTypography.vue'
import LastTypographySection from '/src/components/typography/LastTypographySection.vue'
</script>

<template>
  <TypographyContent />
  <TypefaceBlock />
  <SizeBlock />
  <ClassificationBlock />
  <CombinationBlock />
  <QuizTypography />
  <LastTypographySection />
</template>

<script>
export default {
  name: 'MainTypography'
}
</script>

<style scoped>
/* Стили для страницы "Композиция" */
</style>
