<script setup></script>

<template>
  <!-- Текст "начинается с основ" -->
  <div class="grid grid-cols-12 grid-rows-6 gap-0 mb-20">
    <div class="col-start-1 col-end-3 row-start-1 row-end-2 bg-customPurple w-full h-[150px]"></div>
    <div class="col-start-5 col-end-13 row-start-1 row-end-2 border-t-4 border-white"></div>
    <div
      class="col-start-3 col-end-4 row-start-1 row-end-3 bg-customPurple w-full h-full rounded-tr-[60px] rounded-bl-[60px]"
    ></div>
    <div class="col-start-2 col-end-3 row-start-2 row-end-3 flex items-center">
      <img
        src="/src/img/decoration_star.svg"
        alt="Ошибка загрузки изображения! Попробуйте перезагрузить страницу"
        class="w-[60px] h-[60px]"
      />
    </div>
    <div class="col-start-4 col-end-7 row-start-2 row-end-3 bg-customPurple w-full h-full"></div>
    <div class="col-start-2 col-end-7 row-start-3 row-end-4 flex items-end">
      <p class="font-myMedium uppercase text-[44px] text-customLime">композиция</p>
    </div>
    <div class="col-start-2 col-end-10 row-start-4 row-end-7 flex items-center pr-10">
      <p class="text-white font-myUnbounded font-light text-[25px]">
        — это не просто случайное расположение элементов на странице. Это искусство, которое
        помогает создать гармоничный, уравновешенный и привлекательный дизайн, который будет
        эффективно передавать информацию и вызывать желаемые эмоции.
      </p>
    </div>
    <div
      class="col-start-7 col-end-8 row-start-2 row-end-4 bg-customPurple w-full h-full rounded-tr-[60px] rounded-bl-[60px]"
    ></div>
    <div class="col-start-8 col-end-10 row-start-3 row-end-4 bg-customPurple w-full h-full"></div>
    <div
      class="col-start-10 col-end-11 row-start-3 row-end-7 bg-customPurple w-full h-full rounded-tr-[60px] rounded-bl-[60px]"
    ></div>
    <div class="col-start-11 col-end-13 row-start-4 row-end-5 bg-customPurple w-full h-full"></div>
    <div class="col-start-11 col-end-13 row-start-6 row-end-7 bg-customPurple w-full h-full"></div>
    <div class="col-start-1 col-end-9 row-start-6 row-end-7 border-b-4 border-white"></div>
  </div>
</template>

<script>
export default {
  name: 'LastCompositionSection'
}
</script>

<style scoped>
/* Стили для страницы "Композиция" */
</style>
