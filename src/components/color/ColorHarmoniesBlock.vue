<script setup></script>

<template>
  <div
    class="grid grid-cols-12 grid-rows-4 sm:grid-rows-3 gap-y-[30px] gap-x-[10px] px-[135px] lg:px-[100px] md:px-[50px] sm:px-[20px]"
  >
    <div
      class="col-start-1 col-end-13 row-start-1 row-end-2 z-10 bg-customPurple h-1/3 rounded-r-[60px] lg:rounded-r-[40px] md:rounded-r-[35px] sm:rounded-r-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[35px] sm:rounded-tl-[30px]"
    ></div>
    <div
      class="col-start-1 col-end-2 row-start-1 row-end-3 bg-customLime rounded-b-[100px] lg:rounded-b-[40px] md:rounded-b-[35px] sm:rounded-b-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[35px] sm:rounded-tl-[30px] flex items-end justify-center p-4"
    >
      <span
        class="font-myUnbounded font-medium text-[55px] md:text-[45px] sm:text-[35px] xs:text-[20px] text-customBlack"
        >1</span
      >
    </div>
    <div
      class="col-start-4 col-end-5 row-start-1 row-end-4 bg-customPurple rounded-b-[100px] lg:rounded-b-[40px] md:rounded-b-[35px] sm:rounded-b-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[35px] sm:rounded-tl-[30px] flex items-end justify-center p-4"
    >
      <span
        class="font-myUnbounded font-medium text-[55px] md:text-[45px] sm:text-[35px] xs:text-[20px] text-white"
        >2</span
      >
    </div>
    <div
      class="col-start-5 col-end-13 row-start-1 row-end-4 flex flex-col justify-end mt-10 sm:mt-4 sm:py-4 ml-4 py-12 gap-10 sm:gap-4"
    >
      <h2
        class="font-myMedium uppercase text-[52px] lg:text-[40px] md:text-[30px] sm:text-[20px] xs:text-[14px] text-white leading-none mb-4"
      >
        цветовые гармонии
      </h2>
      <p
        class="font-myUnbounded font-light lowercase text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[12px] text-white leading-snug"
      >
        — это принципы сочетания цветов, которые создают приятное и уравновешенное восприятие
        дизайна.
      </p>
    </div>
  </div>

  <div
    class="grid grid-cols-12 grid-rows-10 sm:grid-rows-12 gap-y-[30px] gap-x-[10px] px-[135px] lg:px-[100px] md:px-[50px] sm:px-[20px] mb-10 sm:mb-20"
  >
    <!-- 1st block  -->
    <p
      class="col-start-1 col-end-6 row-start-1 row-end-2 sm:row-end-3 font-myUnbounded font-light text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[12px] text-white self-end"
    >
      <span class="text-customOrange">Монохромная: </span> использование разных оттенков одного
      цвета
    </p>
    <div
      class="group col-start-1 col-end-6 row-start-2 row-end-4 sm:row-start-3 sm:row-end-5 border-4 hover:bg-white hover:bg-opacity-5 border-white rounded-tr-[40px] lg:rounded-tr-[30px] md:rounded-tr-[25px] sm:rounded-tr-[20px] rounded-b-[40px] lg:rounded-b-[30px] md:rounded-b-[25px] sm:rounded-b-[20px] p-16 lg:p-14 md:p-12 sm:p-6 xs:p-5 gap-12 md:gap-6 xs:gap-2 flex items-center justify-center"
    >
      <div
        class="w-[70px] aspect-square bg-customGreen group-hover:rounded-[100px] hover:scale-125"
      ></div>
      <div
        class="w-[70px] aspect-square bg-customLime group-hover:rounded-[100px] hover:scale-125"
      ></div>
      <div
        class="w-[70px] aspect-square bg-customYellow group-hover:rounded-[100px] hover:scale-125"
      ></div>
    </div>

    <!-- 2nd block  -->
    <p
      class="col-start-1 col-end-6 row-start-4 row-end-5 sm:row-start-5 sm:row-end-7 font-myUnbounded font-light text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[12px] text-white self-end"
    >
      <span class="text-customOrange">Комплементарная: </span> использование цветов, расположенных
      напротив друг друга на цветовом круге
    </p>
    <div
      class="group col-start-1 col-end-6 row-start-5 row-end-7 sm:row-start-7 sm:row-end-9 border-4 hover:bg-white hover:bg-opacity-5 border-white rounded-tr-[40px] lg:rounded-tr-[30px] md:rounded-tr-[25px] sm:rounded-tr-[20px] rounded-b-[40px] lg:rounded-b-[30px] md:rounded-b-[25px] sm:rounded-b-[20px] p-16 lg:p-14 md:p-12 sm:p-8 xs:p-7 gap-12 md:gap-8 xs:gap-2 flex items-center justify-center"
    >
      <div
        class="w-[70px] aspect-square bg-customPurple group-hover:rounded-[100px] hover:scale-125"
      ></div>
      <div
        class="w-[70px] aspect-square bg-customYellow group-hover:rounded-[100px] hover:scale-125"
      ></div>
    </div>

    <!-- 3rd block  -->
    <p
      class="col-start-7 col-end-13 row-start-1 row-end-2 sm:row-end-3 font-myUnbounded font-light text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[12px] text-white text-end pl-10 sm:pl-0 self-end"
    >
      <span class="text-customOrange">Аналоговая: </span> использование цветов, расположенных рядом
      друг с другом на цветовом круге
    </p>
    <div
      class="group col-start-7 col-end-13 row-start-2 row-end-4 sm:row-start-3 sm:row-end-5 border-4 hover:bg-white hover:bg-opacity-5 border-white rounded-tl-[40px] lg:rounded-tl-[30px] md:rounded-tl-[25px] sm:rounded-tl-[20px] rounded-b-[40px] lg:rounded-b-[30px] md:rounded-b-[25px] sm:rounded-b-[20px] p-16 lg:p-14 md:p-12 sm:p-6 xs:p-5 gap-12 md:gap-6 xs:gap-2 flex items-center justify-center"
    >
      <div
        class="w-[70px] aspect-square bg-customPurple group-hover:rounded-[100px] hover:scale-125"
      ></div>
      <div
        class="w-[70px] aspect-square bg-customPurple_o66 group-hover:rounded-[100px] hover:scale-125"
      ></div>
      <div
        class="w-[70px] aspect-square bg-customPurple_o33 group-hover:rounded-[100px] hover:scale-125"
      ></div>
    </div>

    <!-- 4th block  -->
    <p
      class="col-start-7 col-end-13 row-start-4 row-end-5 sm:row-start-5 sm:row-end-7 font-myUnbounded font-light text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[12px] text-white text-end pl-10 sm:pl-0 self-end"
    >
      <span class="text-customOrange">Триадическая: </span> использование трех цветов, расположенных
      равномерно на цветовом круге
    </p>
    <div
      class="group col-start-7 col-end-13 row-start-5 row-end-7 sm:row-start-7 sm:row-end-9 border-4 hover:bg-white hover:bg-opacity-5 border-white rounded-tl-[40px] lg:rounded-tl-[30px] md:rounded-tl-[25px] sm:rounded-tl-[20px] rounded-b-[40px] lg:rounded-b-[30px] md:rounded-b-[25px] sm:rounded-b-[20px] p-16 lg:p-14 md:p-12 sm:p-6 xs:p-5 gap-12 md:gap-6 xs:gap-2 flex items-center justify-center"
    >
      <div
        class="w-[70px] aspect-square bg-customGreen group-hover:rounded-[100px] hover:scale-125"
      ></div>
      <div
        class="w-[70px] aspect-square bg-customOrange group-hover:rounded-[100px] hover:scale-125"
      ></div>
      <div
        class="w-[70px] aspect-square bg-customPurple group-hover:rounded-[100px] hover:scale-125"
      ></div>
    </div>

    <!-- 5th block  -->
    <p
      class="col-start-7 col-end-13 row-start-7 row-end-8 sm:row-start-9 sm:row-end-11 font-myUnbounded font-light text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[12px] text-white text-end pl-10 sm:pl-4 self-end"
    >
      <span class="text-customOrange">Тетрадная: </span> использование 4х цветов, расположенных в
      форме квадрата или прямоугольника на цветовом круге
    </p>
    <div
      class="group col-start-7 col-end-13 row-start-8 row-end-10 sm:row-start-11 sm:row-end-13 border-4 hover:bg-white hover:bg-opacity-5 border-white rounded-tl-[40px] lg:rounded-tl-[30px] md:rounded-tl-[25px] sm:rounded-tl-[20px] rounded-b-[40px] lg:rounded-b-[30px] md:rounded-b-[25px] sm:rounded-b-[20px] p-16 lg:p-14 md:p-12 sm:p-6 xs:p-5 gap-12 md:gap-6 xs:gap-2 flex items-center justify-center"
    >
      <div
        class="w-[70px] aspect-square bg-customGreen group-hover:rounded-[100px] hover:scale-125"
      ></div>
      <div
        class="w-[70px] aspect-square bg-customYellow group-hover:rounded-[100px] hover:scale-125"
      ></div>
      <div
        class="w-[70px] aspect-square bg-customRed group-hover:rounded-[100px] hover:scale-125"
      ></div>
      <div
        class="w-[70px] aspect-square bg-customPurple group-hover:rounded-[100px] hover:scale-125"
      ></div>
    </div>

    <div
      class="col-start-1 col-end-6 row-start-7 row-end-11 sm:row-start-9 sm:row-end-13 font-myUnbounded font-light text-white text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[12px] space-y-7 sm:space-y-2"
    >
      <h3 class="text-customLime">Почему стоит применять цветовые гармонии?</h3>
      <p>• Они упрощают создание приятных и гармоничных цветовых сочетаний в дизайне.</p>
      <p>• Помогают при выделении ключевых элементов дизайна с помощью контрастных цветов.</p>
      <p>• Создают ощущения спокойствия или динамики в зависимости от целей дизайна.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorHarmoniesBlock'
}
</script>

<style scoped></style>
