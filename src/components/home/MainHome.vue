<script setup>
import CompositionBlock from '/src/components/home/CompositionBlock.vue'
import TypographyBlock from '/src/components/home/TypographyBlock.vue'
import ColoristBlock from '/src/components/home/ColoristBlock.vue'
import AdditionalButton from '/src/components/home/AdditionalButton.vue'
</script>

<template>
  <div class="grid grid-cols-12 grid-rows-11 gap-y-[30px] gap-x-[10px] my-28 px-[135px]">
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
