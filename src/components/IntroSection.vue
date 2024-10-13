<template>
  <div>
    <!-- Заголовок -->
    <div class="w-full flex text-center flex-col">
      <h1 class="text-[141px] uppercase font-myMedium text-white flex flex-col">
        дизайн <span class="mt-[-75px]">просто</span>
      </h1>
    </div>

    <!-- Текст "начинается с основ" -->
    <div class="flex mt-5 ml-[730px] px-10 py-5 border-customLime border-y-4 border-l-4 rounded-l-full">
      <p class="text-[35px] font-myUnbounded font-light text-white">начинается с основ</p>
    </div>

    <!-- Основной текст и кнопка -->
    <div class="grid grid-cols-12 grid-rows-4 gap-y-[30px] gap-x-[10px] mt-20 px-[135px]">
      <!-- Текстовый блок -->
      <p class="font-myUnbounded font-regular text-[35px] col-start-1 col-end-8 row-start-2 row-end-4 text-white text-lg leading-relaxed">
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
  </div>
</template>

<script>
export default {
  name: 'IntroSection'
}
</script>

<style scoped>
/* Можно добавить дополнительные стили, если нужно */
</style>