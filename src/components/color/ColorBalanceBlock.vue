<script setup></script>

<template>
  <div class="grid grid-cols-12 grid-rows-12 gap-y-[30px] gap-x-[10px] px-[135px] mb-20">
    <div
      class="col-start-1 col-end-13 row-start-1 row-end-2 z-10 bg-customPurple h-1/3 rounded-r-[60px] rounded-tl-[60px]"
    ></div>
    <div
      class="col-start-1 col-end-2 row-start-1 row-end-3 bg-customLime rounded-b-[100px] rounded-tl-[60px] flex items-end justify-center p-4"
    >
      <span class="font-myUnbounded font-medium text-[55px] text-customBlack">1</span>
    </div>
    <div
      class="col-start-4 col-end-5 row-start-1 row-end-4 bg-customPurple rounded-b-[100px] rounded-tl-[60px] flex items-end justify-center p-4"
    >
      <span class="font-myUnbounded font-medium text-[55px] text-white">2</span>
    </div>
    <div
      class="col-start-7 col-end-8 row-start-1 row-end-5 bg-customLime rounded-b-[100px] rounded-tl-[60px] flex items-end justify-center p-4"
    >
      <span class="font-myUnbounded font-medium text-[55px] text-customBlack">3</span>
    </div>
    <div
      class="col-start-8 col-end-13 row-start-2 row-end-5 flex flex-col text-start ml-4 py-12 gap-10"
    >
      <h2 class="font-myMedium uppercase text-[52px] text-white leading-none mb-4">
        цветовой баланс
      </h2>
      <p class="font-myUnbounded font-light lowercase text-[22px] text-white leading-snug">
        — это гармоничное сочетание цветов, которое создает приятное и уравновешенное восприятие
        дизайна.
      </p>
    </div>

    <h3
      class="col-start-1 col-end-13 row-start-5 row-end-6 text-[22px] text-customLime font-myUnbounded font-light self-center"
    >
      Основные аспекты цветового баланса:
    </h3>

    <!-- 1st block  -->
    <p
      class="col-start-1 col-end-7 row-start-6 row-end-7 text-[22px] font-myUnbounded font-light text-white"
    >
      Сочетание темных и светлых тонов цвета создает контраст и делает дизайн более привлекательным
      и интересным.
    </p>
    <div
      class="col-start-9 col-end-11 row-start-6 row-end-7 rounded-[30px] bg-customLightPurple"
    ></div>
    <div class="col-start-11 col-end-13 row-start-6 row-end-7 rounded-[30px] bg-customPurple"></div>
    <div class="col-start-4 col-end-13 row-start-7 row-end-8 border-t-4 border-t-white"></div>

    <!-- 2nd block  -->
    <div
      class="col-start-1 col-end-2 row-start-8 row-end-9 rounded-[30px] bg-customOrange aspect-square"
    ></div>
    <div
      class="col-start-2 col-end-3 row-start-8 row-end-9 rounded-[30px] bg-customRed aspect-square"
    ></div>
    <div
      class="col-start-3 col-end-4 row-start-8 row-end-9 rounded-[30px] bg-customBlue aspect-square"
    ></div>
    <div
      class="col-start-4 col-end-5 row-start-8 row-end-9 rounded-[30px] bg-customPurple aspect-square"
    ></div>
    <p
      class="col-start-6 col-end-13 row-start-8 row-end-9 text-[22px] font-myUnbounded font-light text-white"
    >
      Сочетание теплых (красные, желтые, оранжевые) и холодных (синие, зеленые, фиолетовые) тонов
      цвета создает гармонию и глубину.
    </p>
    <div class="col-start-4 col-end-13 row-start-9 row-end-10 border-t-4 border-t-white"></div>

    <!-- 3rd block  -->
    <p
      class="col-start-1 col-end-8 row-start-10 row-end-11 text-[22px] font-myUnbounded font-light text-white"
    >
      Доминирующий цвет: выбор доминирующего цвета (например, фона) и использование других цветов
      как акцентов создает ощущение баланса.
    </p>
    <div
      class="col-start-9 col-end-10 row-start-10 row-end-11 rounded-[30px] bg-customPurple aspect-square"
    ></div>
    <div
      class="col-start-10 col-end-11 row-start-10 row-end-11 rounded-[30px] bg-customLime aspect-square"
    ></div>
    <div
      class="col-start-11 col-end-13 row-start-10 row-end-11 rounded-[30px] bg-customPurple h-[85%]"
    ></div>
    <div class="col-start-4 col-end-13 row-start-11 row-end-12 border-t-4 border-t-white"></div>

    <!-- final block  -->
    <div
      class="col-start-1 col-end-13 row-start-11 row-end-13 flex flex-col justify-end text-white text-[22px] font-myUnbounded font-light"
    >
      <h3 class="text-customLime mb-4">Цветовой баланс важен для:</h3>
      <p>• Выделения ключевых элементов дизайна.</p>
      <p>• Создания приятного и гармоничного восприятия дизайна.</p>
      <p>• Создание ощущения спокойствия или динамики в зависимости от целей дизайна.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorBalanceBlock'
}
</script>

<style scoped></style>
