<script setup>
import NavigationMenu from '/src/components/NavigationMenu.vue'
import IntroSection from '/src/components/IntroSection.vue'
import FooterContacts from '/src/components/FooterContacts.vue'
import CompositionBlock from '/src/components/CompositionBlock.vue'
import TypographyBlock from '/src/components/TypographyBlock.vue'
import ColoristBlock from '/src/components/ColoristBlock.vue'
import AdditionalButton from '/src/components/AdditionalButton.vue'
</script>

<template>
  <!-- Меню навигации -->
  <NavigationMenu />

  <main class="my-0 mx-auto box-border">
    <!-- Вступительный раздел -->
    <IntroSection />
    <div>
      <div class="grid grid-cols-12 grid-rows-4 gap-y-[30px] gap-x-[10px] my-28 px-[135px]">
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

  <footer>
    <FooterContacts />
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
/* Для заголовков */
@font-face {
  font-family: 'myMedium';
  src: url('/src/font/Medium-Cyrillic.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}
/* лайт для текста */
@font-face {
  font-family: 'myUnbounded';
  src: url('/src/font/Unbounded-Light.ttf') format('truetype');
  font-weight: 300; /* Вес для light */
  font-style: normal;
}

/* регулярное для текста */
@font-face {
  font-family: 'myUnbounded';
  src: url('/src/font/Unbounded-Regular.ttf') format('truetype');
  font-weight: 400; /* Вес для regular */
  font-style: normal;
}

/* для типографики */
@font-face {
  font-family: 'mySoyuzGrotesk';
  src: url('/src/font/SoyuzGroteskBold.otf') format('opentype');
  font-weight: 400; /* Вес для regular */
  font-style: normal;
}
</style>
