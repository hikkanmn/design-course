<script setup></script>

<template>
  <div class="grid grid-cols-12 grid-rows-4 gap-y-[30px] gap-x-[10px] px-[135px]">
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
      class="col-start-5 col-end-13 row-start-1 row-end-4 flex flex-col justify-end mt-10 ml-4 py-12 gap-10"
    >
      <h2 class="font-myMedium uppercase text-[52px] text-white leading-none mb-4">
        цветовые гармонии
      </h2>
      <p class="font-myUnbounded font-light lowercase text-[22px] text-white leading-snug">
        — это принципы сочетания цветов, которые создают приятное и уравновешенное восприятие
        дизайна.
      </p>
    </div>
  </div>

  <div class="grid grid-cols-12 grid-rows-10 gap-y-[30px] gap-x-[10px] px-[135px] mb-10">
    <!-- 1st block  -->
    <p
      class="col-start-1 col-end-6 row-start-1 row-end-2 font-myUnbounded font-light text-[22px] text-white"
    >
      <span class="text-customOrange">Монохромная: </span> использование разных оттенков одного
      цвета
    </p>
    <div
      class="group col-start-1 col-end-6 row-start-2 row-end-4 border-4 hover:bg-white hover:bg-opacity-5 border-white rounded-tr-[40px] rounded-b-[40px] py-14 gap-12 flex items-center justify-center"
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
      class="col-start-1 col-end-6 row-start-4 row-end-5 font-myUnbounded font-light text-[22px] text-white"
    >
      <span class="text-customOrange">Комплементарная: </span> использование цветов, расположенных
      напротив друг друга на цветовом круге
    </p>
    <div
      class="group col-start-1 col-end-6 row-start-5 row-end-7 border-4 hover:bg-white hover:bg-opacity-5 border-white rounded-tr-[40px] rounded-b-[40px] py-14 gap-12 flex items-center justify-center"
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
      class="col-start-7 col-end-13 row-start-1 row-end-2 font-myUnbounded font-light text-[22px] text-white text-end pl-10"
    >
      <span class="text-customOrange">Аналоговая: </span> использование цветов, расположенных рядом
      друг с другом на цветовом круге
    </p>
    <div
      class="group col-start-7 col-end-13 row-start-2 row-end-4 border-4 hover:bg-white hover:bg-opacity-5 border-white rounded-tl-[40px] rounded-b-[40px] py-14 gap-12 flex items-center justify-center"
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
      class="col-start-7 col-end-13 row-start-4 row-end-5 font-myUnbounded font-light text-[22px] text-white text-end pl-10"
    >
      <span class="text-customOrange">Триадическая: </span> использование трех цветов, расположенных
      равномерно на цветовом круге
    </p>
    <div
      class="group col-start-7 col-end-13 row-start-5 row-end-7 border-4 hover:bg-white hover:bg-opacity-5 border-white rounded-tl-[40px] rounded-b-[40px] py-14 gap-12 flex items-center justify-center"
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
      class="col-start-7 col-end-13 row-start-7 row-end-8 font-myUnbounded font-light text-[22px] text-white text-end pl-10"
    >
      <span class="text-customOrange">Тетрадная: </span> использование 4х цветов, расположенных в
      форме квадрата или прямоугольника на цветовом круге
    </p>
    <div
      class="group col-start-7 col-end-13 row-start-8 row-end-10 border-4 hover:bg-white hover:bg-opacity-5 border-white rounded-tl-[40px] rounded-b-[40px] py-14 gap-12 flex items-center justify-center"
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
      class="col-start-1 col-end-6 row-start-7 row-end-11 font-myUnbounded font-light text-white text-[22px] space-y-7"
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
