<script setup>
import CompositionContent from '/src/components/composition/CompositionContent.vue'
import BalanceBlock from '/src/components/composition/BalanceBlock.vue'
import ContrastBlock from '/src/components/composition/ContrastBlock.vue'
import RhythmBlock from '/src/components/composition/RhythmBlock.vue'
import UnityBlock from '/src/components/composition/UnityBlock.vue'
import GoldenRatioBlock from '/src/components/composition/GoldenRatioBlock.vue'
import ThirdsRuleBlock from '/src/components/composition/ThirdsRuleBlock.vue'
import QuizComposition from '/src/components/composition/QuizComposition.vue'
import LastCompositionSection from '/src/components/composition/LastCompositionSection.vue'
</script>

<template>
  <CompositionContent />
  <BalanceBlock />
  <ContrastBlock />
  <RhythmBlock />
  <UnityBlock />
  <GoldenRatioBlock />
  <ThirdsRuleBlock />
  <QuizComposition />
  <LastCompositionSection />
</template>

<script>
export default {
  name: 'MainComposition'
}
</script>

<style scoped>
/* Стили для страницы "Композиция" */
</style>
