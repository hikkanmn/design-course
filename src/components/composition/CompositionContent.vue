<script setup></script>

<template>
  <!-- Основной текст и кнопка -->

  <div class="grid grid-cols-12 grid-rows-3 gap-y-[30px] gap-x-[10px] px-[135px] items-end">
    <p
      class="font-myMedium uppercase text-[40px] flex justify-center col-start-1 col-end-13 row-start-1 row-end-2 text-white leading-relaxed border-t-8 border-t-customLime pt-8"
    >
      основные принципы композиции
    </p>
    <!-- баланс -->
    <p
      class="font-myUnbounded font-medium text-[55px] text-customPurple col-start-1 col-end-2 row-start-2 row-end-3"
    >
      1
    </p>
    <h2
      class="text-[22px] text-white font-myUnbounded font-medium uppercase col-start-2 col-end-5 row-start-2 row-end-3"
    >
      баланс
    </h2>
    <!-- контраст -->
    <p
      class="font-myUnbounded font-medium text-[55px] text-customPurple col-start-1 col-end-2 row-start-3 row-end-4"
    >
      2
    </p>
    <h2
      class="text-[22px] text-white font-myUnbounded font-medium uppercase col-start-2 col-end-5 row-start-3 row-end-4"
    >
      контраст
    </h2>
    <!-- ритм -->
    <p
      class="font-myUnbounded font-medium text-[55px] text-customPurple col-start-5 col-end-6 row-start-2 row-end-3"
    >
      3
    </p>
    <h2
      class="text-[22px] text-white font-myUnbounded font-medium uppercase col-start-6 col-end-9 row-start-2 row-end-3"
    >
      ритм
    </h2>
    <!-- единство -->
    <span
      class="font-myUnbounded font-medium text-[55px] text-customPurple col-start-5 col-end-6 row-start-3 row-end-4"
      >4</span
    >
    <h2
      class="text-[22px] text-white font-myUnbounded font-medium uppercase col-start-6 col-end-9 row-start-3 row-end-4"
    >
      единство
    </h2>
    <!-- золотое сечение -->
    <span
      class="font-myUnbounded font-medium text-[55px] text-customPurple col-start-9 col-end-10 row-start-2 row-end-3"
      >5</span
    >
    <h2
      class="text-[22px] text-white font-myUnbounded font-medium uppercase col-start-10 col-end-13 row-start-2 row-end-3"
    >
      золотое сечение
    </h2>
    <!-- правило третей -->
    <span
      class="font-myUnbounded font-medium text-[55px] text-customPurple col-start-9 col-end-10 row-start-3 row-end-4"
      >6</span
    >
    <h2
      class="text-[22px] text-white font-myUnbounded font-medium uppercase col-start-10 col-end-13 row-start-3 row-end-4"
    >
      правило третей
    </h2>
  </div>
</template>

<script>
export default {
  name: 'CompositionContent'
}
</script>

<style scoped>
/* Стили для страницы "Композиция" */
</style>
