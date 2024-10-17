<script setup>
import IntroSection from '/src/components/IntroSection.vue'
import FooterContacts from '/src/components/FooterContacts.vue'
import CompositionBlock from '/src/components/CompositionBlock.vue'
import TypographyBlock from '/src/components/TypographyBlock.vue'
import ColoristBlock from '/src/components/ColoristBlock.vue'
import AdditionalButton from '/src/components/AdditionalButton.vue'
</script>

<template>
  <div>
    <!-- Основной контент -->
    <main class="my-0 mx-auto box-border">
      <!-- Вступительный раздел -->
      <IntroSection />
      <div>
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
      </div>
    </main>

    <!-- Футер -->
    <footer>
      <FooterContacts />
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
/* Стили для страницы "Композиция" */
</style>
