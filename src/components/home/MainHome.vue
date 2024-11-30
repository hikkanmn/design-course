<script setup>
import CompositionBlock from '/src/components/home/CompositionBlock.vue'
import TypographyBlock from '/src/components/home/TypographyBlock.vue'
import ColoristBlock from '/src/components/home/ColoristBlock.vue'
import AdditionalButton from '/src/components/home/AdditionalButton.vue'
</script>

<template>
  <div
    class="grid grid-cols-12 grid-rows-12 sm:grid-rows-7 gap-y-[30px] gap-x-[10px] my-28 lg:my-0 px-[135px] lg:px-[100px] md:px-[50px] sm:px-[20px] xs:mb-20"
  >
    <!-- Блок 1: Композиция -->
    <CompositionBlock />

    <!-- Блок 2: Колористика -->
    <ColoristBlock />
    <!-- <RhythmBlock /> -->

    <!-- Блок 3: Типографика -->
    <TypographyBlock />

    <!-- Кнопка: Дополнительные материалы -->
    <AdditionalButton />
  </div>
</template>

<script>
export default {
  name: 'MainHome'
}
</script>

<style scoped></style>
