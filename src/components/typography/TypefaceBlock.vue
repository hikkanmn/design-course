<script setup></script>

<template>
  <div class="mr-[135px] bg-customPurple rounded-r-[100px] h-[40px]"></div>
  <div class="grid grid-cols-12 grid-rows-9 gap-y-[30px] gap-x-[10px] px-[135px] pt-10 mb-20">
    <div
      class="col-start col-end-2 row-start-1 row-end-2 bg-customLime rounded-[60px] px-12 py-2 flex items-center justify-center"
    >
      <span class="font-myUnbounded font-bold text-customBlack text-[55px]">1</span>
    </div>
    <h2
      class="col-start-3 col-end-8 row-start-1 row-end-2 self-center font-myMedium text-white text-[52px]"
    >
      гарнитура
    </h2>
    <p
      class="col-start-3 col-end-13 row-start-2 row-end-3 self-center font-myUnbounded font-light text-white text-[22px]"
    >
      — это полный набор шрифтов с одинаковым начертанием, но с разными весами и стилями.
    </p>
    <p
      class="group col-start-1 col-end-8 row-start-3 row-end-8 font-myMedium flex flex-col justify-center"
    >
      <span class="text-[64px] leading-3 text-customPurple_o66 group-hover:text-customPurple"
        >начертания</span
      >
      <span class="text-[83px] text-customPurple group-hover:text-customPurple_o66">очень</span>
      <span class="text-[116px] leading-10 text-customPurple group-hover:text-customPurple_o66"
        >важны</span
      >
      <span class="text-[64px] leading-relaxed text-customPurple_o66 group-hover:text-customPurple"
        >для</span
      >
      <span class="text-[64px] leading-6 text-customPurple_o66 group-hover:text-customPurple"
        >восприятия</span
      >
      <span class="text-[60px] text-customPurple group-hover:text-customPurple_o66"
        >информации</span
      >
    </p>

    <div
      class="col-start-1 col-end-8 row-start-7 row-end-10 font-myUnbounded font-light text-white text-[22px] self-end"
    >
      <h3 class="text-customLime mb-10">Преимущества использования гарнитур:</h3>
      <p>• Обеспечивает единый стиль и узнаваемость текста в дизайне;</p>
      <p>
        • Позволяет использовать разные веса и стили шрифта для выделения важных элементов текста;
      </p>
      <p>• Создает гармоничное и уравновешенное восприятие текста в композиции.</p>
    </div>
    <p
      class="col-start-9 col-end-13 row-start-3 row-end-4 font-myUnbounded font-light text-customLime text-[22px] self-end"
    >
      В гарнитуру входят:
    </p>
    <div
      class="col-start-9 col-end-13 row-start-4 row-end-5 border-4 border-customPurple rounded-l-[60px] rounded-tr-[60px] flex items-center justify-end px-10"
    >
      <p class="text-white text-[25px] font-myJost font-regular">стандартное начертание</p>
    </div>
    <div
      class="col-start-9 col-end-13 row-start-5 row-end-6 border-4 border-customLime rounded-l-[60px] rounded-tr-[60px] flex items-center justify-end px-10"
    >
      <p class="text-white text-[25px] font-myJost font-extralight">тонкое начертание</p>
    </div>
    <div
      class="col-start-9 col-end-13 row-start-6 row-end-7 border-4 border-customPurple rounded-l-[60px] rounded-tr-[60px] flex items-center justify-end px-10"
    >
      <p class="text-white text-[25px] font-myJost font-semibold">полужирное начертание</p>
    </div>
    <div
      class="col-start-9 col-end-13 row-start-7 row-end-8 border-4 border-customLime rounded-l-[60px] rounded-tr-[60px] flex items-center justify-end px-10"
    >
      <p class="text-white text-[25px] font-myJost font-black">жирное начертание</p>
    </div>
    <div
      class="col-start-9 col-end-13 row-start-8 row-end-9 border-4 border-customPurple rounded-l-[60px] rounded-tr-[60px] flex items-center justify-end px-10"
    >
      <p class="text-white text-[25px] font-myJost italic">курсивное начертание</p>
    </div>
    <div
      class="col-start-9 col-end-13 row-start-9 row-end-10 border-4 border-customLime rounded-l-[60px] rounded-tr-[60px] flex items-center justify-end px-10"
    >
      <p class="text-white text-[25px] font-myJost font-black italic">курсивно-жирное</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TypefaceBlock'
}
</script>

<style scoped></style>
