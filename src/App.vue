<script setup>
import NavigationMenu from '/src/components/NavigationMenu.vue'
import FooterContacts from '/src/components/FooterContacts.vue'
</script>

<template>
  <div id="app">
    <!-- Меню навигации -->
    <NavigationMenu />
    <!-- Здесь будет отображаться контент в зависимости от маршрута -->
    <router-view />
    <!-- Футер -->
    <FooterContacts />
  </div>
</template>

<script>
export default {
  name: 'App'
}
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

/* жирное для выделений */
@font-face {
  font-family: 'myUnbounded';
  src: url('/src/font/Unbounded-Medium.ttf') format('truetype');
  font-weight: 500; /* Вес для medium */
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
