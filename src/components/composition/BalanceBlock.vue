<script setup></script>

<template>
  <!-- Текст "начинается с основ" -->
  <div
    class="pr-16 py-2 bg-customPurple rounded-r-full pl-[135px] mr-[135px] mt-32 mb-10 text-white flex justify-between items-center"
  >
    <p class="text-[65px] font-myMedium">баланс</p>
    <span class="font-myUnbounded font-medium text-[65px]">1</span>
  </div>
  <div class="grid grid-cols-12 grid-rows-9 gap-y-[30px] gap-x-[10px] px-[135px]">
    <p
      class="col-start-1 col-end-13 row-start-1 row-end-2 text-customLime font-myUnbounded font-light text-[22px] flex items-center"
    >
      Существует два основных типа баланса:
    </p>
    <p
      class="col-start-1 col-end-7 row-start-2 row-end-4 text-white font-myUnbounded font-light text-[22px] flex flex-col"
    >
      <span class="text-customLime">Симметричный баланс:</span> Элементы располагаются симметрично
      относительно центральной оси. Создает чувство стабильности, порядка и формальности.
    </p>
    <p
      class="col-start-7 col-end-13 row-start-2 row-end-4 text-white font-myUnbounded font-light text-[22px] flex flex-col mb-10"
    >
      <span class="text-customLime">Асимметричный баланс:</span> Элементы располагаются
      несимметрично, но создают ощущение равновесия засчет использования разных по весу и размеру
      элементов. Создает динамику, интерес и неформальность.
    </p>
    <div
      @mouseover="isHoveredl = true"
      @mouseleave="isHoveredl = false"
      class="col-start-1 col-end-6 row-start-4 row-end-7 border-4 border-white rounded-br-[60px] rounded-tl-[60px] rounded-tr-[60px] flex justify-center items-center p-4 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
    >
      <img
        class="hover:scale-110"
        src="/src/img/balance_group_1.svg"
        alt="Ошибка загрузки изображения! Перезагрузите страницу"
      />
    </div>
    <p
      :class="{ 'text-white': isHoveredl, 'text-customOrange': !isHoveredl }"
      class="col-start-1 col-end-6 row-start-7 row-end-8 text-customOrange font-myUnbounded font-medium text-[22px] lowercase transition duration-700 ease-in-out"
    >
      симметричный баланс
    </p>
    <div
      @mouseover="isHoveredr = true"
      @mouseleave="isHoveredr = false"
      class="col-start-7 col-end-12 row-start-4 row-end-7 border-4 border-white rounded-br-[60px] rounded-tl-[60px] rounded-tr-[60px] flex justify-center items-center p-4 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
    >
      <img
        class="hover:scale-110"
        src="/src/img/balance_group_2.svg"
        alt="Ошибка загрузки изображения! Перезагрузите страницу"
      />
    </div>
    <p
      :class="{ 'text-white': isHoveredr, 'text-customOrange': !isHoveredr }"
      class="col-start-7 col-end-12 row-start-7 row-end-8 text-customOrange font-myUnbounded font-medium text-[22px] lowercase transition duration-700 ease-in-out"
    >
      асимметричный баланс
    </p>
    <div
      class="col-start-1 col-end-13 row-start-8 row-end-10 text-white font-myUnbounded font-light text-[22px] flex flex-col mb-10"
    >
      <h3 class="text-customLime mb-6">Баланс в дизайне важен, потому что:</h3>
      <p>• Делает дизайн более привлекательным и приятным для восприятия.</p>
      <p>• Создает чувство порядка и уверенности в информации.</p>
      <p>• Улучшает читаемость и восприятие контента.</p>
      <p>• Помогает выделить ключевые элементы дизайна.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BalanceBlock',
  data() {
    return {
      isHoveredl: false, // Режим наведения (по умолчанию выключен)
      isHoveredr: false // Режим наведения (по умолчанию выключен)
    }
  }
}
</script>

<style scoped>
/* Стили для страницы "Композиция" */
</style>
