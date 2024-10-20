<script setup>
import ColorContent from '/src/components/color/ColorContent.vue'
import ColorCircleBlock from '/src/components/color/ColorCircleBlock.vue'
import ColorHarmoniesBlock from '/src/components/color/ColorHarmoniesBlock.vue'
import ColorBalanceBlock from '/src/components/color/ColorBalanceBlock.vue'
import ColorPsychologyBlock from '/src/components/color/ColorPsychologyBlock.vue'
import QuizColor from '/src/components/color/QuizColor.vue'
import LastColorSection from '/src/components/color/LastColorSection.vue'
</script>

<template>
  <ColorContent />
  <ColorCircleBlock />
  <ColorHarmoniesBlock />
  <ColorBalanceBlock />
  <ColorPsychologyBlock />
  <QuizColor />
  <LastColorSection />
</template>

<script>
export default {
  name: 'MainColor'
}
</script>

<style scoped></style>
