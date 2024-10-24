<script setup></script>

<template>
  <!-- Основной текст и кнопка -->
  <div class="grid grid-cols-12 grid-rows-5 gap-y-[30px] gap-x-[10px] px-[135px]">
    <h1
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
      class="font-myMedium uppercase hover:text-[100px] text-[95px] text-center col-start-1 col-end-13 row-start-2 row-end-3 text-white hover:text-customOrange hover:mt-[-20px] leading-relaxed"
    >
      композиция
    </h1>
    <!-- Текстовый блок -->
    <p
      :class="{ 'text-customLime': isHovered, 'text-white': !isHovered }"
      class="font-myUnbounded font-regular text-[20px] col-start-1 col-end-7 row-start-1 row-end-2 leading-relaxed"
    >
      ключевой
    </p>
    <p
      :class="{ 'text-customLime': isHovered, 'text-white': !isHovered }"
      class="font-myUnbounded font-regular text-[20px] flex items-end col-start-1 col-end-7 row-start-3 row-end-4 leading-relaxed"
    >
      элемент
    </p>
    <p
      :class="{ 'text-customLime': isHovered, 'text-white': !isHovered }"
      class="font-myUnbounded font-regular text-[20px] text-end col-start-7 col-end-13 row-start-1 row-end-2 leading-relaxed"
    >
      любого
    </p>
    <p
      :class="{ 'text-customLime': isHovered, 'text-white': !isHovered }"
      class="font-myUnbounded font-regular text-[20px] flex justify-end items-end col-start-7 col-end-13 row-start-3 row-end-4 leading-relaxed"
    >
      дизайна
    </p>
    <div class="flex items-center col-start-1 col-end-13 row-start-4 row-end-6">
      <div>
        <p class="font-myUnbounded font-light text-[25px] text-white leading-relaxed">
          <span class="text-customLime hover:text-customOrange">Композиция</span>
          — искусство грамотного размещения элементов на странице, которое создает визуальную
          гармонию, привлекает внимание к ключевой информации и делает дизайн эффективным.
          Правильная композиция обеспечивает баланс, ритм и удобство восприятия дизайна.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompositionIntroSection',
  data() {
    return {
      isHovered: false // Режим наведения (по умолчанию выключен)
    }
  }
}
</script>

<style scoped>
/* Стили для страницы "Композиция" */
</style>
