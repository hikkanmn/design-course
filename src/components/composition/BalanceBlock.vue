<script setup></script>

<template>
  <div
    class="pr-16 xs:pr-8 py-2 bg-customPurple hover:bg-opacity-50 hover:border-r-4 hover:border-white rounded-r-full pl-[135px] lg:pl-[100px] md:pl-[50px] sm:pl-[20px] mr-[135px] lg:mr-[100px] md:mr-[50px] sm:mr-[20px] mt-32 md:mt-24 mb-10 md:mb-4 text-white flex justify-between items-center"
  >
    <p
      class="text-[65px] lg:text-[35px] md:text-[30px] sm:text-[24px] xs:text-[18px] font-myMedium"
    >
      баланс
    </p>
    <span
      class="font-myUnbounded font-medium text-[65px] lg:text-[35px] md:text-[30px] sm:text-[24px]"
      >1</span
    >
  </div>
  <div
    class="grid grid-cols-12 grid-rows-9 xs:grid-rows-11 lg:grid-rows-8 gap-y-[30px] gap-x-[10px] px-[135px] lg:px-[100px] md:px-[50px] sm:px-[20px]"
  >
    <p
      class="col-start-1 col-end-13 row-start-1 row-end-2 text-customLime font-myUnbounded font-light text-[22px] lg:text-[18px] sm:text-[16px] xs:text-[14px] flex items-center"
    >
      Существует два основных типа баланса:
    </p>
    <p
      class="col-start-1 col-end-7 row-start-2 row-end-4 xs:col-end-13 text-white font-myUnbounded font-light text-[22px] lg:text-[18px] sm:text-[16px] xs:text-[14px] flex flex-col"
    >
      <span class="text-customLime">Симметричный баланс:</span> Элементы располагаются симметрично
      относительно центральной оси. Создает чувство стабильности, порядка и формальности.
    </p>
    <p
      class="col-start-7 col-end-13 row-start-2 row-end-4 xs:col-start-1 xs:row-start-4 xs:row-end-6 text-white font-myUnbounded font-light text-[22px] lg:text-[18px] sm:text-[16px] xs:text-[14px] flex flex-col mb-10 sm:mb-4 xs:mb-0"
    >
      <span class="text-customLime">Асимметричный баланс:</span> Элементы располагаются
      несимметрично, но создают ощущение равновесия засчет использования разных по весу и размеру
      элементов. Создает динамику, интерес и неформальность.
    </p>
    <div
      @mouseover="isHoveredl = true"
      @mouseleave="isHoveredl = false"
      class="col-start-1 col-end-6 row-start-4 row-end-7 lg:row-end-6 xs:row-start-6 xs:row-end-8 border-4 border-white rounded-br-[60px] lg:rounded-br-[40px] md:rounded-br-[40px] sm:rounded-br-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[40px] sm:rounded-tl-[30px] rounded-tr-[60px] lg:rounded-tr-[40px] md:rounded-tr-[40px] sm:rounded-tr-[30px] sm:h-fit sm:self-center flex justify-center items-center sm:py-20 xs:py-10 px-20 lg:px-16 md:px-12 sm:px-8 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
    >
      <img
        class="hover:scale-110"
        src="/src/img/balance_group_1.svg"
        alt="Ошибка загрузки изображения! Перезагрузите страницу"
      />
    </div>
    <p
      :class="{ 'text-white': isHoveredl, 'text-customOrange': !isHoveredl }"
      class="col-start-1 col-end-6 row-start-7 row-end-8 lg:row-start-6 lg:row-end-7 xs:row-start-8 xs:row-end-9 text-customOrange font-myUnbounded font-medium text-[22px] lg:text-[18px] sm:text-[16px] xs:text-[14px] lowercase transition duration-700 ease-in-out"
    >
      симметричный баланс
    </p>
    <div
      @mouseover="isHoveredr = true"
      @mouseleave="isHoveredr = false"
      class="col-start-7 col-end-12 row-start-4 row-end-7 border-4 lg:row-end-6 xs:row-start-6 xs:row-end-8 border-white rounded-br-[60px] lg:rounded-br-[40px] md:rounded-br-[40px] sm:rounded-br-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[40px] sm:rounded-tl-[30px] rounded-tr-[60px] lg:rounded-tr-[40px] md:rounded-tr-[40px] sm:rounded-tr-[30px] sm:h-fit sm:self-center flex justify-center items-center sm:py-20 xs:py-10 px-20 lg:px-16 md:px-12 sm:px-8 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
    >
      <img
        class="hover:scale-110"
        src="/src/img/balance_group_2.svg"
        alt="Ошибка загрузки изображения! Перезагрузите страницу"
      />
    </div>
    <p
      :class="{ 'text-white': isHoveredr, 'text-customOrange': !isHoveredr }"
      class="col-start-7 col-end-12 row-start-7 row-end-8 lg:row-start-6 lg:row-end-7 xs:row-start-8 xs:row-end-9 text-customOrange font-myUnbounded font-medium text-[22px] lg:text-[18px] sm:text-[16px] xs:text-[14px] lowercase transition duration-700 ease-in-out"
    >
      асимметричный баланс
    </p>
    <div
      class="col-start-1 col-end-13 row-start-8 row-end-10 lg:row-start-7 lg:row-end-9 xs:row-start-9 xs:row-end-12 text-white font-myUnbounded font-light text-[22px] lg:text-[18px] sm:text-[16px] xs:text-[14px] flex flex-col mb-10"
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
