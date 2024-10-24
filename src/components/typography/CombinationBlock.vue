<script setup></script>

<template>
  <div class="mr-[135px] bg-customPurple rounded-r-[100px] h-[40px]"></div>
  <div class="grid grid-cols-12 grid-rows-2 gap-y-[30px] gap-x-[10px] px-[135px] mb-20 mt-10">
    <div
      class="col-start col-end-2 row-start-1 row-end-2 group hover:bg-customOrange bg-customLime rounded-[60px] px-12 py-2 flex items-center justify-center"
    >
      <span class="font-myUnbounded font-bold text-customBlack text-[55px] group-hover:text-white"
        >4</span
      >
    </div>
    <h2
      class="col-start-3 col-end-6 row-start-1 row-end-2 self-center font-myMedium text-white text-[52px]"
    >
      сочетание
    </h2>
    <p
      class="col-start-1 col-end-13 row-start-2 row-end-3 self-center font-myUnbounded font-light text-white text-[22px]"
    >
      — это искусство использовать разные шрифты в одном проекте, чтобы создать гармоничный и
      уравновешенный визуальный образ.
    </p>
  </div>
  <div class="grid grid-cols-12 grid-rows-10 gap-y-[30px] gap-x-[10px] px-[135px] mb-20">
    <h3
      class="text-customLime col-start-1 col-end-8 row-start-1 row-end-2 font-myUnbounded self-center font-light text-[22px]"
    >
      Основные принципы сочетания шрифтов:
    </h3>
    <!-- 1st font type -->
    <p
      class="col-start-1 col-end-7 row-start-2 row-end-3 text-white text-[22px] font-myUnbounded font-light self-end"
    >
      <span class="text-customOrange">Контраст: </span>используйте шрифты с разными характеристиками
      (например, шрифт с засечками и шрифт без засечек), чтобы создать контраст и выделить элементы.
    </p>
    <div
      class="col-start-7 col-end-13 row-start-2 row-end-3 border-4 h-2/3 self-end hover:bg-white hover:bg-opacity-10 border-white rounded-r-[100px] rounded-tl-[200px] px-10 py-4 flex items-center justify-center"
    >
      <p class="text-[25px] font-myMedium text-customPurple">
        <span class="font-myComfortaa text-customLime">контраст </span>имеется?
      </p>
    </div>

    <!-- 2nd font block  -->
    <div
      class="col-start-1 col-end-6 row-start-4 row-end-5 border-4 h-2/3 self-end hover:bg-white hover:bg-opacity-10 border-white rounded-l-[100px] rounded-tr-[200px] px-10 py-4 flex items-center justify-center"
    >
      <p class="text-[25px] font-myUnbounded font-extralight text-customPurple">
        разве я <span class="font-bold">много </span>вешу?
      </p>
    </div>
    <p
      class="col-start-7 col-end-13 row-start-4 row-end-5 text-white text-[22px] font-myUnbounded font-light self-end"
    >
      <span class="text-customOrange">Иерархия: </span>ипользуйте разные размеры, веса и стили
      шрифтов, чтобы создать иерархию в тексте и выделить ключевые элементы.
    </p>

    <!-- 3rd font type -->
    <p
      class="col-start-1 col-end-7 row-start-6 row-end-7 text-white text-[22px] font-myUnbounded font-light self-end"
    >
      <span class="text-customOrange">Гармония: </span>используйте шрифты из одной гарнитуры или
      шрифты с похожими характеристиками, чтобы создать гармоничный и уравновешенный образ.
    </p>
    <div
      class="col-start-7 col-end-13 row-start-6 row-end-7 border-4 h-2/3 self-end hover:bg-white hover:bg-opacity-10 border-white rounded-r-[100px] rounded-tl-[200px] px-10 py-4 flex items-center justify-center"
    >
      <p class="text-[25px] font-myGeologica text-customLime">
        мы что,<span class="font-myUnbounded font-bold text-customPurple"> так похожи?</span>
      </p>
    </div>

    <!-- 4th font block  -->
    <div
      class="col-start-1 col-end-6 row-start-8 row-end-9 border-4 h-2/3 self-end hover:bg-white hover:bg-opacity-10 border-white rounded-l-[100px] rounded-tr-[200px] px-10 py-4 flex items-center justify-center"
    >
      <p class="text-[25px] font-myUnbounded font-bold text-customLime">легко прочитал?</p>
    </div>
    <p
      class="col-start-7 col-end-13 row-start-8 row-end-9 text-white text-[22px] font-myUnbounded font-light self-end"
    >
      <span class="text-customOrange">Читаемость: </span>убедитесь, что шрифты легко читаемы и не
      утомляют глаза.
    </p>

    <!-- text block  -->
    <div
      class="col-start-1 col-end-13 row-start-9 row-end-11 font-myUnbounded font-light text-white text-[22px] self-end"
    >
      <h3 class="text-customLime mb-10">Советы по сочетанию шрифтов:</h3>
      <p>• Используйте не более трех шрифтов в одном дизайне;</p>
      <p>• Проверьте, как шрифты выглядит в разных размерах и стилях;</p>
      <p>• Убедитесь, что шрифты сочетаются по цвету и стилю;</p>
      <p>• Протестируйте сочетание шрифтов на разных устройствах.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CombinationBlock'
}
</script>

<style scoped></style>
