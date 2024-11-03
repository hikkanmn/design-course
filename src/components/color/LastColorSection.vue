<script setup></script>

<template>
  <div
    class="grid grid-cols-12 grid-rows-7 sm:grid-rows-8 gap-y-[30px] gap-x-[10px] px-[135px] lg:px-[100px] md:px-[50px] sm:px-[20px] mb-20"
  >
    <div
      class="col-start-1 col-end-13 row-start-1 row-end-2 z-10 bg-customLime h-1/3  rounded-r-[60px] rounded-tl-[60px]"
    ></div>
    <div
      class="col-start-1 col-end-2 row-start-1 row-end-8 sm:row-end-9 bg-customLime rounded-b-[100px] rounded-tl-[60px] flex items-end justify-center p-4"
    ></div>
    <div
      class="col-start-4 col-end-5 row-start-1 row-end-6 bg-customPurple rounded-b-[100px] rounded-tl-[60px] flex items-end justify-center p-4"
    ></div>
    <div
      class="col-start-7 col-end-8 row-start-1 row-end-5 bg-customLime rounded-b-[100px] rounded-tl-[60px] flex items-end justify-center p-4"
    ></div>
    <div
      class="col-start-10 col-end-11 row-start-1 row-end-4 bg-customPurple rounded-b-[100px] rounded-tl-[60px] flex items-end justify-center p-4"
    ></div>
    <img
      class="col-start-10 col-end-11 row-start-4 row-end-5"
      src="/src/img/decoration_star.svg"
      alt="Ошибка загрузки изображения! Попробуйте перезагрузить страницу"
    />
    <h2
      class="col-start-7 col-end-13 row-start-5 row-end-6 font-myMedium uppercase text-[45px] lg:text-[30px] md:text-[25px] sm:text-[20px] xs:text-[14px] md:flex text-white leading-none mb-4"
    >
      колористика
    </h2>
    <p
      class="col-start-3 col-end-13 row-start-6 row-end-7 sm:row-end-8 font-myUnbounded font-light lowercase text-[22px] lg:text-[18px] sm:text-[16px] xs:text-[12px] text-white leading-snug"
    >
      — это не про случайный выбор красивых цветов. Это глубокая и многогранная дисциплина, которая
      требует понимания психологии цвета, цветовых гармоний и принципов баланса.
    </p>

    <div class="border-b-4 border-b-white col-start-3 col-end-13 row-start-7 row-end-8 sm:row-end-9"></div>
  </div>
</template>

<script>
export default {
  name: 'LastColorSection'
}
</script>

<style scoped></style>
