<script setup></script>

<template>
  <div
    class="grid grid-cols-12 grid-rows-4 gap-y-[30px] sm:gap-y-[15px] gap-x-[10px] px-[135px] lg:px-[100px] md:px-[50px] sm:px-[20px] mb-10 xs:mb-0"
  >
    <div class="col-start-1 col-end-13 row-start-1 row-end-2 flex items-end">
      <p
        class="text-white font-myUnbounded font-light text-[22px] lg:text-[18px] sm:text-[16px] xs:text-[14px]"
      >
        <span class="text-customOrange font-medium">{{ main_text }}&ensp;</span>
        {{ text_about }}
      </p>
    </div>

    <div class="col-start-1 col-end-13 row-start-2 row-end-5 flex justify-between">
      <div
        class="w-full h-[310px] lg:h-[260px] md:h-[220px] sm:h-[180px] flex items-center justify-center border-4 border-white rounded-br-[60px] lg:rounded-br-[40px] md:rounded-br-[40px] sm:rounded-br-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[40px] sm:rounded-tl-[30px] rounded-tr-[60px] lg:rounded-tr-[40px] md:rounded-tr-[40px] sm:rounded-tr-[30px] py-20 lg:py-16 md:py-12 sm:py-8 px-48 lg:px-32 md:px-24 sm:px-20 xs:px-12 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
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
