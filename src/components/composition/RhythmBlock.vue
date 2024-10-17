<script setup></script>

<template>
  <!-- Текст "начинается с основ" -->
  <div
    class="pr-16 py-2 bg-customPurple rounded-r-full pl-[135px] mr-[135px] my-20 text-white flex justify-between items-center"
  >
    <p class="text-[65px] font-myMedium">ритм</p>
    <span class="font-myUnbounded font-medium text-[65px]">3</span>
  </div>
  <div class="grid grid-cols-12 grid-rows-8 gap-y-[30px] gap-x-[10px] px-[135px]">
    <p
      class="col-start-1 col-end-12 row-start-1 row-end-2 text-white font-myUnbounded font-light text-[22px]"
    >
      <span class="text-customLime">Ритм в дизайне </span>— это повторение и вариация элементов,
      которые создают динамику и движение в композиции.
    </p>
    <div class="col-start-1 col-end-13 row-start-3 row-end-4 flex justify-between items-end">
      <p class="text-customLime font-myUnbounded font-light text-[22px] flex items-center">
        Существует разные виды ритма:
      </p>
      <p class="text-customOrange font-myUnbounded font-medium text-[22px] lowercase">повторение</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RhythmBlock'
}
</script>

<style scoped>
/* Стили для страницы "Композиция" */
</style>
