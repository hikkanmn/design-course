<script setup></script>

<template>
  <!-- Текст "начинается с основ" -->
  <div
    class="pr-16 py-2 bg-customPurple rounded-r-full pl-[135px] mr-[135px] my-20 text-white flex justify-between items-center"
  >
    <p class="text-[65px] font-myMedium">контраст</p>
    <span class="font-myUnbounded font-medium text-[65px]">2</span>
  </div>
  <div class="grid grid-cols-12 grid-rows-8 gap-y-[30px] gap-x-[10px] px-[135px]">
    <p
      class="col-start-1 col-end-12 row-start-1 row-end-2 text-white font-myUnbounded font-light text-[22px]"
    >
      <span class="text-customLime">Композиционный контраст в дизайне </span> — это создание
      различий между элементами дизайна, чтобы привлечь внимание зрителя и сделать композицию более
      интересной и динамичной.
    </p>

    <p
      class="col-start-1 col-end-13 row-start-2 row-end-3 text-customLime font-myUnbounded font-light text-[22px] flex items-center"
    >
      Существуют разные виды контраста:
    </p>

    <div class="col-start-1 col-end-13 row-start-3 row-end-6 flex justify-between items-center">
      <div
        @mouseover="isHoveredl = true"
        @mouseleave="isHoveredl = false"
        class="grid grid-cols-2 grid-rows-2 gap-6 w-[310px] h-[310px] border-4 border-white rounded-br-[60px] rounded-tl-[60px] rounded-tr-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10 transition duration-700 ease-in-out"
      >
        <div
          :class="{ 'bg-customPurple': isHoveredl, 'bg-customLime': !isHoveredl }"
          class="w-full h-full transition-all transform duration-500 ease-in-out"
        ></div>
        <div
          :class="{ 'bg-customLime': isHoveredl, 'bg-customPurple': !isHoveredl }"
          class="w-full h-full transition-all transform duration-500 ease-in-out"
        ></div>
        <div
          :class="{ 'bg-customPurple': isHoveredl, 'bg-customLime': !isHoveredl }"
          class="w-full h-full transition-all transform duration-500 ease-in-out"
        ></div>
        <div
          :class="{ 'bg-customPurple': isHoveredl, 'bg-customLime': !isHoveredl }"
          class="w-full h-full transition-all transform duration-500 ease-in-out"
        ></div>
      </div>
      <div
        @mouseover="isHoveredc = true"
        @mouseleave="isHoveredc = false"
        class="grid grid-cols-2 grid-rows-2 gap-6 w-[310px] h-[310px] border-4 border-white rounded-br-[60px] rounded-tl-[60px] rounded-tr-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10 transition duration-700 ease-in-out"
      >
        <div
          :class="{ 'scale-100': isHoveredc, 'scale-50': !isHoveredc }"
          class="scale-50 bg-customLime transition-all transform duration-700 ease-in-out"
        ></div>
        <div
          :class="{ 'scale-50': isHoveredc, 'scale-100': !isHoveredc }"
          class="w-full h-full bg-customLime transition-all transform duration-700 ease-in-out"
        ></div>
        <div
          :class="{ 'scale-50': isHoveredc, 'scale-100': !isHoveredc }"
          class="w-full h-full bg-customLime transition-all transform duration-700 ease-in-out"
        ></div>
        <div
          :class="{ 'scale-50': isHoveredc, 'scale-100': !isHoveredc }"
          class="w-full h-full bg-customLime transition-all transform duration-700 ease-in-out"
        ></div>
      </div>
      <div
        @mouseover="isHoveredr = true"
        @mouseleave="isHoveredr = false"
        class="grid grid-cols-2 grid-rows-2 gap-6 w-[310px] h-[310px] border-4 border-white rounded-br-[60px] rounded-tl-[60px] rounded-tr-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10 transition duration-700 ease-in-out"
      >
        <div
          :class="{ 'rounded-[60px]': isHoveredr, 'rounded-none': !isHoveredr }"
          class="w-full h-full bg-customLime transition-all transform duration-700"
        ></div>
        <div
          :class="{ 'rounded-[60px]': isHoveredr, 'rounded-none': !isHoveredr }"
          class="w-full h-full bg-customLime transition-all transform duration-700"
        ></div>
        <div
          :class="{ 'rounded-none': isHoveredr, 'rounded-[60px]': !isHoveredr }"
          class="w-full h-full rounded-[60px] bg-customLime transition-all transform duration-700"
        ></div>
        <div
          :class="{ 'rounded-[60px]': isHoveredr, 'rounded-none': !isHoveredr }"
          class="w-full h-full bg-customLime transition-all transform duration-700"
        ></div>
      </div>
    </div>
    <p
      :class="{ 'text-white': isHoveredl, 'text-customOrange': !isHoveredl }"
      class="col-start-1 col-end-5 row-start-6 row-end-7 font-myUnbounded font-medium text-[22px] lowercase transition-all transform duration-500 ease-in-out"
    >
      по цвету
    </p>
    <p
      :class="{ 'text-white': isHoveredc, 'text-customOrange': !isHoveredc }"
      class="col-start-5 col-end-9 row-start-6 row-end-7 font-myUnbounded font-medium text-[22px] text-center lowercase transition-all transform duration-500 ease-in-out"
    >
      по размеру
    </p>

    <p
      :class="{ 'text-white': isHoveredr, 'text-customOrange': !isHoveredr }"
      class="col-start-9 col-end-13 row-start-6 row-end-7 font-myUnbounded font-medium text-[22px] text-end lowercase transition-all transform duration-500 ease-in-out"
    >
      по форме
    </p>
    <div
      class="col-start-1 col-end-13 row-start-7 row-end-9 text-white font-myUnbounded font-light text-[22px] flex flex-col"
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
