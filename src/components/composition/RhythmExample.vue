<script setup></script>

<template>
  <!-- Текст "начинается с основ" -->
  <div class="grid grid-cols-12 grid-rows-4 gap-y-[30px] gap-x-[10px] px-[135px] mb-10">
    <div class="col-start-1 col-end-13 row-start-1 row-end-2 flex items-end">
      <p class="text-white font-myUnbounded font-light text-[22px]">
        <span class="text-customOrange font-medium">{{ main_text }}&ensp;</span>
        {{ text_about }}
      </p>
    </div>

    <div class="col-start-1 col-end-13 row-start-2 row-end-5 flex justify-between items-center">
      <div
        class="w-full h-[310px] flex items-center justify-center border-4 border-white rounded-br-[60px] rounded-tl-[60px] rounded-tr-[60px] py-20 px-48 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RhyrthmExample',
  props: {
    main_text: {
      type: String,
      required: true
    },
    text_about: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
/* Стили для страницы "Композиция" */
</style>
