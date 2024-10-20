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

/* экстралайт для текста */
@font-face {
  font-family: 'myUnbounded';
  src: url('/src/font/Unbounded-ExtraLight.ttf') format('truetype');
  font-weight: 200; /* Вес для extralight */
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

/* полужирное для выделений */
@font-face {
  font-family: 'myUnbounded';
  src: url('/src/font/Unbounded-Medium.ttf') format('truetype');
  font-weight: 500; /* Вес для medium */
  font-style: normal;
}

/* жирное для выделений */
@font-face {
  font-family: 'myUnbounded';
  src: url('/src/font/Unbounded-Bold.ttf') format('truetype');
  font-weight: 600; /* Вес для bold */
  font-style: normal;
}

/* жирное для выделений */
@font-face {
  font-family: 'myUnbounded';
  src: url('/src/font/Unbounded-Black.ttf') format('truetype');
  font-weight: 900; /* Вес для black */
  font-style: normal;
}

/* для типографики */
@font-face {
  font-family: 'mySoyuzGrotesk';
  src: url('/src/font/SoyuzGroteskBold.otf') format('opentype');
  font-weight: 600; /* Вес для bold */
  font-style: normal;
}

/* для типографики */
@font-face {
  font-family: 'myPlayfairDisplay';
  src: url('/src/font/PlayfairDisplay-Medium.ttf') format('truetype');
  font-weight: 500; /* Вес для medium */
  font-style: normal;
}

/* для типографики */
@font-face {
  font-family: 'myPacifico';
  src: url('/src/font/Pacifico-Regular.ttf') format('truetype');
  font-weight: 400; /* Вес для regular */
  font-style: normal;
}

/* для типографики */
@font-face {
  font-family: 'myIBMPlexMono';
  src: url('/src/font/IBMPlexMono-Medium.ttf') format('truetype');
  font-weight: 400; /* Вес для regular */
  font-style: normal;
}

/* для типографики */
@font-face {
  font-family: 'myCaveat';
  src: url('/src/font/Caveat-VariableFont_wght.ttf') format('truetype');
  font-weight: 400; /* Вес для regular */
  font-style: normal;
}

/* для типографики */
@font-face {
  font-family: 'myJost';
  src: url('/src/font/Jost-Black.ttf') format('truetype');
  font-weight: 900; /* Вес для black */
  font-style: normal;
}

/* для типографики */
@font-face {
  font-family: 'myJost';
  src: url('/src/font/Jost-BlackItalic.ttf') format('truetype');
  font-weight: 900; /* Вес для blackitalic */
  font-style: normal;
}

/* для типографики */
@font-face {
  font-family: 'myJost';
  src: url('/src/font/Jost-ExtraLight.ttf') format('truetype');
  font-weight: 200; /* Вес для extralight */
  font-style: normal;
}

/* для типографики */
@font-face {
  font-family: 'myJost';
  src: url('/src/font/Jost-Italic.ttf') format('truetype');
  font-weight: 400; /* Вес для italic */
  font-style: normal;
}

/* для типографики */
@font-face {
  font-family: 'myJost';
  src: url('/src/font/Jost-Regular.ttf') format('truetype');
  font-weight: 400; /* Вес для regular */
  font-style: normal;
}

/* для типографики */
@font-face {
  font-family: 'myJost';
  src: url('/src/font/Jost-SemiBold.ttf') format('truetype');
  font-weight: 600; /* Вес для semobold */
  font-style: normal;
}

/* для типографики */
@font-face {
  font-family: 'myPhudu';
  src: url('/src/font/Phudu-Medium.ttf') format('truetype');
  font-weight: 500; /* Вес для medium */
  font-style: normal;
}

/* для типографики */
@font-face {
  font-family: 'mySoledago';
  src: url('/src/font/Soledago.ttf') format('truetype');
  font-weight: 400; /* Вес для regular */
  font-style: normal;
}

/* для типографики */
@font-face {
  font-family: 'myAlice';
  src: url('/src/font/Alice-Regular.ttf') format('truetype');
  font-weight: 400; /* Вес для regular */
  font-style: normal;
}

/* для типографики */
@font-face {
  font-family: 'myVollkornSC';
  src: url('/src/font/VollkornSC-Regular.ttf') format('truetype');
  font-weight: 400; /* Вес для regular */
  font-style: normal;
}

/* для типографики */
@font-face {
  font-family: 'myBravoSC';
  src: url('/src/font/bravosc.ttf') format('truetype');
  font-weight: 400; /* Вес для regular */
  font-style: normal;
}

/* для типографики */
@font-face {
  font-family: 'myStampatelloFaceto';
  src: url('/src/font/StampatelloFaceto.otf') format('opentype');
  font-weight: 400; /* Вес для regular */
  font-style: normal;
}

/* для типографики */
@font-face {
  font-family: 'myComfortaa';
  src: url('/src/font/Comfortaa-Bold.ttf') format('truetype');
  font-weight: 600; /* Вес для bold */
  font-style: normal;
}

/* для типографики */
@font-face {
  font-family: 'myGeologica';
  src: url('/src/font/Geologica-Bold.ttf') format('truetype');
  font-weight: 600; /* Вес для bold */
  font-style: normal;
}
</style>
