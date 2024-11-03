<script setup></script>

<template>
  <!-- Основной текст и кнопка -->
  <div
    class="grid grid-cols-12 grid-rows-3 gap-y-[30px] gap-x-[10px] px-[135px] lg:px-[100px] md:px-[50px] sm:px-[20px] mt-10"
  >
    <h1
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
      class="group font-myMedium uppercase text-[90px] lg:text-[70px] md:text-[55px] sm:text-[38px] xs:text-[30px] text-center col-start-1 col-end-13 row-start-1 row-end-2 text-white mt-[-10px] leading-relaxed flex items-center justify-center"
    >
      <span class="group-hover:text-customPurple">к</span
      ><span class="text-customOrange group-hover:text-customLime">о</span
      ><span class="group-hover:text-customPurple">л</span
      ><span class="text-customLime group-hover:text-white">о</span
      ><span class="text-customPurple group-hover:text-customOrange">p</span
      ><span class="group-hover:text-customPurple">и</span
      ><span class="text-customPurple group-hover:text-customOrange">с</span
      ><span class="text-customOrange group-hover:text-customLime">т</span
      ><span class="text-customPurple group-hover:text-customOrange">и</span
      ><span class="group-hover:text-customPurple">к</span
      ><span class="text-customLime group-hover:text-white">а</span>
    </h1>
    <div
      class="col-start-1 col-end-13 row-start-2 row-end-3 border-4 hover:bg-white hover:bg-opacity-20 border-white rounded-l-[60px] lg:rounded-l-[40px] md:rounded-l-[40px] sm:rounded-l-[30px] rounded-tr-[60px] lg:rounded-tr-[40px] md:rounded-tr-[40px] sm:rounded-tr-[30px] h-fit w-fit px-6 py-2 justify-self-end flex items-center justify-center"
    >
      <p
        class="font-myUnbounded text-white text-[31px] lg:text-[25px] md:text-[20px] sm:text-[14px] font-medium lowercase"
      >
        важное о цвете
      </p>
    </div>
    <!-- Текстовый блок -->
    <p
      class="font-myUnbounded font-light text-[25px] md:text-[22px] sm:text-[18px] xs:text-[12px] mt-[-40px] text-white col-start-1 col-end-13 row-start-3 row-end-4 leading-relaxed"
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
