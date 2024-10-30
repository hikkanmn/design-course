<script setup></script>

<template>
  <div
    class="pr-16 xs:pr-8 py-2 bg-customPurple hover:bg-opacity-50 hover:border-r-4 hover:border-white rounded-r-full pl-[135px] lg:pl-[100px] md:pl-[50px] sm:pl-[20px] mr-[135px] lg:mr-[100px] md:mr-[50px] sm:mr-[20px] mt-28 lg:mt-10 mb-10 text-white flex justify-between items-center"
  >
    <p class="text-[65px] lg:text-[35px] md:text-[30px] sm:text-[24px] xs:text-[18px]  font-myMedium">контраст</p>
    <span
      class="font-myUnbounded font-medium text-[65px] lg:text-[35px] md:text-[30px] sm:text-[24px]"
      >2</span
    >
  </div>
  <div
    class="grid grid-cols-12 grid-rows-8 gap-y-[30px] gap-x-[10px] px-[135px] lg:px-[100px] md:px-[50px] sm:px-[20px]"
  >
    <p
      class="col-start-1 col-end-12 row-start-1 row-end-2 sm:row-end-3 text-white font-myUnbounded font-light text-[22px] lg:text-[18px] sm:text-[16px] xs:text-[14px] "
    >
      <span class="text-customLime">Композиционный контраст в дизайне </span> — это создание
      различий между элементами дизайна, чтобы привлечь внимание зрителя и сделать композицию более
      интересной и динамичной.
    </p>

    <p
      class="col-start-1 col-end-13 row-start-2 row-end-3 sm:row-start-3 sm:row-end-4 text-customLime font-myUnbounded font-light text-[22px] lg:text-[18px] sm:text-[16px] xs:text-[14px]  flex items-center"
    >
      Существуют разные виды контраста:
    </p>

    <div
      class="col-start-1 col-end-13 row-start-3 row-end-6 sm:row-start-4 sm:row-end-6 flex justify-between items-center"
    >
      <div
        @mouseover="isHoveredl = true"
        @mouseleave="isHoveredl = false"
        class="grid grid-cols-2 grid-rows-2 gap-6 md:gap-4 xs:gap-3 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[180px] aspect-square border-4 border-white rounded-br-[60px] lg:rounded-br-[40px] md:rounded-br-[40px] sm:rounded-br-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[40px] sm:rounded-tl-[30px] rounded-tr-[60px] lg:rounded-tr-[40px] md:rounded-tr-[40px] sm:rounded-tr-[30px] p-16 lg:p-14 md:p-12 sm:p-10 xs:p-7 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10 transition duration-700 ease-in-out"
      >
        <div
          :class="{ 'bg-customPurple': isHoveredl, 'bg-customLime': !isHoveredl }"
          class="w-full h-full"
        ></div>
        <div
          :class="{ 'bg-customLime': isHoveredl, 'bg-customPurple': !isHoveredl }"
          class="w-full h-full"
        ></div>
        <div
          :class="{ 'bg-customPurple': isHoveredl, 'bg-customLime': !isHoveredl }"
          class="w-full h-full"
        ></div>
        <div
          :class="{ 'bg-customPurple': isHoveredl, 'bg-customLime': !isHoveredl }"
          class="w-full h-full"
        ></div>
      </div>
      <div
        @mouseover="isHoveredc = true"
        @mouseleave="isHoveredc = false"
        class="grid grid-cols-2 grid-rows-2 gap-6 md:gap-4 xs:gap-3 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[180px] aspect-square border-4 border-white rounded-[60px] lg:rounded-[40px] md:rounded-[40px] sm:rounded-[30px] p-16 lg:p-14 md:p-12 sm:p-10 xs:p-7 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10 transition duration-700 ease-in-out"
      >
        <div
          :class="{ 'scale-100': isHoveredc, 'scale-50': !isHoveredc }"
          class="w-full h-full bg-customLime"
        ></div>
        <div
          :class="{ 'scale-50': isHoveredc, 'scale-100': !isHoveredc }"
          class="w-full h-full bg-customLime"
        ></div>
        <div
          :class="{ 'scale-50': isHoveredc, 'scale-100': !isHoveredc }"
          class="w-full h-full bg-customLime"
        ></div>
        <div
          :class="{ 'scale-50': isHoveredc, 'scale-100': !isHoveredc }"
          class="w-full h-full bg-customLime"
        ></div>
      </div>
      <div
        @mouseover="isHoveredr = true"
        @mouseleave="isHoveredr = false"
        class="grid grid-cols-2 grid-rows-2 gap-6 md:gap-4 xs:gap-3 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[180px] aspect-square border-4 border-white rounded-bl-[60px] lg:rounded-bl-[40px] md:rounded-bl-[40px] sm:rounded-bl-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[40px] sm:rounded-tl-[30px] rounded-tr-[60px] lg:rounded-tr-[40px] md:rounded-tr-[40px] sm:rounded-tr-[30px] p-16 lg:p-14 md:p-12 sm:p-10 xs:p-7 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10 transition duration-700 ease-in-out"
      >
        <div
          :class="{ 'rounded-[60px]': isHoveredr, 'rounded-none': !isHoveredr }"
          class="w-full h-full bg-customLime transform duration-700"
        ></div>
        <div
          :class="{ 'rounded-[60px]': isHoveredr, 'rounded-none': !isHoveredr }"
          class="w-full h-full bg-customLime transform duration-700"
        ></div>
        <div
          :class="{ 'rounded-none': isHoveredr, 'rounded-[60px]': !isHoveredr }"
          class="w-full h-full rounded-[60px] bg-customLime transform duration-700"
        ></div>
        <div
          :class="{ 'rounded-[60px]': isHoveredr, 'rounded-none': !isHoveredr }"
          class="w-full h-full bg-customLime transform duration-700"
        ></div>
      </div>
    </div>
    <p
      :class="{ 'text-white': isHoveredl, 'text-customOrange': !isHoveredl }"
      class="col-start-1 col-end-5 row-start-6 row-end-7 font-myUnbounded font-medium text-[22px] lg:text-[18px] sm:text-[16px] xs:text-[14px]  lowercase"
    >
      по цвету
    </p>
    <p
      :class="{ 'text-white': isHoveredc, 'text-customOrange': !isHoveredc }"
      class="col-start-5 col-end-9 row-start-6 row-end-7 font-myUnbounded font-medium text-[22px] lg:text-[18px] sm:text-[16px] xs:text-[14px]  text-center lowercase"
    >
      по размеру
    </p>

    <p
      :class="{ 'text-white': isHoveredr, 'text-customOrange': !isHoveredr }"
      class="col-start-9 col-end-13 row-start-6 row-end-7 font-myUnbounded font-medium text-[22px] lg:text-[18px] sm:text-[16px] xs:text-[14px]  text-end lowercase"
    >
      по форме
    </p>
    <div
      class="col-start-1 col-end-13 row-start-7 row-end-9 text-white font-myUnbounded font-light text-[22px] lg:text-[18px] sm:text-[16px] xs:text-[14px]  flex flex-col"
    >
      <h3 class="text-customLime mb-6">Контраст помогает:</h3>
      <p>• Выделить ключевые элементы дизайна.</p>
      <p>• Создать ощущение глубины и динамики.</p>
      <p>• Сделать дизайн более запоминающимся и привлекательным.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContrastBlock',
  data() {
    return {
      isHoveredl: false, // Режим наведения (по умолчанию выключен)
      isHoveredc: false, // Режим наведения (по умолчанию выключен)
      isHoveredr: false // Режим наведения (по умолчанию выключен)
    }
  }
}
</script>

<style scoped>
/* Стили для страницы "Композиция" */
</style>
