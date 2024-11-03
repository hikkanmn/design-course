<script setup></script>

<template>
  <div
    class="grid grid-cols-12 grid-rows-12 gap-y-[30px] gap-x-[10px] px-[135px] lg:px-[100px] md:px-[50px] sm:px-[20px] mb-20"
  >
    <div
      class="col-start-1 col-end-13 row-start-1 row-end-2 z-10 bg-customPurple h-1/3 rounded-r-[60px] lg:rounded-r-[40px] md:rounded-r-[35px] sm:rounded-r-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[35px] sm:rounded-tl-[30px]"
    ></div>
    <div
      class="col-start-1 col-end-2 row-start-1 row-end-3 bg-customLime sm:h-3/4 rounded-b-[100px] lg:rounded-b-[40px] md:rounded-b-[35px] sm:rounded-b-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[35px] sm:rounded-tl-[30px] flex items-end justify-center p-4"
    >
      <span
        class="font-myUnbounded font-medium text-[55px] md:text-[45px] sm:text-[35px] xs:text-[20px] text-customBlack"
        >1</span
      >
    </div>
    <div
      class="col-start-4 col-end-5 row-start-1 row-end-4 bg-customPurple sm:h-3/4 rounded-b-[100px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[35px] sm:rounded-tl-[30px] flex items-end justify-center p-4"
    >
      <span
        class="font-myUnbounded font-medium text-[55px] md:text-[45px] sm:text-[35px] xs:text-[20px] text-white"
        >2</span
      >
    </div>
    <div
      class="col-start-7 col-end-8 row-start-1 row-end-5 bg-customLime sm:h-3/4 rounded-b-[100px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[35px] sm:rounded-tl-[30px] flex items-end justify-center p-4"
    >
      <span
        class="font-myUnbounded font-medium text-[55px] md:text-[45px] sm:text-[35px] xs:text-[20px] text-customBlack"
        >3</span
      >
    </div>
    <div
      class="col-start-8 col-end-13 row-start-2 row-end-5 sm:row-start-1 flex flex-col text-start ml-4 py-12 gap-10 sm:gap-4"
    >
      <h2
        class="font-myMedium uppercase text-[52px] lg:text-[40px] md:text-[30px] sm:text-[20px] xs:text-[12px] text-white leading-none mb-4"
      >
        цветовой баланс
      </h2>
      <p
        class="font-myUnbounded font-light lowercase text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[10px] text-white leading-snug"
      >
        — это гармоничное сочетание цветов, которое создает приятное и уравновешенное восприятие
        дизайна.
      </p>
    </div>

    <h3
      class="col-start-1 col-end-13 row-start-5 row-end-6 sm:row-start-4 sm:row-end-5 text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[12px] text-customLime font-myUnbounded font-light self-center sm:self-end"
    >
      Основные аспекты цветового баланса:
    </h3>

    <!-- 1st block  -->
    <p
      class="col-start-1 col-end-7 row-start-6 row-end-7 sm:row-start-5 sm:col-end-8 text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[12px] font-myUnbounded font-light text-white self-center"
    >
      Сочетание темных и светлых тонов цвета создает контраст и делает дизайн более привлекательным
      и интересным.
    </p>
    <div
      class="col-start-9 col-end-11 row-start-6 row-end-7 sm:row-start-5 rounded-[30px] lg:rounded-[25px] md:rounded-[20px] sm:rounded-[15px] bg-customLightPurple border-4 border-customLightPurple hover:bg-opacity-20"
    ></div>
    <div
      class="col-start-11 col-end-13 row-start-6 row-end-7 sm:row-start-5 rounded-[30px] lg:rounded-[25px] md:rounded-[20px] sm:rounded-[15px] bg-customPurple border-4 border-customPurple hover:bg-opacity-20"
    ></div>
    <div
      class="col-start-4 col-end-13 row-start-7 row-end-8 border-t-4 border-t-white sm:border-t-0"
    ></div>

    <!-- 2nd block  -->
    <div
      class="col-start-1 col-end-2 row-start-8 row-end-9 sm:row-start-7 rounded-[30px] lg:rounded-[25px] md:rounded-[20px] sm:rounded-[15px] bg-customOrange aspect-square sm:aspect-auto sm:h-full border-4 border-customOrange hover:bg-opacity-20"
    ></div>
    <div
      class="col-start-2 col-end-3 row-start-8 row-end-9 sm:row-start-7 rounded-[30px] lg:rounded-[25px] md:rounded-[20px] sm:rounded-[15px] bg-customRed aspect-square sm:aspect-auto sm:h-full border-4 border-customRed hover:bg-opacity-20"
    ></div>
    <div
      class="col-start-3 col-end-4 row-start-8 row-end-9 sm:row-start-7 rounded-[30px] lg:rounded-[25px] md:rounded-[20px] sm:rounded-[15px] bg-customBlue aspect-square sm:aspect-auto sm:h-full border-4 border-customBlue hover:bg-opacity-20"
    ></div>
    <div
      class="col-start-4 col-end-5 row-start-8 row-end-9 sm:row-start-7 rounded-[30px] lg:rounded-[25px] md:rounded-[20px] sm:rounded-[15px] bg-customPurple aspect-square sm:aspect-auto sm:h-full border-4 border-customPurple hover:bg-opacity-20"
    ></div>
    <p
      class="col-start-6 col-end-13 row-start-8 row-end-9 sm:row-start-7 text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[12px] font-myUnbounded font-light text-white self-center"
    >
      Сочетание теплых (красные, желтые, оранжевые) и холодных (синие, зеленые, фиолетовые) тонов
      цвета создает гармонию и глубину.
    </p>
    <div
      class="col-start-4 col-end-13 row-start-9 row-end-10 border-t-4 border-t-white sm:border-t-0"
    ></div>

    <!-- 3rd block  -->
    <p
      class="col-start-1 col-end-8 row-start-10 row-end-11 sm:row-start-9 text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[12px] font-myUnbounded font-light text-white self-center"
    >
      Доминирующий цвет: выбор доминирующего цвета (например, фона) и использование других цветов
      как акцентов создает ощущение баланса.
    </p>
    <div
      class="col-start-9 col-end-10 row-start-10 row-end-11 sm:row-start-9 rounded-[30px] lg:rounded-[25px] md:rounded-[20px] sm:rounded-[15px] bg-customPurple aspect-square sm:aspect-auto sm:h-full border-4 border-customPurple hover:bg-opacity-20"
    ></div>
    <div
      class="col-start-10 col-end-11 row-start-10 row-end-11 sm:row-start-9 rounded-[30px] lg:rounded-[25px] md:rounded-[20px] sm:rounded-[15px] bg-customLime aspect-square sm:aspect-auto sm:h-full border-4 border-customLime hover:bg-opacity-20"
    ></div>
    <div
      class="col-start-11 col-end-13 row-start-10 row-end-11 sm:row-start-9 rounded-[30px] lg:rounded-[25px] md:rounded-[20px] sm:rounded-[15px] bg-customPurple h-[85%] sm:h-full border-4 border-customPurple hover:bg-opacity-20"
    ></div>
    <div
      class="col-start-4 col-end-13 row-start-11 row-end-12 border-t-4 border-t-white sm:border-t-0"
    ></div>

    <!-- final block  -->
    <div
      class="col-start-1 col-end-13 row-start-11 row-end-13 flex flex-col justify-end text-white text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[12px] font-myUnbounded font-light"
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
