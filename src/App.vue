<script setup>
import MenuLink from '/src/components/MenuLink.vue'
import FooterContacts from '/src/components/FooterContacts.vue'
import CompositionBlock from '/src/components/CompositionBlock.vue'
import RhythmBlock from '/src/components/RhythmBlock.vue'
import TypographyBlock from '/src/components/TypographyBlock.vue'
import ColoristBlock from '/src/components/ColoristBlock.vue'
import AdditionalButton from '/src/components/AdditionalButton.vue'
</script>

<template>
  <header class="flex justify-center">
    <!-- <p class="textMain text-4xl text-purple-600">Oh gosh poor little meow meows</p> -->
    <!-- Меню навигации -->
    <nav class="px-[135px] py-[50px] w-full">
      <div class="flex justify-between items-center">
        <MenuLink
          text="главная страница"
          class="bg-customPurple text-white hover:bg-customLime hover:text-customBlack transition-all duration-300"
        />
        <div class="space-x-[28px]">
          <MenuLink
            text="разделы курса"
            class="bg-customLime text-customBlack hover:bg-customOrange hover:text-white transition-all duration-300"
          />
          <MenuLink
            text="ресурсы"
            class="bg-customLime text-customBlack hover:bg-customOrange hover:text-white transition-all duration-300"
          />
          <MenuLink
            text="галерея"
            class="bg-customLime text-customBlack hover:bg-customOrange hover:text-white transition-all duration-300"
          />
          <MenuLink
            text="контакты"
            class="bg-customLime text-customBlack hover:bg-customOrange hover:text-white transition-all duration-300"
          />
        </div>
      </div>
    </nav>
  </header>

  <main class="my-0 mx-auto box-border">
    <div class="w-full flex text-center flex-col">
      <!-- <svg></svg> -->
      <h1 class="text-[141px] font-myMedium text-white flex flex-col">
        ДИЗАЙН <span>ПРОСТО</span>
      </h1>
      <!-- <span class="text-customPurple">*</span> -->
    </div>
    <div
      class="flex mt-5 ml-[730px] px-10 py-5 border-customLime border-y-4 border-l-4 rounded-l-full"
    >
      <p class="text-[35px] font-myUnbounded font-light text-customLime">начинается с основ</p>
    </div>

    <div class="grid grid-cols-12 grid-rows-4 gap-y-[30px] gap-x-[10px] mt-12 px-[135px]">
      <!-- Текстовый блок -->
      <p
        class="font-myUnbounded font-regular text-[35px] col-start-1 col-end-8 row-start-2 row-end-4 text-white text-lg leading-relaxed"
      >
        Этот сайт — пособие для студентов, решивших погрузиться в мир дизайна. Здесь ты найдешь все,
        что нужно, чтобы начать свой путь дизайнера и обучиться основам этой профессии.
      </p>

      <!-- Кнопка с стрелкой -->
      <div class="flex items-center justify-end col-start-9 col-end-13 row-start-2 row-end-4">
        <button
          class="flex items-center px-[25px] py-[15px] lowercase font-myUnbounded font-regular text-[30px] bg-customOrange text-white p-3 rounded-full hover:bg-customLime hover:text-customBlack transition-all duration-300"
        >
          начать сейчас
        </button>
      </div>
    </div>

    <!-- .  -->
    <div>
      <div class="grid grid-cols-12 grid-rows-4 gap-y-[30px] gap-x-[10px] mt-12 px-[135px]">
        <!-- Блок 1: Композиция -->
        <CompositionBlock />

        <!-- Блок 2: Ритм -->
        <RhythmBlock />

        <!-- Блок 3: Типографика -->
        <TypographyBlock />

        <!-- Кнопка: Дополнительные материалы -->
        <AdditionalButton />

        <!-- Блок 4: Колористика -->
        <ColoristBlock />
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
