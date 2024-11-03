<script setup></script>

<template>
  <div
    class="grid grid-cols-12 grid-rows-9 sm:grid-rows-12 gap-y-[30px] gap-x-[10px] px-[135px] lg:px-[100px] md:px-[50px] sm:px-[20px]"
  >
    <div
      class="col-start-1 col-end-13 row-start-1 row-end-2 z-10 bg-customPurple h-1/3 rounded-r-[60px] lg:rounded-r-[40px] md:rounded-r-[40px] sm:rounded-r-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[40px] sm:rounded-tl-[30px]"
    ></div>
    <div
      class="col-start-1 col-end-2 row-start-1 row-end-4 bg-customLime rounded-b-[100px] lg:rounded-b-[40px] md:rounded-b-[40px] sm:rounded-b-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[40px] sm:rounded-tl-[30px] flex items-end justify-center p-4"
    >
      <span
        class="font-myUnbounded font-medium text-[55px] md:text-[45px] sm:text-[35px] xs:text-[20px] text-customBlack"
        >1</span
      >
    </div>
    <div
      class="col-start-2 col-end-13 row-start-2 row-end-4 flex flex-col text-start ml-4 justify-end"
    >
      <h2
        class="font-myMedium uppercase text-[52px] lg:text-[40px] md:text-[30px] sm:text-[20px] xs:text-[14px] text-white leading-none mb-6"
      >
        цветовой круг
      </h2>
      <p
        class="font-myUnbounded font-light lowercase text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[12px] text-white leading-shug"
      >
        — это инструмент, который помогает дизайнерам понимать взаимосвязи между цветами и создавать
        гармоничные цветовые сочетания.
      </p>
    </div>

    <div
      class="col-start-1 col-end-9 row-start-4 row-end-10 sm:row-end-13 font-myUnbounded font-light text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[12px] space-y-5 flex flex-col my-14"
    >
      <h3 class="text-customOrange">Основные элементы цветового круга:</h3>
      <p class="text-white">
        <span class="text-customLime">Основные цвета: </span>красный, желтый и синий.
      </p>
      <p class="text-white">
        <span class="text-customLime">Вторичные цвета: </span>получаются смешиванием двух основных
        цветов (оранжевый, зеленый, фиолетовый).
      </p>
      <p class="text-white">
        <span class="text-customLime">Третичные цвета: </span> получаются смешиванием основного и
        вторичного цветов (например, желто-оранжевый, сине-зеленый).
      </p>
      <p class="text-white">
        <span class="text-customLime">Комплементарные цвета: </span>цвета, расположенные напротив
        друг друга на цветовом круге (например, красный и зеленый, желтый и фиолетовый).
      </p>
      <p class="text-white">
        <span class="text-customLime">Аналоговые цвета: </span>цвета, расположенные рядом друг с
        другом на цветовом круге (например, желтый, желто-оранжевый, оранжевый).
      </p>
    </div>
    <img
      class="col-start-9 col-end-13 row-start-4 row-end-10 sm:row-end-13 self-end h-full"
      src="/src/img/color_circle.svg"
      alt="Ошибка загрузки изображения! Попробуйте перезагрузить страницу"
    />
  </div>
</template>

<script>
export default {
  name: 'ColorCircleBlock'
}
</script>

<style scoped></style>
