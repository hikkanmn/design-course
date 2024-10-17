<template>
  <div class="mt-[70px] mb-[-150px]">
    <!-- Заголовок -->
    <div class="group w-full flex text-center flex-col">
      <h1
        class="text-[141px] uppercase font-myMedium text-white flex flex-col group-hover:text-customOrange transition-all transform duration-500 ease-in-out"
      >
        дизайн
        <span
          class="mt-[-75px] group-hover:text-customPurple transition-all duration-100 transform ease-in-out"
          >просто</span
        >
      </h1>
    </div>

    <!-- Текст "начинается с основ" -->
    <div class="flex justify-end mt-5">
      <div
        class="pl-16 py-5 border-customLime border-y-4 border-l-4 rounded-l-full text-end pr-[135px]"
      >
        <p class="text-[22px] font-myUnbounded font-medium text-white">начинается с основ</p>
      </div>
    </div>

    <!-- Основной текст и кнопка -->
    <div class="grid grid-cols-12 grid-rows-4 gap-y-[30px] gap-x-[10px] mt-10 px-[135px]">
      <!-- Текстовый блок -->
      <p
        class="font-myUnbounded font-light text-[30px] col-start-1 col-end-9 row-start-2 row-end-4 text-white leading-relaxed"
      >
        Этот сайт — пособие для студентов, решивших погрузиться в мир дизайна. Здесь ты найдешь все,
        что нужно, чтобы начать свой путь дизайнера и обучиться основам этой профессии.
      </p>

      <!-- Кнопка с стрелкой -->
      <div class="flex items-center justify-end col-start-10 col-end-13 row-start-2 row-end-4">
        <button
          class="flex items-center px-[25px] py-[15px] w-full justify-center lowercase font-myUnbounded font-medium text-[22px] bg-customOrange text-white rounded-full hover:bg-customLime hover:scale-110 hover:text-customBlack transition-all transform duration-500 ease-in-out"
        >
          начать сейчас
        </button>
      </div>
    </div>
    <div class="flex justify-end">
      <div
        class="pl-8 py-5 border-customLime border-y-4 border-l-4 rounded-l-full text-end pr-[135px]"
      >
        <p class="flex flex-col pl-8 lowercase font-myUnbounded font-medium text-[22px] text-white">
          почему дизайн тесно <span> связан с психологией?</span>
        </p>
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
