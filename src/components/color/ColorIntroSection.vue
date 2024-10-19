<script setup></script>

<template>
  <!-- Основной текст и кнопка -->
  <div class="grid grid-cols-12 grid-rows-3 gap-y-[30px] gap-x-[10px] px-[135px] mt-10">
    <h1
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
      class="group font-myMedium uppercase text-[100px] text-center col-start-1 col-end-13 row-start-1 row-end-2 text-white mt-[-10px] leading-relaxed"
    >
      <span class="group-hover:text-customPurple transition-all transform duration-500 ease-in-out"
        >к</span
      ><span
        class="text-customOrange group-hover:text-customLime transition-all transform duration-500 ease-in-out"
        >о</span
      ><span class="group-hover:text-customPurple transition-all transform duration-500 ease-in-out"
        >л</span
      ><span
        class="text-customLime group-hover:text-white transition-all transform duration-500 ease-in-out"
        >о</span
      ><span
        class="text-customPurple group-hover:text-customOrange transition-all transform duration-500 ease-in-out"
        >p</span
      ><span class="group-hover:text-customPurple transition-all transform duration-500 ease-in-out"
        >и</span
      ><span
        class="text-customPurple group-hover:text-customOrange transition-all transform duration-500 ease-in-out"
        >с</span
      ><span
        class="text-customOrange group-hover:text-customLime transition-all transform duration-500 ease-in-out"
        >т</span
      ><span
        class="text-customPurple group-hover:text-customOrange transition-all transform duration-500 ease-in-out"
        >и</span
      ><span class="group-hover:text-customPurple transition-all transform duration-500 ease-in-out"
        >к</span
      ><span
        class="text-customLime group-hover:text-white transition-all transform duration-500 ease-in-out"
        >а</span
      >
    </h1>
    <div
      class="col-start-8 col-end-13 row-start-2 row-end-3 border-4 border-white rounded-l-[60px] rounded-tr-[60px] mb-20 flex items-center justify-center"
    >
      <p class="font-myUnbounded text-white text-[31px] font-medium lowercase">важное о цвете</p>
    </div>
    <!-- Текстовый блок -->
    <p
      class="font-myUnbounded font-light text-[25px] mt-[-40px] text-white col-start-1 col-end-13 row-start-3 row-end-4 leading-relaxed transition-all transform duration-500 ease-in-out"
    >
      <span class="text-customLime">Колористика </span> — это искусство использования цвета для
      создания визуального эффекта, передачи эмоций и создания гармонии в композиции.
    </p>
    <div
      class="h-[110px] col-start-1 col-end-13 row-start-3 row-end-4 border-b-4 border-customLime"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'ColorIntroSection'
}
</script>

<style scoped>
/* Стили для страницы "Композиция" */
</style>
